/* Housing Research
   Builds the two searchable grids from the data files. No libraries, no build step. */

(function () {
  'use strict';

  var PAPERS = window.PAPERS || [];
  var CASES = window.CASES || [];
  var CATEGORIES = window.CATEGORIES || [];

  var GAP = '[...]';

  var MONTHS = ['January', 'February', 'March', 'April', 'May', 'June',
                'July', 'August', 'September', 'October', 'November', 'December'];

  /* How one paper sits against another, and what the other paper sees. */
  var RELATIONS = {
    follows:   { label: 'Follow-up to',  inverse: 'followed_by' },
    responds:  { label: 'Responds to',   inverse: 'answered_by' },
    companion: { label: 'Companion to',  inverse: 'companion' }
  };

  var INVERSE_LABELS = {
    followed_by: 'Followed by',
    answered_by: 'Answered by',
    companion: 'Companion to'
  };

  var SORT_OPTIONS = {
    research: [
      ['published|desc', 'Newest first'],
      ['published|asc', 'Oldest first'],
      ['title|asc', 'Title A to Z'],
      ['title|desc', 'Title Z to A'],
      ['authors|asc', 'Author A to Z'],
      ['authors|desc', 'Author Z to A']
    ],
    cases: [
      ['year|asc', 'Oldest first'],
      ['year|desc', 'Newest first'],
      ['name|asc', 'Case A to Z'],
      ['name|desc', 'Case Z to A'],
      ['forum|asc', 'Forum A to Z']
    ]
  };

  var DEFAULT_DIR = {
    research: { title: 'asc', authors: 'asc', published: 'desc' },
    cases: { name: 'asc', year: 'asc', forum: 'asc' }
  };

  var COPY = {
    research: {
      placeholder: 'Search titles, authors, and findings',
      noun: ['paper', 'papers'],
      empty: 'No research matched that search. Try fewer words.'
    },
    cases: {
      placeholder: 'Search case names, forums, and findings',
      noun: ['case', 'cases'],
      empty: 'No cases matched that search. Try fewer words.'
    }
  };

  var el = {
    q: document.getElementById('q'),
    chips: document.getElementById('chips'),
    rows: document.getElementById('rows'),
    caserows: document.getElementById('caserows'),
    count: document.getElementById('count'),
    empty: document.getElementById('empty'),
    grid: document.getElementById('grid'),
    casegrid: document.getElementById('casegrid'),
    panels: {
      research: document.getElementById('panel-research'),
      cases: document.getElementById('panel-cases')
    },
    tabs: Array.prototype.slice.call(document.querySelectorAll('.tab')),
    tabCounts: {
      research: document.getElementById('count-research'),
      cases: document.getElementById('count-cases')
    },
    reset: document.getElementById('reset'),
    exportBtn: document.getElementById('export'),
    sortpick: document.getElementById('sortpick')
  };

  var state = {
    tab: 'research',
    query: '',
    cats: [],
    forums: [],
    sort: {
      research: { key: 'published', dir: 'desc' },
      cases: { key: 'year', dir: 'asc' }
    }
  };

  /* ---------- paper links, both directions ---------- */

  var byId = {};
  PAPERS.forEach(function (p) { byId[p.id] = p; });

  var links = {};
  function addLink(fromId, toId, label) {
    if (!byId[toId] || fromId === toId) return;
    if (!links[fromId]) links[fromId] = [];
    var already = links[fromId].some(function (l) { return l.id === toId; });
    if (!already) links[fromId].push({ id: toId, label: label });
  }
  PAPERS.forEach(function (p) {
    (p.related || []).forEach(function (rel) {
      var spec = RELATIONS[rel.relation];
      if (!spec) return;
      addLink(p.id, rel.id, spec.label);
      addLink(rel.id, p.id, INVERSE_LABELS[spec.inverse]);
    });
  });

  /* ---------- small helpers ---------- */

  function fold(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[‐-―−]/g, '-')
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"');
  }

  function tokenize(q) {
    return fold(q).split(/\s+/).filter(Boolean);
  }

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }

  function monthYear(value) {
    var parts = String(value || '').split('-');
    var m = parseInt(parts[1], 10);
    if (!parts[0] || !m || m < 1 || m > 12) return String(value || '');
    return MONTHS[m - 1] + ' ' + parts[0];
  }

  function lastName(name) {
    var parts = String(name || '').trim().split(/\s+/);
    return fold(parts[parts.length - 1] || '');
  }

  function sortText(t) {
    return fold(t).replace(/^(the|a|an)\s+/, '');
  }

  function noun(n) {
    var pair = COPY[state.tab].noun;
    return n === 1 ? pair[0] : pair[1];
  }

  /* Text with the search words wrapped in <mark>. */
  function highlighted(text, tokens) {
    var frag = document.createDocumentFragment();
    text = String(text == null ? '' : text);
    if (!tokens.length) {
      frag.appendChild(document.createTextNode(text));
      return frag;
    }
    var re = new RegExp('(' + tokens.map(escapeRe).join('|') + ')', 'ig');
    text.split(re).forEach(function (part, i) {
      if (!part) return;
      if (i % 2 === 1) {
        var mk = document.createElement('mark');
        mk.textContent = part;
        frag.appendChild(mk);
      } else {
        frag.appendChild(document.createTextNode(part));
      }
    });
    return frag;
  }

  /* A quotation, with joins between separated passages shown quietly. */
  function quoteNodes(text, tokens) {
    var frag = document.createDocumentFragment();
    String(text || '').split(GAP).forEach(function (part, i) {
      if (i > 0) {
        var gap = document.createElement('span');
        gap.className = 'gapmark';
        gap.textContent = GAP;
        frag.appendChild(gap);
      }
      frag.appendChild(highlighted(part, tokens));
    });
    return frag;
  }

  function linkIcon() {
    var ns = 'http://www.w3.org/2000/svg';
    var svg = document.createElementNS(ns, 'svg');
    svg.setAttribute('class', 'relicon');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttribute('aria-hidden', 'true');
    svg.setAttribute('focusable', 'false');
    ['M6.6 9.4a2.6 2.6 0 0 1 0-3.7l2.1-2.1a2.6 2.6 0 1 1 3.7 3.7l-1 1',
     'M9.4 6.6a2.6 2.6 0 0 1 0 3.7l-2.1 2.1a2.6 2.6 0 1 1-3.7-3.7l1-1'
    ].forEach(function (d) {
      var path = document.createElementNS(ns, 'path');
      path.setAttribute('d', d);
      svg.appendChild(path);
    });
    return svg;
  }

  function hostOf(url) {
    try { return new URL(url).hostname.replace(/^www\./, ''); } catch (err) { return ''; }
  }

  /* Adds the quotation, the expander, and the line saying where it came from. */
  function quoteCell(td, text, sourceLabel, tokens, row) {
    var q = document.createElement('p');
    q.className = 'point clamped';
    q.appendChild(quoteNodes(text, tokens));
    td.appendChild(q);

    var more = document.createElement('button');
    more.type = 'button';
    more.className = 'more';
    more.textContent = 'Read the whole quotation';
    more.hidden = true;
    more.addEventListener('click', function () {
      var opened = q.classList.toggle('clamped') === false;
      more.textContent = opened ? 'Show less' : 'Read the whole quotation';
    });
    td.appendChild(more);

    if (sourceLabel) {
      var src = document.createElement('p');
      src.className = 'source';
      src.textContent = 'Quoted from the ' + String(sourceLabel).toLowerCase();
      td.appendChild(src);
    }
    row._point = q;
    row._more = more;
  }

  function outLink(url, label, title) {
    var a = document.createElement('a');
    a.className = 'open';
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.textContent = label;
    if (title) a.setAttribute('aria-label', title);
    a.title = 'Opens ' + (hostOf(url) || 'the page') + ' in a new tab';
    return a;
  }

  /* ---------- what is in each tab ---------- */

  function paperHay(p) {
    if (!p._hay) {
      p._hay = fold([
        p.title, p.also_titled,
        (p.authors || []).join(' '),
        (p.affiliations || []).join(' '),
        (p.categories || []).join(' '),
        (p.keywords || []).join(' '),
        p.key_point, p.abstract, p.source_text,
        p.venue, p.kind, p.access, p.doi,
        p.published, monthYear(p.published),
        (links[p.id] || []).map(function (l) {
          return l.label + ' ' + (byId[l.id] ? byId[l.id].title : '');
        }).join(' ')
      ].join('   '));
    }
    return p._hay;
  }

  function caseHay(c) {
    if (!c._hay) {
      c._hay = fold([
        c.name, c.citation, c.forum, c.year,
        c.finding, c.source_text, c.finding_source, c.decided,
        (c.keywords || []).join(' ')
      ].join('   '));
    }
    return c._hay;
  }

  function matches(hay, tokens) {
    for (var i = 0; i < tokens.length; i++) {
      if (hay.indexOf(tokens[i]) === -1) return false;
    }
    return true;
  }

  function items() {
    return state.tab === 'cases' ? CASES : PAPERS;
  }

  function hayFor(item) {
    return state.tab === 'cases' ? caseHay(item) : paperHay(item);
  }

  function chipValues(item) {
    return state.tab === 'cases' ? [item.forum] : (item.categories || []);
  }

  function activeChips() {
    return state.tab === 'cases' ? state.forums : state.cats;
  }

  /* Everything the words match, before the chips are applied. */
  function textMatched() {
    var tokens = tokenize(state.query);
    if (!tokens.length) return items().slice();
    return items().filter(function (item) { return matches(hayFor(item), tokens); });
  }

  function matchesChips(item) {
    var on = activeChips();
    if (!on.length) return true;
    var values = chipValues(item);
    for (var i = 0; i < on.length; i++) {
      if (values.indexOf(on[i]) !== -1) return true;
    }
    return false;
  }

  function selected() {
    return textMatched().filter(matchesChips).sort(comparator);
  }

  function comparator(a, b) {
    var sort = state.sort[state.tab];
    var dir = sort.dir === 'desc' ? -1 : 1;
    var va, vb, tie;
    if (state.tab === 'cases') {
      if (sort.key === 'name') { va = sortText(a.name); vb = sortText(b.name); }
      else if (sort.key === 'forum') { va = fold(a.forum); vb = fold(b.forum); }
      else { va = String(a.decided || a.year); vb = String(b.decided || b.year); }
      tie = sortText(a.name) < sortText(b.name) ? -1 : 1;
    } else {
      if (sort.key === 'title') { va = sortText(a.title); vb = sortText(b.title); }
      else if (sort.key === 'authors') { va = lastName((a.authors || [])[0]); vb = lastName((b.authors || [])[0]); }
      else { va = String(a.published || ''); vb = String(b.published || ''); }
      tie = sortText(a.title) < sortText(b.title) ? -1 : 1;
    }
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return tie;
  }

  /* ---------- chips ---------- */

  function renderChips() {
    var counts = {};
    textMatched().forEach(function (item) {
      chipValues(item).forEach(function (v) {
        if (v) counts[v] = (counts[v] || 0) + 1;
      });
    });

    var inUse = {};
    items().forEach(function (item) {
      chipValues(item).forEach(function (v) { if (v) inUse[v] = true; });
    });

    var order;
    if (state.tab === 'cases') {
      order = Object.keys(inUse).sort().map(function (name) {
        return { name: name, blurb: '' };
      });
    } else {
      order = CATEGORIES.filter(function (c) { return inUse[c.name]; });
      Object.keys(inUse).forEach(function (name) {
        var known = CATEGORIES.some(function (c) { return c.name === name; });
        if (!known) order.push({ name: name, blurb: '' });
      });
    }

    var on = activeChips();
    el.chips.textContent = '';
    order.forEach(function (c) {
      var pressed = on.indexOf(c.name) !== -1;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.setAttribute('aria-pressed', pressed ? 'true' : 'false');
      if (c.blurb) b.title = c.blurb;
      if (!counts[c.name] && !pressed) b.setAttribute('data-empty', 'true');
      b.appendChild(document.createTextNode(c.name));
      var n = document.createElement('span');
      n.className = 'n';
      n.textContent = counts[c.name] || 0;
      b.appendChild(n);
      b.setAttribute('aria-label', c.name + ', ' + (counts[c.name] || 0) + ' ' + noun(counts[c.name] || 0));
      b.addEventListener('click', function () { toggleChip(c.name); });
      el.chips.appendChild(b);
    });
  }

  /* ---------- rows ---------- */

  function renderResearchRows(list, tokens) {
    el.rows.textContent = '';
    list.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.dataset.id = p.id;

      var tdTitle = document.createElement('td');
      tdTitle.className = 'cell-title';
      var h = document.createElement('p');
      h.className = 'title';
      var a = document.createElement('a');
      a.href = p.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.appendChild(highlighted(p.title, tokens));
      h.appendChild(a);
      tdTitle.appendChild(h);

      var venue = document.createElement('p');
      venue.className = 'venue';
      venue.appendChild(highlighted(p.venue || '', tokens));
      tdTitle.appendChild(venue);

      if (p.also_titled) {
        var alt = document.createElement('p');
        alt.className = 'venue alt';
        alt.appendChild(document.createTextNode('Also circulated as '));
        alt.appendChild(highlighted(p.also_titled, tokens));
        tdTitle.appendChild(alt);
      }

      (links[p.id] || []).forEach(function (link) {
        tdTitle.appendChild(relatedLine(link, tokens));
      });
      tr.appendChild(tdTitle);

      var tdAuth = document.createElement('td');
      tdAuth.className = 'authors';
      tdAuth.setAttribute('data-label', 'Authors');
      (p.authors || []).forEach(function (name) {
        var s = document.createElement('span');
        s.className = 'who';
        s.appendChild(highlighted(name, tokens));
        tdAuth.appendChild(s);
      });
      tr.appendChild(tdAuth);

      var tdWhen = document.createElement('td');
      tdWhen.className = 'when';
      tdWhen.setAttribute('data-label', 'Published');
      var when = document.createElement('time');
      when.className = 'whenval';
      if (p.published) when.setAttribute('datetime', p.published);
      if (p.published_basis) when.title = p.published_basis;
      when.appendChild(highlighted(monthYear(p.published), tokens));
      tdWhen.appendChild(when);
      tr.appendChild(tdWhen);

      var tdCat = document.createElement('td');
      tdCat.setAttribute('data-label', 'Category');
      tdCat.appendChild(chipList(p.categories || []));
      tr.appendChild(tdCat);

      var tdPoint = document.createElement('td');
      tdPoint.setAttribute('data-label', 'The most important point');
      quoteCell(tdPoint, p.key_point, p.key_point_source, tokens, tr);
      tr.appendChild(tdPoint);

      var tdLink = document.createElement('td');
      tdLink.setAttribute('data-label', 'Link');
      tdLink.appendChild(outLink(p.url, 'Read it',
        'Read ' + p.title + ' at ' + (hostOf(p.url) || 'the publisher') + ', opens in a new tab'));
      if (p.access) {
        var acc = document.createElement('p');
        acc.className = 'access';
        acc.textContent = p.access;
        tdLink.appendChild(acc);
      }
      tr.appendChild(tdLink);

      el.rows.appendChild(tr);
    });
  }

  function renderCaseRows(list, tokens) {
    el.caserows.textContent = '';
    list.forEach(function (c) {
      var tr = document.createElement('tr');
      tr.dataset.id = c.id;

      var tdName = document.createElement('td');
      tdName.className = 'cell-title';
      var h = document.createElement('p');
      h.className = 'title';
      var a = document.createElement('a');
      a.href = c.url;
      a.target = '_blank';
      a.rel = 'noopener noreferrer';
      a.appendChild(highlighted(c.name, tokens));
      h.appendChild(a);
      tdName.appendChild(h);
      var cite = document.createElement('p');
      cite.className = 'venue';
      cite.appendChild(highlighted(c.citation || '', tokens));
      tdName.appendChild(cite);
      tr.appendChild(tdName);

      var tdYear = document.createElement('td');
      tdYear.className = 'when';
      tdYear.setAttribute('data-label', 'Year');
      var y = document.createElement('time');
      y.className = 'whenval';
      if (c.decided) {
        y.setAttribute('datetime', c.decided);
        y.title = 'Decided ' + longDate(c.decided);
      }
      y.appendChild(highlighted(String(c.year), tokens));
      tdYear.appendChild(y);
      tr.appendChild(tdYear);

      var tdForum = document.createElement('td');
      tdForum.setAttribute('data-label', 'Forum');
      tdForum.appendChild(chipList([c.forum]));
      tr.appendChild(tdForum);

      var tdFind = document.createElement('td');
      tdFind.setAttribute('data-label', 'The major finding');
      quoteCell(tdFind, c.finding, c.finding_source, tokens, tr);
      tr.appendChild(tdFind);

      var tdLink = document.createElement('td');
      tdLink.setAttribute('data-label', 'Link');
      tdLink.appendChild(outLink(c.url, c.url_label || 'Read about it',
        'Read about ' + c.name + ' at ' + (hostOf(c.url) || 'the source') + ', opens in a new tab'));
      if (c.opinion_url) {
        var op = document.createElement('p');
        op.className = 'access';
        var oa = document.createElement('a');
        oa.className = 'quietlink';
        oa.href = c.opinion_url;
        oa.target = '_blank';
        oa.rel = 'noopener noreferrer';
        oa.textContent = 'The opinion';
        oa.setAttribute('aria-label', 'Read the opinion in ' + c.name + ', opens in a new tab');
        op.appendChild(oa);
        tdLink.appendChild(op);
      }
      tr.appendChild(tdLink);

      el.caserows.appendChild(tr);
    });
  }

  function longDate(iso) {
    var parts = String(iso).split('-');
    var m = parseInt(parts[1], 10);
    if (!m) return iso;
    return MONTHS[m - 1] + ' ' + parseInt(parts[2], 10) + ', ' + parts[0];
  }

  function chipList(values) {
    var ul = document.createElement('ul');
    ul.className = 'catlist';
    values.filter(Boolean).forEach(function (v) {
      var li = document.createElement('li');
      var btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat';
      btn.textContent = v;
      btn.title = 'Show only this group';
      btn.setAttribute('aria-label', 'Show only ' + v);
      btn.addEventListener('click', function () { toggleChip(v); });
      li.appendChild(btn);
      ul.appendChild(li);
    });
    return ul;
  }

  function relatedLine(link, tokens) {
    var other = byId[link.id];
    var line = document.createElement('p');
    line.className = 'related';
    line.appendChild(linkIcon());
    var label = document.createElement('span');
    label.className = 'rel-label';
    label.textContent = link.label + ' ';
    line.appendChild(label);
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'rel-link';
    btn.appendChild(highlighted(other.title, tokens));
    btn.setAttribute('aria-label', link.label + ' ' + other.title + '. Show that paper.');
    btn.addEventListener('click', function () { goToPaper(other.id); });
    ['mouseenter', 'focus'].forEach(function (ev) {
      btn.addEventListener(ev, function () { markPartner(other.id, true); });
    });
    ['mouseleave', 'blur'].forEach(function (ev) {
      btn.addEventListener(ev, function () { markPartner(other.id, false); });
    });
    line.appendChild(btn);
    return line;
  }

  function rowFor(id) {
    return el.rows.querySelector('tr[data-id="' + id + '"]');
  }

  function markPartner(id, on) {
    var row = rowFor(id);
    if (row) row.classList.toggle('partner', on);
  }

  var stillMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function goToPaper(id) {
    var row = rowFor(id);
    if (!row) {
      resetAll();
      row = rowFor(id);
    }
    if (!row) return;
    row.scrollIntoView({ behavior: stillMotion ? 'auto' : 'smooth', block: 'center' });
    row.classList.remove('flash');
    void row.offsetWidth;
    row.classList.add('flash');
    var titleLink = row.querySelector('.title a');
    if (titleLink) titleLink.focus({ preventScroll: true });
  }

  /* ---------- the shell ---------- */

  function renderSortHeads() {
    var sort = state.sort[state.tab];
    Array.prototype.forEach.call(document.querySelectorAll('.sort'), function (b) {
      if (b.dataset.tab !== state.tab) return;
      var on = b.dataset.key === sort.key;
      b.setAttribute('data-active', on ? 'true' : 'false');
      b.querySelector('.arrow').textContent = on ? (sort.dir === 'asc' ? '▲' : '▼') : '';
      var th = b.closest('th');
      if (th) th.setAttribute('aria-sort', on ? (sort.dir === 'asc' ? 'ascending' : 'descending') : 'none');
    });
  }

  function renderSortPicker() {
    var sort = state.sort[state.tab];
    var wanted = sort.key + '|' + sort.dir;
    el.sortpick.textContent = '';
    SORT_OPTIONS[state.tab].forEach(function (pair) {
      var opt = document.createElement('option');
      opt.value = pair[0];
      opt.textContent = pair[1];
      el.sortpick.appendChild(opt);
    });
    el.sortpick.value = wanted;
  }

  function render() {
    var tokens = tokenize(state.query);
    renderChips();
    renderSortHeads();
    renderSortPicker();

    /* Only the tab on screen holds rows. The other one is emptied so nothing
       stale is left behind for a search reader or a later reader of the page. */
    var list = selected();
    if (state.tab === 'cases') {
      el.rows.textContent = '';
      renderCaseRows(list, tokens);
    } else {
      el.caserows.textContent = '';
      renderResearchRows(list, tokens);
    }

    var panel = el.panels[state.tab];
    panel.hidden = false;
    Object.keys(el.panels).forEach(function (name) {
      if (name !== state.tab) el.panels[name].hidden = true;
    });

    var table = state.tab === 'cases' ? el.casegrid : el.grid;
    table.hidden = list.length === 0;
    el.empty.hidden = list.length !== 0;
    el.empty.textContent = COPY[state.tab].empty;

    var total = items().length;
    var narrowed = state.query || activeChips().length;
    el.count.textContent = narrowed
      ? 'Showing ' + list.length + ' of ' + total + ' ' + noun(total)
      : total + ' ' + noun(total);
    el.reset.hidden = !narrowed;

    el.tabCounts.research.textContent = PAPERS.length;
    el.tabCounts.cases.textContent = CASES.length;
    el.tabs.forEach(function (t) {
      var on = t.dataset.tab === state.tab;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    el.q.placeholder = COPY[state.tab].placeholder;

    /* Only offer the expander where the text is actually cut off. */
    var body = state.tab === 'cases' ? el.caserows : el.rows;
    requestAnimationFrame(function () {
      Array.prototype.forEach.call(body.children, function (tr) {
        if (!tr._point) return;
        tr._more.hidden = tr._point.scrollHeight <= tr._point.clientHeight + 1;
      });
    });
  }

  /* ---------- actions ---------- */

  function toggleChip(name) {
    var on = activeChips();
    var i = on.indexOf(name);
    if (i === -1) on.push(name);
    else on.splice(i, 1);
    writeHash();
    render();
  }

  function setTab(name) {
    if (!el.panels[name] || state.tab === name) return;
    state.tab = name;
    writeHash();
    render();
  }

  function setSort(key) {
    var sort = state.sort[state.tab];
    if (sort.key === key) {
      sort.dir = sort.dir === 'asc' ? 'desc' : 'asc';
    } else {
      sort.key = key;
      sort.dir = (DEFAULT_DIR[state.tab] || {})[key] || 'asc';
    }
    render();
  }

  function resetAll() {
    state.query = '';
    state.cats = [];
    state.forums = [];
    el.q.value = '';
    writeHash();
    render();
    el.q.focus();
  }

  /* ---------- shareable address ---------- */

  function writeHash() {
    var parts = [];
    if (state.tab !== 'research') parts.push('tab=' + state.tab);
    if (state.query) parts.push('q=' + encodeURIComponent(state.query));
    if (state.cats.length) parts.push('cat=' + state.cats.map(encodeURIComponent).join('|'));
    if (state.forums.length) parts.push('forum=' + state.forums.map(encodeURIComponent).join('|'));
    var hash = parts.length ? '#' + parts.join('&') : '';
    if (hash !== location.hash) {
      history.replaceState(null, '', location.pathname + location.search + hash);
    }
  }

  function readHash() {
    var raw = location.hash.replace(/^#/, '');
    if (!raw) return;
    raw.split('&').forEach(function (pair) {
      var i = pair.indexOf('=');
      if (i === -1) return;
      var k = pair.slice(0, i);
      var v = pair.slice(i + 1);
      function listOf(value) {
        return value.split('|').map(function (s) {
          return decodeURIComponent(s.replace(/\+/g, ' '));
        }).filter(Boolean);
      }
      if (k === 'tab' && el.panels[v]) state.tab = v;
      if (k === 'q') {
        state.query = decodeURIComponent(v.replace(/\+/g, ' '));
        el.q.value = state.query;
      }
      if (k === 'cat') state.cats = listOf(v);
      if (k === 'forum') state.forums = listOf(v);
    });
  }

  /* ---------- spreadsheet download ---------- */

  function csvCell(v) {
    return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"';
  }

  function csvFor(tab, list) {
    if (tab === 'cases') {
      var caseHead = ['Case', 'Citation', 'Year', 'Decided', 'Forum',
                      'The major finding', 'Quoted from', 'Link', 'Opinion'];
      return [caseHead].concat(list.map(function (c) {
        return [c.name, c.citation, c.year, c.decided, c.forum,
                c.finding, c.finding_source, c.url, c.opinion_url || ''];
      }));
    }
    var head = ['Title', 'Authors', 'Published', 'Category', 'The most important point',
                'Quoted from', 'Publication', 'Date basis', 'Related research', 'Access', 'Link'];
    return [head].concat(list.map(function (p) {
      return [
        p.title,
        (p.authors || []).join(', '),
        monthYear(p.published),
        (p.categories || []).join(', '),
        p.key_point,
        p.key_point_source,
        p.venue,
        p.published_basis,
        (links[p.id] || []).map(function (l) {
          return l.label + ' ' + (byId[l.id] ? byId[l.id].title : l.id);
        }).join(', '),
        p.access,
        p.url
      ];
    }));
  }

  function downloadCsv() {
    var table = csvFor(state.tab, selected());
    var body = table.map(function (row) { return row.map(csvCell).join(','); }).join('\r\n');
    var blob = new Blob(['﻿' + body], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = state.tab === 'cases' ? 'housing-court-cases.csv' : 'housing-research.csv';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setTimeout(function () { URL.revokeObjectURL(url); }, 1000);
  }

  /* ---------- wiring ---------- */

  el.q.addEventListener('input', function () {
    state.query = el.q.value;
    writeHash();
    render();
  });

  el.q.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && el.q.value) {
      e.preventDefault();
      resetAll();
    }
  });

  el.reset.addEventListener('click', resetAll);
  el.exportBtn.addEventListener('click', downloadCsv);

  Array.prototype.forEach.call(document.querySelectorAll('.sort'), function (b) {
    b.addEventListener('click', function () { setSort(b.dataset.key); });
  });

  el.sortpick.addEventListener('change', function () {
    var picked = el.sortpick.value.split('|');
    state.sort[state.tab] = { key: picked[0], dir: picked[1] };
    render();
  });

  el.tabs.forEach(function (t, index) {
    t.addEventListener('click', function () { setTab(t.dataset.tab); });
    t.addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      var step = e.key === 'ArrowRight' ? 1 : -1;
      var next = el.tabs[(index + step + el.tabs.length) % el.tabs.length];
      setTab(next.dataset.tab);
      next.focus();
    });
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    e.preventDefault();
    el.q.focus();
    el.q.select();
  });

  /* Someone edited the address, or came back to a shared one. */
  window.addEventListener('hashchange', function () {
    state.tab = 'research';
    state.query = '';
    state.cats = [];
    state.forums = [];
    el.q.value = '';
    readHash();
    render();
  });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(render, 150);
  });

  readHash();
  render();
})();
