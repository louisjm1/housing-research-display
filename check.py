#!/usr/bin/env python3
"""Checks the research library before it goes on the web.

Run it with:   python3 check.py

It answers one question in plain language: is every entry complete, and is
every quoted finding word for word what the paper actually says? If anything
is off, it says exactly which paper and what to fix, and it stops with an
error so a broken entry never gets published by accident.

Only the Python that comes with the Mac is used. Nothing to install.
"""

import json
import re
import sys
from pathlib import Path

HERE = Path(__file__).resolve().parent
PAPERS_FILE = HERE / "data" / "papers.js"
CATEGORIES_FILE = HERE / "data" / "categories.js"
SITE_FILES = ["index.html", "assets/style.css", "assets/app.js"]

GAP = "[...]"
MIN_POINT_CHARS = 150
MAX_CATEGORIES = 3
ID_PATTERN = re.compile(r"^[a-z0-9]+(-[a-z0-9]+)*$")
DATE_PATTERN = re.compile(r"^\d{4}-\d{2}-\d{2}$")
MONTH_PATTERN = re.compile(r"^(19|20)\d{2}-(0[1-9]|1[0-2])$")

# How one paper can point at another. "follows" means this paper came later.
RELATIONS = {"follows", "responds", "companion"}
NEWER_THAN_TARGET = {"follows", "responds"}

REQUIRED = [
    "id", "title", "authors", "published", "published_basis", "venue",
    "categories", "key_point", "key_point_source", "abstract", "url", "added",
]


def load_block(path, variable):
    """Pull the JSON list out of a data file such as `window.PAPERS = [...];`."""
    if not path.exists():
        return None, "The file %s is missing." % path.name
    text = path.read_text(encoding="utf-8")
    marker = "window.%s" % variable
    start = text.find(marker)
    if start == -1:
        return None, "%s does not contain %s." % (path.name, marker)
    start = text.find("[", start)
    end = text.rfind("]")
    if start == -1 or end == -1 or end < start:
        return None, "The list in %s is not closed properly." % path.name
    try:
        return json.loads(text[start:end + 1]), None
    except json.JSONDecodeError as exc:
        return None, "%s is not valid data: %s (line %d)" % (path.name, exc.msg, exc.lineno)


def quoted_segments(point):
    """The separate stretches of quotation inside one finding."""
    return [seg.strip() for seg in point.split(GAP) if seg.strip()]


