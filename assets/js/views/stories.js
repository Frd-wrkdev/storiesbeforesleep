/* Stories view - full catalogue with search, and category-filtered results.
   One component serves both the /cerita and /kategori/:id routes. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  CBT.views = CBT.views || {};

  function E(s) { return CBT.dom.esc(s); }
  function ui() { return CBT.ui; }

  var fuse = null;
  function getFuse() {
    if (fuse !== null) return fuse;
    if (typeof global.Fuse !== 'function') { fuse = false; return fuse; }
    fuse = new global.Fuse(CBT.stories.written, {
      includeScore: true,
      threshold: 0.42,
      ignoreLocation: true,
      minMatchCharLength: 2,
      keys: [
        { name: 'title', weight: 5 },
        { name: 'excerpt', weight: 3 },
        { name: 'categories', weight: 2 },
        { name: 'body', weight: 1 }
      ]
    });
    return fuse;
  }

  function searchStories(q) {
    q = String(q || '').trim();
    if (!q) return null;
    var f = getFuse();
    if (f) {
      return f.search(q).map(function (r) { return r.item; });
    }
    var needle = q.toLowerCase();
    return CBT.stories.written.filter(function (s) {
      if (s.title.toLowerCase().indexOf(needle) !== -1) return true;
      if (s.excerpt.toLowerCase().indexOf(needle) !== -1) return true;
      if (s.categories.join(' ').indexOf(needle) !== -1) return true;
      return s.body.join(' ').toLowerCase().indexOf(needle) !== -1;
    });
  }

  function resultsHtml(list, q) {
    var a = ui();
    if (!list.length) {
      return a.empty({
        sprite: 'cloud',
        title: q ? 'Tidak ada cerita yang cocok' : 'Belum ada cerita di sini',
        text: q
          ? 'Coba kata lain, misalnya "kelinci", "bintang", atau "berani".'
          : 'Kembali ke halaman utama untuk melihat semua cerita yang tersedia.',
        actions: '<a class="btn btn-primary" href="#/cerita">Lihat semua cerita</a>' +
                 '<a class="btn btn-ghost" href="#/">Ke beranda</a>',
        level: 2
      });
    }
    return '<div class="story-list" data-stagger>' +
      list.map(function (s) { return a.storyRow(s, 2); }).join('') + '</div>';
  }

  function countHtml(list, q, cat) {
    if (q) {
      return '<p class="result-count" role="status">' +
        (list.length
          ? '<strong>' + list.length + '</strong> cerita ditemukan untuk &ldquo;' + E(q) + '&rdquo;'
          : 'Tidak ada hasil untuk &ldquo;' + E(q) + '&rdquo;') +
        '</p>';
    }
    return '<p class="result-count" role="status"><strong>' + list.length + '</strong> cerita' +
      (cat ? ' dalam kategori ' + E(cat.label) : '') + '</p>';
  }

  function chipsHtml(activeId) {
    var out = '<a class="chip' + (!activeId ? ' is-active' : '') + '" href="#/cerita">Semua</a>';
    out += CBT.categories.list.map(function (c) {
      return '<a class="chip' + (c.id === activeId ? ' is-active' : '') + '"' +
        ' href="' + CBT.router.href('category', { id: c.id }) + '">' +
        c.icon + ' ' + E(c.label) + '</a>';
    }).join('');
    return out;
  }

  function pageHead(route, cat, q) {
    var a = ui();
    if (cat) {
      return '' +
        '<header class="page-head">' +
          '<p class="section-eyebrow">Kategori ' + cat.icon + '</p>' +
          '<h1 class="page-title">' + E(cat.label) + '</h1>' +
          '<p class="page-lede">' + E(cat.blurb) + '</p>' +
        '</header>';
    }
    return '' +
      '<header class="page-head">' +
        '<p class="section-eyebrow">Koleksi lengkap</p>' +
        '<h1 class="page-title">Semua cerita</h1>' +
        '<p class="page-lede">Dua belas dongeng pendek berbahasa Indonesia. Cari berdasarkan judul, ' +
          'tokoh, atau suasana yang ingin Anda rasakan malam ini.</p>' +
      '</header>';
  }

  function body(route, state) {
    var cat = null;
    if (route.name === 'category') {
      cat = CBT.categories.get(route.params.id);
    }

    var list;
    if (state.q) list = searchStories(state.q);
    else if (cat) list = CBT.stories.inCategory(cat.id);
    else list = CBT.stories.written.slice();

    return '' +
      pageHead(route, cat, state.q) +
      '<div class="page-tools">' +
        '<div class="search-field">' +
          '<span class="search-icon">' + ui().icons.search + '</span>' +
          '<label class="sr-only" for="page-search">Cari cerita</label>' +
          '<input id="page-search" type="search" placeholder="Cari judul, tokoh, atau suasana…"' +
            ' autocomplete="off" spellcheck="false" value="' + E(state.q || '') + '">' +
        '</div>' +
      '</div>' +
      '<div class="chip-row" style="margin-top:var(--s-5)">' + chipsHtml(cat ? cat.id : '') + '</div>' +
      '<div data-results>' + countHtml(list, state.q, cat) + resultsHtml(list, state.q) + '</div>';
  }

  CBT.views.stories = {
    render: function (route) {
      var initial = route.query && route.query.q ? route.query.q : '';
      return '<div class="view view-stories"><div class="container">' +
        body(route, { q: initial }) + '</div></div>';
    },

    after: function (root, route) {
      var results = root.querySelector('[data-results]');
      var input = root.querySelector('#page-search');
      var cat = route.name === 'category' ? CBT.categories.get(route.params.id) : null;
      if (!results) return;

      var rerender = CBT.dom.debounce(function () {
        var q = input ? input.value : '';
        var list;
        if (q) list = searchStories(q);
        else if (cat) list = CBT.stories.inCategory(cat.id);
        else list = CBT.stories.written.slice();

        results.innerHTML = countHtml(list, q, cat) + resultsHtml(list, q);
        if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(results);

        // Keep the hash shareable without spamming history entries.
        var base = cat ? CBT.router.href('category', { id: cat.id }) : '#/cerita';
        var target = q ? base + '?q=' + encodeURIComponent(q) : base;
        if ((global.location.hash || '#/') !== target) {
          global.history.replaceState(
            null, '',
            global.location.pathname + global.location.search + target
          );
        }
      }, 170);

      if (input) {
        CBT.dom.on(input, 'input', rerender);
        CBT.dom.on(input, 'search', rerender);
      }

      // Focus the field when the user arrived from the header search box.
      if (!cat && route.query && route.query.focus === '1' && input) {
        input.focus();
        input.setSelectionRange(input.value.length, input.value.length);
      }

      if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);
    }
  };
})(typeof window !== 'undefined' ? window : this);
