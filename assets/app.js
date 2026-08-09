/* Housing Research
   Builds the searchable grid from the data files. No libraries, no build step. */

(function () {
  'use strict';

  var PAPERS = window.PAPERS || [];
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

  var el = {
    q: document.getElementById('q'),
    chips: document.getElementById('chips'),
    rows: document.getElementById('rows'),
    count: document.getElementById('count'),
    empty: document.getElementById('empty'),
    grid: document.getElementById('grid'),
    reset: document.getElementById('reset'),
    exportBtn: document.getElementById('export'),
    sortpick: document.getElementById('sortpick')
  };

  var state = {
    query: '',
    cats: [],
    sortKey: 'published',
    sortDir: 'desc'
  };

  var DEFAULT_DIR = { title: 'asc', authors: 'asc', published: 'desc' };

  var byId = {};
  PAPERS.forEach(function (p) { byId[p.id] = p; });

  /* Both halves of every link, so only the newer paper has to declare it. */
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

  function monthYear(value) {
    var parts = String(value || '').split('-');
    var m = parseInt(parts[1], 10);
    if (!parts[0] || !m || m < 1 || m > 12) return String(value || '');
    return MONTHS[m - 1] + ' ' + parts[0];
  }

  /* ---------- helpers ---------- */

  function fold(s) {
    return String(s == null ? '' : s)
      .toLowerCase()
      .normalize('NFD')
      .replace(/[̀-ͯ]/g, '')
      .replace(/[‐-―−]/g, '-')
      .replace(/[‘’]/g, "'")
      .replace(/[“”]/g, '"');
  }

  function haystack(p) {
    if (!p._hay) {
      p._hay = fold([
        p.title,
        (p.authors || []).join(' '),
        (p.affiliations || []).join(' '),
        (p.categories || []).join(' '),
        (p.keywords || []).join(' '),
        p.key_point,
        p.abstract,
        p.venue,
        p.kind,
        p.access,
        p.doi,
        p.published,
        monthYear(p.published),
        (links[p.id] || []).map(function (l) {
          return l.label + ' ' + (byId[l.id] ? byId[l.id].title : '');
        }).join(' ')
      ].join('   '));
    }
    return p._hay;
  }

  function tokenize(q) {
    return fold(q).split(/\s+/).filter(Boolean);
  }

  function matchesQuery(p, tokens) {
    if (!tokens.length) return true;
    var hay = haystack(p);
    for (var i = 0; i < tokens.length; i++) {
      if (hay.indexOf(tokens[i]) === -1) return false;
    }
    return true;
  }

  function matchesCats(p) {
    if (!state.cats.length) return true;
    var cats = p.categories || [];
    for (var i = 0; i < state.cats.length; i++) {
      if (cats.indexOf(state.cats[i]) !== -1) return true;
    }
    return false;
  }

  function lastName(name) {
    var parts = String(name || '').trim().split(/\s+/);
    return fold(parts[parts.length - 1] || '');
  }

  function sortTitle(t) {
    return fold(t).replace(/^(the|a|an)\s+/, '');
  }

  function escapeRe(s) {
    return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
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
    var parts = text.split(re);
    parts.forEach(function (part, i) {
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

  /* The quoted point, with joins between separated sentences shown quietly. */
  function pointNodes(text, tokens) {
    var frag = document.createDocumentFragment();
    var parts = String(text || '').split(GAP);
    parts.forEach(function (part, i) {
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

  /* A quiet chain mark, drawn rather than fetched. */
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

  /* The one line that says this paper and another one belong together. */
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
      /* It is filtered out of view, so open the shutters first. */
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

  /* ---------- selection ---------- */

  function textMatched() {
    var tokens = tokenize(state.query);
    return PAPERS.filter(function (p) { return matchesQuery(p, tokens); });
  }

  function selected() {
    return textMatched().filter(matchesCats).sort(comparator);
  }

  function comparator(a, b) {
    var dir = state.sortDir === 'desc' ? -1 : 1;
    var va, vb;
    if (state.sortKey === 'title') {
      va = sortTitle(a.title); vb = sortTitle(b.title);
    } else if (state.sortKey === 'authors') {
      va = lastName((a.authors || [])[0]); vb = lastName((b.authors || [])[0]);
    } else {
      va = String(a.published || ''); vb = String(b.published || '');
    }
    if (va < vb) return -1 * dir;
    if (va > vb) return 1 * dir;
    return sortTitle(a.title) < sortTitle(b.title) ? -1 : 1;
  }

  /* ---------- rendering ---------- */

  function renderChips() {
    var pool = textMatched();
    var counts = {};
    pool.forEach(function (p) {
      (p.categories || []).forEach(function (c) {
        counts[c] = (counts[c] || 0) + 1;
      });
    });

    var inUse = {};
    PAPERS.forEach(function (p) {
      (p.categories || []).forEach(function (c) { inUse[c] = true; });
    });

    var order = CATEGORIES.filter(function (c) { return inUse[c.name]; });
    Object.keys(inUse).forEach(function (name) {
      var known = CATEGORIES.some(function (c) { return c.name === name; });
      if (!known) order.push({ name: name, blurb: '' });
    });

    el.chips.textContent = '';
    order.forEach(function (c) {
      var on = state.cats.indexOf(c.name) !== -1;
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'chip';
      b.setAttribute('aria-pressed', on ? 'true' : 'false');
      if (c.blurb) b.title = c.blurb;
      if (!counts[c.name] && !on) b.setAttribute('data-empty', 'true');
      b.appendChild(document.createTextNode(c.name));
      var n = document.createElement('span');
      n.className = 'n';
      n.textContent = counts[c.name] || 0;
      b.appendChild(n);
      b.setAttribute('aria-label', c.name + ', ' + (counts[c.name] || 0) + ' ' + noun(counts[c.name] || 0));
      b.addEventListener('click', function () { toggleCat(c.name); });
      el.chips.appendChild(b);
    });
  }

  function renderRows() {
    var tokens = tokenize(state.query);
    var list = selected();

    el.rows.textContent = '';

    list.forEach(function (p) {
      var tr = document.createElement('tr');
      tr.dataset.id = p.id;

      /* title */
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
      (links[p.id] || []).forEach(function (link) {
        tdTitle.appendChild(relatedLine(link, tokens));
      });
      tr.appendChild(tdTitle);

      /* authors */
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

      /* published */
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

      /* categories */
      var tdCat = document.createElement('td');
      tdCat.setAttribute('data-label', 'Category');
      var ul = document.createElement('ul');
      ul.className = 'catlist';
      (p.categories || []).forEach(function (c) {
        var li = document.createElement('li');
        var btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cat';
        btn.textContent = c;
        btn.title = 'Show only research in this category';
        btn.setAttribute('aria-label', 'Show only research in ' + c);
        btn.addEventListener('click', function () { toggleCat(c); });
        li.appendChild(btn);
        ul.appendChild(li);
      });
      tdCat.appendChild(ul);
      tr.appendChild(tdCat);

      /* the point */
      var tdPoint = document.createElement('td');
      tdPoint.setAttribute('data-label', 'The most important point');
      var q = document.createElement('p');
      q.className = 'point clamped';
      q.appendChild(pointNodes(p.key_point, tokens));
      tdPoint.appendChild(q);
      var more = document.createElement('button');
      more.type = 'button';
      more.className = 'more';
      more.textContent = 'Read the whole quotation';
      more.hidden = true;
      more.addEventListener('click', function () {
        var opened = q.classList.toggle('clamped') === false;
        more.textContent = opened ? 'Show less' : 'Read the whole quotation';
      });
      tdPoint.appendChild(more);
      if (p.key_point_source) {
        var src = document.createElement('p');
        src.className = 'source';
        src.textContent = 'Quoted from the ' + String(p.key_point_source).toLowerCase();
        tdPoint.appendChild(src);
      }
      tr.appendChild(tdPoint);

      /* link */
      var tdLink = document.createElement('td');
      tdLink.setAttribute('data-label', 'Link');
      var open = document.createElement('a');
      open.className = 'open';
      open.href = p.url;
      open.target = '_blank';
      open.rel = 'noopener noreferrer';
      open.textContent = 'Read it';
      var host = '';
      try { host = new URL(p.url).hostname.replace(/^www\./, ''); } catch (err) { host = ''; }
      open.title = 'Opens ' + (host || 'the publisher page') + ' in a new tab';
      open.setAttribute('aria-label', 'Read ' + p.title + ' at ' + (host || 'the publisher') + ', opens in a new tab');
      tdLink.appendChild(open);
      if (p.access) {
        var acc = document.createElement('p');
        acc.className = 'access';
        acc.textContent = p.access;
        tdLink.appendChild(acc);
      }
      tr.appendChild(tdLink);

      el.rows.appendChild(tr);
      tr._point = q;
      tr._more = more;
    });

    el.grid.hidden = list.length === 0;
    el.empty.hidden = list.length !== 0;

    var total = PAPERS.length;
    var filtered = state.query || state.cats.length;
    el.count.textContent = filtered
      ? 'Showing ' + list.length + ' of ' + total + ' ' + noun(total)
      : total + ' ' + noun(total);

    el.reset.hidden = !filtered;

    /* Only offer the expander where the text is actually cut off. */
    requestAnimationFrame(function () {
      Array.prototype.forEach.call(el.rows.children, function (tr) {
        if (!tr._point) return;
        tr._more.hidden = tr._point.scrollHeight <= tr._point.clientHeight + 1;
      });
    });
  }

  function noun(n) { return n === 1 ? 'paper' : 'papers'; }

  function renderSortHeads() {
    Array.prototype.forEach.call(document.querySelectorAll('.sort'), function (b) {
      var on = b.dataset.key === state.sortKey;
      b.setAttribute('data-active', on ? 'true' : 'false');
      b.querySelector('.arrow').textContent = on ? (state.sortDir === 'asc' ? '▲' : '▼') : '';
      var th = b.closest('th');
      if (th) th.setAttribute('aria-sort', on ? (state.sortDir === 'asc' ? 'ascending' : 'descending') : 'none');
    });
    if (el.sortpick) el.sortpick.value = state.sortKey + '|' + state.sortDir;
  }

  function render() {
    renderChips();
    renderSortHeads();
    renderRows();
  }

  /* ---------- actions ---------- */

  function toggleCat(name) {
    var i = state.cats.indexOf(name);
    if (i === -1) state.cats.push(name);
    else state.cats.splice(i, 1);
    writeHash();
    render();
  }

  function setSort(key) {
    if (state.sortKey === key) {
      state.sortDir = state.sortDir === 'asc' ? 'desc' : 'asc';
    } else {
      state.sortKey = key;
      state.sortDir = DEFAULT_DIR[key] || 'asc';
    }
    render();
  }

  function resetAll() {
    state.query = '';
    state.cats = [];
    el.q.value = '';
    writeHash();
    render();
    el.q.focus();
  }

  /* ---------- shareable address ---------- */

  function writeHash() {
    var parts = [];
    if (state.query) parts.push('q=' + encodeURIComponent(state.query));
    if (state.cats.length) parts.push('cat=' + state.cats.map(encodeURIComponent).join('|'));
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
      if (k === 'q') {
        state.query = decodeURIComponent(v.replace(/\+/g, ' '));
        el.q.value = state.query;
      }
      if (k === 'cat') {
        state.cats = v.split('|').map(function (s) {
          return decodeURIComponent(s.replace(/\+/g, ' '));
        }).filter(Boolean);
      }
    });
  }

  /* ---------- spreadsheet download ---------- */

  function csvCell(v) {
    var s = String(v == null ? '' : v);
    return '"' + s.replace(/"/g, '""') + '"';
  }

  function downloadCsv() {
    var head = ['Title', 'Authors', 'Published', 'Category', 'The most important point',
                'Quoted from', 'Publication', 'Date basis', 'Related research', 'Access', 'Link'];
    var lines = [head.map(csvCell).join(',')];
    selected().forEach(function (p) {
      lines.push([
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
      ].map(csvCell).join(','));
    });
    var blob = new Blob(['﻿' + lines.join('\r\n')], { type: 'text/csv;charset=utf-8' });
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'housing-research.csv';
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

  if (el.sortpick) {
    el.sortpick.addEventListener('change', function () {
      var picked = el.sortpick.value.split('|');
      state.sortKey = picked[0];
      state.sortDir = picked[1];
      render();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return;
    var t = e.target;
    if (t && (t.tagName === 'INPUT' || t.tagName === 'TEXTAREA' || t.isContentEditable)) return;
    e.preventDefault();
    el.q.focus();
    el.q.select();
  });

  var resizeTimer = null;
  window.addEventListener('resize', function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(renderRows, 150);
  });

  readHash();
  render();
})();
