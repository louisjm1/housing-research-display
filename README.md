# Housing Research

A small website that lists housing policy research in a searchable table, like a
spreadsheet you can filter. Each row holds the title, the authors, the month it
was published, up to three grouping categories, the most important point of the
paper in the paper's own words, and a link to the research.

## What is in here

| File | What it is |
| --- | --- |
| `index.html` | The page itself. Open it and the table appears. |
| `assets/style.css` | How the page looks. |
| `assets/app.js` | The searching, filtering, sorting, and download button. |
| `data/papers.js` | **The library.** One entry per paper. This is the only file that changes as papers get added. |
| `data/categories.js` | The approved list of grouping categories. |
| `check.py` | The safety check. It confirms every entry is complete and every quoted finding is word for word what the paper says. |

There is nothing to install and nothing to build. It is plain HTML, CSS, and
JavaScript, so it runs anywhere.

## Looking at the site on your Mac

Open Finder, go to this folder, and double click `index.html`. It opens in your
browser and works exactly as it will on the web.

If you would rather view it the way a real web server would, run `python3
serve.py` in Terminal and open the address it prints. Only your own machine can
reach it.

## Adding a paper

Send the link and ask for it to be added. Behind the scenes an entry gets
written into `data/papers.js` that looks like this:

```
{
  "id": "author-year-short-title",
  "title": "the title exactly as printed",
  "authors": ["First Last"],
  "published": "2024-11",
  "published_basis": "Published online",
  "venue": "the journal or law review, with volume, year, and pages",
  "kind": "Peer reviewed article",
  "access": "Open access",
  "categories": ["one to three names from data/categories.js"],
  "key_point": "the most important point, quoted from the paper",
  "key_point_source": "Abstract",
  "abstract": "the full abstract, word for word",
  "keywords": ["as the publisher lists them"],
  "url": "the link",
  "related": [{ "id": "the-earlier-paper", "relation": "follows" }],
  "added": "2026-08-08"
}
```

`related` is optional and only the newer paper needs it. Write it once there,
and the earlier paper picks up the other half of the sentence on its own. A
paper that says it *follows* another shows "Follow-up to", and the earlier one
shows "Followed by". The three link types are `follows`, `responds`, and
`companion`.

## The rules this project holds itself to

1. **Quotations are exact.** The most important point is lifted from the paper,
   not rewritten. Where two sentences that sit apart in the original are joined,
   the gap is marked `[...]` so nothing looks continuous that is not.
2. **Every paper carries one to three categories**, and only categories that are
   already on the approved list in `data/categories.js`.
3. **Titles, authors, and journals are recorded as the publisher prints them.**
4. **The published date is the month the linked version actually came out**, and
   `published_basis` says where that date comes from. This is not always the
   year printed on the journal issue. A paper can appear online in December and
   carry the following year on its issue, and the table shows the month it
   became available while the publication column shows the citation as printed.
5. **A link between two papers has to point forward in time.** A follow-up
   cannot be older than the paper it follows.

The safety check enforces all five. Open Terminal, type `cd ` with a space,
drag this folder onto the Terminal window, press Return, and then run:

```bash
python3 check.py
```

If it says *All good*, the library is clean. If it finds a problem it names the
paper and says what to fix, and it refuses to pass.

## Putting the site on the web

The repository is set up for GitHub Pages, which hosts this kind of page for
free. In the repository on GitHub, open **Settings**, choose **Pages** in the
left sidebar, set the source to the `main` branch and the root folder, and save.
A few minutes later the site is live at the address GitHub shows on that page.
