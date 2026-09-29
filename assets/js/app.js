/* ==================================================================
   Cerita Sebelum Tidur - app bootstrap
   Wires the router to the views and owns every global interaction:
   favourites, random story, header search, nav state, transitions.
   ================================================================== */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  var doc = global.document;

  var main, toastHost, mobileNav, menuToggle, searchForm, searchInput, favCountEl;
  var cleanups = [];
  var reducedMotion = false;

  /* ---------------- Route -> view mapping ---------------- */
  var VIEW_FOR = {
    home: 'home',
    stories: 'stories',
    categoryIndex: 'categories',
    category: 'stories',
    favorites: 'favorites',
    reader: 'reader',
    notfound: 'notfound'
  };

  var NAV_FOR = {
    home: 'home',
    stories: 'stories',
    categoryIndex: 'categoryIndex',
    category: 'categoryIndex',
    favorites: 'favorites',
    // A story page belongs to the catalogue, so "Cerita" stays marked as current.
    reader: 'stories'
  };

  /* ---------------- Small utilities ---------------- */
  function reduced() {
    return reducedMotion ||
      (global.matchMedia && global.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }

  function registerCleanup(fn) { if (typeof fn === 'function') cleanups.push(fn); }
  function runCleanups() {
    for (var i = 0; i < cleanups.length; i++) {
      try { cleanups[i](); } catch (e) { /* a failing teardown must not break the next view */ }
    }
    cleanups = [];
  }

  /* ---------------- Toasts ---------------- */
  function toast(message) {
    if (!toastHost) return;
    var el = doc.createElement('div');
    el.className = 'toast';
    el.innerHTML = CBT.ui.icons.sparkle + '<span>' + CBT.dom.esc(message) + '</span>';
    toastHost.appendChild(el);
    global.setTimeout(function () {
      el.classList.add('is-out');
      global.setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 260);
    }, 2400);
  }

  /* ---------------- Motion ---------------- */
  function stagger(root) {
    if (reduced() || !global.gsap) return;
    var groups = CBT.dom.qsa('[data-stagger]', root || doc);
    groups.forEach(function (g) {
      var kids = g.children;
      if (!kids.length) return;
      global.gsap.fromTo(kids,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.055, ease: 'power2.out',
          clearProps: 'opacity,transform' });
    });
  }

  function revealParagraphs(el) {
    if (!el || reduced() || !global.gsap) return;
    var ps = el.querySelectorAll('p');
    if (!ps.length) return;
    global.gsap.fromTo(ps,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.5, stagger: 0.06, delay: 0.08,
        ease: 'power2.out', clearProps: 'opacity,transform' });
  }

  /* ---------------- Favourites ---------------- */
  function syncFavCount() {
    if (!favCountEl) return;
    var n = CBT.store.favorites.count();
    favCountEl.textContent = String(n);
    favCountEl.hidden = n === 0;
  }

  function paintFavButtons(id, on) {
    var sel = '[data-fav="' + id.replace(/"/g, '\\"') + '"]';
    CBT.dom.qsa(sel, doc).forEach(function (btn) {
      btn.classList.toggle('is-on', on);
      btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      var label = btn.querySelector('[data-fav-label]');
      if (label) label.textContent = on ? 'Tersimpan' : 'Simpan cerita';
      var story = CBT.stories.get(id);
      if (story && btn.classList.contains('fav-btn')) {
        btn.setAttribute('aria-label',
          (on ? 'Hapus dari favorit: ' : 'Tambah ke favorit: ') + story.title);
      }
      if (on && !reduced()) {
        btn.classList.remove('is-popping');
        // force reflow so the animation can restart
        void btn.offsetWidth;
        btn.classList.add('is-popping');
        global.setTimeout(function () { btn.classList.remove('is-popping'); }, 420);
      }
    });
  }

  function toggleFavorite(id) {
    var story = CBT.stories.get(id);
    if (!story) return;
    var on = CBT.store.favorites.toggle(id);
    paintFavButtons(id, on);
    syncFavCount();
    toast(on ? 'Ditambahkan: ' + story.title : 'Dihapus dari favorit: ' + story.title);

    // If we are standing on the favourites page, the grid must reflect reality.
    var r = CBT.router.current();
    if (r && r.name === 'favorites') render(r, { keepScroll: true });
  }

  /* ---------------- Random story ---------------- */
  function randomStory() {
    var list = CBT.stories.written;
    if (!list.length) return;
    var current = CBT.router.current();
    var currentId = current && current.params ? current.params.id : null;
    var pick = list[Math.floor(Math.random() * list.length)];
    var guard = 0;
    while (pick.id === currentId && guard++ < 8) {
      pick = list[Math.floor(Math.random() * list.length)];
    }
    toast('Malam ini: ' + pick.title);
    CBT.router.navigate('/cerita/' + pick.id);
  }

  /* ---------------- Nav highlighting ---------------- */
  function syncNav(route) {
    var key = NAV_FOR[route.name];
    CBT.dom.qsa('[data-nav]').forEach(function (a) {
      var on = key !== null && key !== undefined && a.getAttribute('data-nav') === key;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });
  }

  function closeMobileNav() {
    if (!mobileNav || !menuToggle) return;
    mobileNav.hidden = true;
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Buka menu');
  }

  /* ---------------- Not found ---------------- */
  function renderNotFound() {
    return '<div class="view view-notfound"><div class="container">' +
      CBT.ui.empty({
        sprite: 'moon',
        title: 'Halaman tidak ditemukan',
        text: 'Tautan yang Anda buka tidak menunjuk ke mana pun. Mari kembali ke halaman utama ' +
              'dan pilih cerita dari sana.',
        actions: '<a class="btn btn-primary" href="#/">Ke beranda</a>' +
                 '<a class="btn btn-ghost" href="#/cerita">Lihat semua cerita</a>',
        level: 1
      }) + '</div></div>';
  }

  /* ---------------- Render a route ---------------- */
  var lastPath = null;

  function render(route, opts) {
    opts = opts || {};
    runCleanups();

    var viewName = VIEW_FOR[route.name] || 'home';
    var view = viewName === 'notfound' ? null : CBT.views[viewName];

    main.innerHTML = view ? view.render(route) : renderNotFound();
    doc.body.setAttribute('data-view', route.name);
    doc.title = titleFor(route);

    syncNav(route);
    closeMobileNav();

    if (view && view.after) view.after(main, route);

    var pathChanged = lastPath !== route.path;
    lastPath = route.path;

    if (pathChanged && !opts.keepScroll) {
      global.scrollTo(0, 0);
      try { main.focus({ preventScroll: true }); } catch (e) { main.focus(); }
    }
  }

  function titleFor(route) {
    var base = 'Cerita Sebelum Tidur';
    if (route.name === 'reader') {
      var s = CBT.stories.get(route.params.id);
      if (s) return s.title + ' — ' + base;
    }
    if (route.name === 'stories') return 'Semua Cerita — ' + base;
    if (route.name === 'category') {
      var c = CBT.categories.get(route.params.id);
      if (c) return c.label + ' — ' + base;
    }
    if (route.name === 'categoryIndex') return 'Kategori — ' + base;
    if (route.name === 'favorites') return 'Favorit — ' + base;
    if (route.name === 'notfound') return 'Tidak ditemukan — ' + base;
    return base + ' — Dongeng Hangat untuk Malam Hari';
  }

  /* ---------------- Boot ---------------- */
  function boot() {
    main = doc.getElementById('main');
    toastHost = doc.getElementById('toast-host');
    mobileNav = doc.getElementById('mobile-nav');
    menuToggle = doc.getElementById('menu-toggle');
    searchForm = doc.getElementById('header-search');
    searchInput = doc.getElementById('search-input');
    favCountEl = doc.getElementById('fav-count');

    var yearEl = doc.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());

    if (global.matchMedia) {
      var mq = global.matchMedia('(prefers-reduced-motion: reduce)');
      reducedMotion = mq.matches;
      if (mq.addEventListener) {
        mq.addEventListener('change', function (e) { reducedMotion = e.matches; });
      }
    }

    syncFavCount();

    /* --- Global click delegation (works across every re-render) --- */
    CBT.dom.delegate(doc, 'click', '[data-fav]', function (e, btn) {
      e.preventDefault();
      e.stopPropagation();
      toggleFavorite(btn.getAttribute('data-fav'));
    });

    CBT.dom.delegate(doc, 'click', '[data-random]', function (e) {
      e.preventDefault();
      randomStory();
    });

    /* --- Header search --- */
    if (searchForm) {
      CBT.dom.on(searchForm, 'submit', function (e) {
        e.preventDefault();
        var q = (searchInput.value || '').trim();
        CBT.router.navigate(q ? '/cerita?q=' + encodeURIComponent(q) + '&focus=1' : '/cerita');
        if (searchInput) searchInput.blur();
      });
    }

    /* --- Mobile menu --- */
    if (menuToggle && mobileNav) {
      CBT.dom.on(menuToggle, 'click', function () {
        var open = menuToggle.getAttribute('aria-expanded') === 'true';
        menuToggle.setAttribute('aria-expanded', String(!open));
        menuToggle.setAttribute('aria-label', open ? 'Buka menu' : 'Tutup menu');
        mobileNav.hidden = open;
      });
      CBT.dom.on(mobileNav, 'click', function (e) {
        if (e.target && e.target.tagName === 'A') closeMobileNav();
      });
    }

    /* --- Keyboard: "/" focuses search, Escape closes menu --- */
    CBT.dom.on(doc, 'keydown', function (e) {
      var tag = (e.target && e.target.tagName || '').toLowerCase();
      var typing = tag === 'input' || tag === 'textarea' || tag === 'select';
      if (e.key === '/' && !typing && searchInput && searchInput.offsetParent !== null) {
        e.preventDefault();
        searchInput.focus();
        searchInput.select();
      } else if (e.key === 'Escape') {
        closeMobileNav();
        if (typing && e.target.blur) e.target.blur();
      }
    });

    /* --- Expose before the router fires, because the first view's
           after() hook runs synchronously inside router.start() --- */
    CBT.app = {
      stagger: stagger,
      revealParagraphs: revealParagraphs,
      registerCleanup: registerCleanup,
      syncFavCount: syncFavCount,
      toast: toast,
      randomStory: randomStory,
      reducedMotion: reduced,
      render: render
    };

    /* --- Start the router --- */
    CBT.router.start(function (next) { render(next); });
  }

  if (doc.readyState === 'loading') {
    doc.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

  /* Views call CBT.app.* during their own after() hooks, which only run
     after boot() has defined it - but guard anyway for safety. */
  CBT.app = CBT.app || {
    stagger: function () {},
    revealParagraphs: function () {},
    registerCleanup: function () {},
    syncFavCount: function () {},
    toast: function () {},
    randomStory: function () {},
    reducedMotion: function () { return false; },
    render: function () {}
  };
})(typeof window !== 'undefined' ? window : this);