def check():
    problems = []
    notes = []

    for name in SITE_FILES:
        if not (HERE / name).exists():
            problems.append("The site file %s is missing." % name)

    categories, err = load_block(CATEGORIES_FILE, "CATEGORIES")
    if err:
        return [err], notes
    known = [c.get("name") for c in categories]
    if len(known) != len(set(known)):
        problems.append("The category list has the same name in it twice.")

    papers, err = load_block(PAPERS_FILE, "PAPERS")
    if err:
        return [err], notes

    by_id = {p["id"]: p for p in papers if isinstance(p, dict) and p.get("id")}
    seen_ids = {}
    seen_urls = {}

    for index, paper in enumerate(papers):
        label = paper.get("title") or paper.get("id") or "entry number %d" % (index + 1)

        missing = [f for f in REQUIRED if not paper.get(f)]
        if missing:
            problems.append('"%s" is missing: %s.' % (label, ", ".join(missing)))
            continue

        paper_id = paper["id"]
        if not ID_PATTERN.match(paper_id):
            problems.append('"%s" has an id that is not lowercase words joined by dashes: %s'
                            % (label, paper_id))
        if paper_id in seen_ids:
            problems.append('Two entries share the id "%s": "%s" and "%s".'
                            % (paper_id, seen_ids[paper_id], label))
        seen_ids[paper_id] = label

        url = paper["url"]
        if not url.startswith("http"):
            problems.append('"%s" has a link that is not a web address: %s' % (label, url))
        if url in seen_urls:
            problems.append('The same link is used twice, by "%s" and "%s".'
                            % (seen_urls[url], label))
        seen_urls[url] = label

        if not isinstance(paper["authors"], list):
            problems.append('"%s" needs its authors written as a list.' % label)

        if not MONTH_PATTERN.match(str(paper["published"])):
            problems.append('"%s" needs its published date written as a month, YYYY-MM. '
                            'It currently reads: %r' % (label, paper["published"]))

        if not DATE_PATTERN.match(str(paper["added"])):
            problems.append('"%s" needs its added date written as YYYY-MM-DD.' % label)

        cats = paper["categories"]
        if not isinstance(cats, list) or not cats:
            problems.append('"%s" needs at least one category.' % label)
        else:
            if len(cats) > MAX_CATEGORIES:
                problems.append('"%s" has %d categories, and the limit is %d.'
                                % (label, len(cats), MAX_CATEGORIES))
            if len(cats) != len(set(cats)):
                problems.append('"%s" lists the same category twice.' % label)
            for cat in cats:
                if cat not in known:
                    problems.append('"%s" uses a category that is not on the approved list: "%s". '
                                    'Add it to data/categories.js first.' % (label, cat))

        point = paper["key_point"]
        if len(point) < MIN_POINT_CHARS:
            problems.append('"%s" has a most important point of only %d characters. '
                            'This column is meant to carry the most text, so aim for %d or more.'
                            % (label, len(point), MIN_POINT_CHARS))

        # The heart of the check: the quoted finding has to be word for word.
        source = str(paper["key_point_source"]).strip().lower()
        if source == "abstract":
            abstract = paper["abstract"]
            for seg in quoted_segments(point):
                if seg not in abstract:
                    problems.append(
                        '"%s" has a quoted finding that does not appear word for word in the '
                        'stored abstract. The wording that does not match starts: "%s..."'
                        % (label, seg[:70]))
        else:
            notes.append('"%s" quotes the %s rather than the abstract, so the wording could not '
                         'be checked against the stored abstract.' % (label, source))

    # Links between papers, checked once every id is known.
    link_count = 0
    for paper in papers:
        label = paper.get("title") or paper.get("id") or "an entry"
        related = paper.get("related")
        if related is None:
            continue
        if not isinstance(related, list):
            problems.append('"%s" needs its related research written as a list.' % label)
            continue
        targets = []
        for rel in related:
            if not isinstance(rel, dict) or not rel.get("id") or not rel.get("relation"):
                problems.append('"%s" has a related entry missing an id or a relation.' % label)
                continue
            if rel["relation"] not in RELATIONS:
                problems.append('"%s" uses a link type that does not exist: "%s". The choices are %s.'
                                % (label, rel["relation"], ", ".join(sorted(RELATIONS))))
                continue
            if rel["id"] == paper.get("id"):
                problems.append('"%s" is linked to itself.' % label)
                continue
            if rel["id"] not in by_id:
                problems.append('"%s" is linked to a paper that is not in the library: "%s".'
                                % (label, rel["id"]))
                continue
            if rel["id"] in targets:
                problems.append('"%s" is linked to the same paper twice.' % label)
                continue
            targets.append(rel["id"])
            link_count += 1
            other = by_id[rel["id"]]
            if rel["relation"] in NEWER_THAN_TARGET:
                if str(paper.get("published", "")) <= str(other.get("published", "")):
                    problems.append('"%s" is marked as a "%s" of "%s", so it should have the later '
                                    'published date, and it does not.'
                                    % (label, rel["relation"], other.get("title", rel["id"])))

    if link_count:
        notes.append("Links between papers: %d." % link_count)

    used = set()
    for paper in papers:
        for cat in paper.get("categories", []):
            used.add(cat)
    idle = [c for c in known if c not in used]
    if idle:
        notes.append("Categories on the list that no paper uses yet: %s." % ", ".join(idle))

    notes.append("Papers in the library: %d." % len(papers))
    return problems, notes


def main():
    problems, notes = check()

    for note in notes:
        print("   " + note)

    if problems:
        print("")
        print("STOP. %d thing%s to fix:" % (len(problems), "" if len(problems) == 1 else "s"))
        for problem in problems:
            print("   x  " + problem)
        return 1

    print("")
    print("All good. Every entry is complete and every quoted finding matches its source.")
    return 0


if __name__ == "__main__":
    sys.exit(main())
