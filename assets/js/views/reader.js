/* Reader view - the story page, with Mode Malam / Mode Kertas themes */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  CBT.views = CBT.views || {};

  function E(s) { return CBT.dom.esc(s); }
  function ui() { return CBT.ui; }

  /* Written stories and video stories are two separate collections.
     The pager walks only the collection the current story belongs to,
     so a reader never jumps from a bedtime tale into a video page. */
  function groupOf(story) {
    return CBT.stories.isVideo(story) ? CBT.stories.videos : CBT.stories.written;
  }

  function indexOf(story) {
    var list = groupOf(story);
    for (var i = 0; i < list.length; i++) {
      if (list[i].id === story.id) return i;
    }
    return -1;
  }

  /* "5 menit" for prose, "8:32" (or just "Video") for a video story. */
  function lengthLabel(s) {
    if (CBT.stories.isVideo(s)) return s.duration ? s.duration : 'Video';
    return CBT.stories.minutes(s) + ' menit';
  }

  /* The palette is site-wide; this switch only writes the preference.
     Values are the stored ones (auto | dark | light), so "Otomatis"
     stays highlighted even when the device is currently showing the
     opposite palette. */
  function normalizeTheme(v) {
    if (v === 'night') return 'dark';
    if (v === 'paper') return 'light';
    if (v === 'auto' || v === 'dark' || v === 'light') return v;
    return null;
  }

  function themeSwitch(mode) {
    function item(value, label, swatch) {
      var on = mode === value;
      return '<button type="button" data-theme="' + value + '"' +
        ' class="' + (on ? 'is-active' : '') + '"' +
        ' aria-pressed="' + on + '"' +
        ' aria-label="' + label + '">' +
        '<span class="swatch ' + swatch + '" aria-hidden="true"></span>' +
        '<span class="sw-label">' + label + '</span>' +
      '</button>';
    }
    return '' +
      '<div class="theme-switch" role="group" aria-label="Mode warna">' +
        item('auto', 'Otomatis', 'fill-auto') +
        item('dark', 'Mode Malam', 'fill-night') +
        item('light', 'Mode Kertas', 'fill-paper') +
      '</div>';
  }

  function pager(story) {
    var list = groupOf(story);
    var i = indexOf(story);
    var prev = i > 0 ? list[i - 1] : null;
    var next = i < list.length - 1 ? list[i + 1] : null;

    function item(s, dir) {
      if (!s) {
        return '<div class="pager-item is-empty ' + dir + '">' +
          '<span class="pager-dir">' + (dir === 'prev' ? 'Awal koleksi' : 'Akhir koleksi') + '</span>' +
          '<span class="pager-title">Tidak ada lagi</span></div>';
      }
      var isPrev = dir === 'prev';
      return '<a class="pager-item ' + dir + '" href="' + CBT.router.href('reader', { id: s.id }) + '">' +
        '<span class="pager-dir">' +
          (isPrev ? ui().icons.arrowL + ' Sebelumnya' : 'Berikutnya ' + ui().icons.arrow) +
        '</span>' +
        '<span class="pager-title">' + E(s.title) + '</span>' +
        '<span class="pager-dir">' + E(lengthLabel(s)) + '</span>' +
      '</a>';
    }

    return '<nav class="pager" aria-label="Navigasi cerita">' +
      item(prev, 'prev') + item(next, 'next') + '</nav>';
  }

  function bodyHtml(story) {
    return (story.body || []).map(function (p) {
      var t = String(p).trim();
      var isDialogue = t.charAt(0) === '"' || t.charAt(0) === '\u201C';
      return '<p' + (isDialogue ? ' class="dialogue"' : '') + '>' + E(t) + '</p>';
    }).join('');
  }

  /* The back link and the closing CTA point at whichever collection the
     reader is actually in — a video story never dumps you into /cerita. */
  function collectionHref(story) {
    return CBT.stories.isVideo(story) ? '#/kategori/video' : '#/cerita';
  }

  function readerBar(story, theme, favOn) {
    var a = ui();
    return '<div class="reader-bar">' +
      '<a class="back-link" href="' + collectionHref(story) + '">' + a.icons.arrowL + ' ' +
        (CBT.stories.isVideo(story) ? 'Cerita Video' : 'Semua cerita') + '</a>' +
      '<span class="reader-bar-spacer"></span>' +
      themeSwitch(theme) +
      '<button class="icon-btn fav-top ' + (favOn ? 'is-on' : '') + '" type="button"' +
        ' data-fav="' + E(story.id) + '" aria-pressed="' + favOn + '"' +
        ' aria-label="' + (favOn ? 'Hapus dari favorit' : 'Tambah ke favorit') + '">' +
        a.icons.heart + '</button>' +
    '</div>';
  }

  function readerHead(story, cat, isVideo) {
    var a = ui();
    var meta = isVideo
      ? '<span class="meta-item">' + a.icons.play + ' Video' +
          (story.duration ? ' &middot; ' + E(story.duration) : '') + '</span>'
      : '<span class="meta-item">' + a.icons.clock + ' ' + a.minutes(story) + ' menit membaca</span>' +
        '<span class="meta-dot" aria-hidden="true"></span>' +
        '<span class="meta-item">' + a.icons.text + ' ' + CBT.stories.words(story) + ' kata</span>';

    if (cat) {
      meta += '<span class="meta-dot" aria-hidden="true"></span>' +
        '<span class="meta-item">' + cat.icon + ' ' + E(cat.label) + '</span>';
    }

    return '<header class="reader-head">' +
      '<p class="reader-crumbs">' +
        '<a href="#/">Beranda</a> <span aria-hidden="true">/</span> ' +
        '<a href="' + CBT.router.href('category', { id: story.categories[0] }) + '">' +
          E(cat ? cat.label : 'Cerita') + '</a>' +
        ' <span aria-hidden="true">/</span> <span>' + E(story.title) + '</span>' +
      '</p>' +
      '<h1 class="reader-title">' + E(story.title) + '</h1>' +
      '<div class="reader-meta">' + meta + '</div>' +
      '<div class="reader-tags">' + a.tagsFor(story, true) + '</div>' +
    '</header>';
  }

  function readerArt(story) {
    var a = ui();
    return '<div class="reader-art">' +
      a.sprite(story.sprite, { label: 'Ilustrasi ' + story.title }) +
      '<span class="reader-art-caption">Ilustrasi &middot; piksel</span>' +
    '</div>';
  }

  function actionsHtml(story, favOn) {
    var a = ui();
    return '<div class="reader-actions">' +
      '<button class="btn btn-cream" type="button" data-fav="' + E(story.id) + '"' +
        ' aria-pressed="' + favOn + '">' +
        a.icons.heart + ' <span data-fav-label>' +
          (favOn ? 'Tersimpan' : 'Simpan cerita') + '</span></button>' +
      '<button class="btn btn-secondary" type="button" data-random>' +
        a.icons.sparkle + ' Cerita lain</button>' +
      '<a class="btn btn-ghost" href="' + collectionHref(story) + '">Kembali ke koleksi</a>' +
    '</div>';
  }

  /* Facade player: the thumbnail and play button ship with the page, and the
     real YouTube frame only loads once someone actually asks for it. Keeps
     the page light, avoids a layout jump, and still works if the thumbnail
     never arrives. */
  function videoPlayer(story) {
    var id = String(story.video);
    return '<section class="reader-video">' +
      '<h2 class="video-heading">Tonton ceritanya</h2>' +
      '<div class="video-player">' +
        '<button class="video-facade" type="button" data-video="' + E(id) + '"' +
          ' aria-label="Putar video: ' + E(story.title) + '">' +
          '<img class="video-thumb" src="https://i.ytimg.com/vi/' + E(id) + '/hqdefault.jpg"' +
            ' alt="" loading="lazy" decoding="async">' +
          '<span class="video-play" aria-hidden="true">' + ui().icons.play + '</span>' +
          '<span class="video-hint">Tonton di YouTube</span>' +
        '</button>' +
      '</div>' +
      '<p class="video-credit">Sumber: YouTube &middot; <span>' + E(story.channel || '') + '</span></p>' +
    '</section>';
  }

  CBT.views.reader = {
    render: function (route) {
      var a = ui();
      var story = CBT.stories.get(route.params.id);

      if (!story) {
        return '<div class="view view-reader"><div class="container">' +
          a.empty({
            sprite: 'cloud',
            title: 'Cerita tidak ditemukan',
            text: 'Mungkin tautannya salah, atau ceritanya sudah dipindahkan.',
            actions: '<a class="btn btn-primary" href="#/cerita">Lihat semua cerita</a>' +
                     '<a class="btn btn-ghost" href="#/">Ke beranda</a>',
            level: 1
          }) + '</div></div>';
      }

      var q0 = normalizeTheme((route.query && route.query.theme) || '');
      var theme = q0 || (CBT.theme ? CBT.theme.mode() : 'auto');
      var favOn = CBT.store.favorites.has(story.id);
      var cat = CBT.categories.get(story.categories[0]);
      var isVideo = CBT.stories.isVideo(story);

      if (isVideo) {
        return '<div class="view view-reader is-video acc-' + E(story.accent) + '">' +
          '<div class="container container-narrow">' +
            readerBar(story, theme, favOn) +
            readerHead(story, cat, true) +
            readerArt(story) +
            videoPlayer(story) +
            '<p class="video-lede">' + E(story.excerpt) + '</p>' +
            actionsHtml(story, favOn) +
            pager(story) +
          '</div></div>';
      }

      return '<div class="view view-reader acc-' + E(story.accent) + '">' +
        '<div class="read-progress" aria-hidden="true"><span data-read-bar></span></div>' +
        '<div class="container container-narrow">' +

          readerBar(story, theme, favOn) +
          readerHead(story, cat, false) +
          readerArt(story) +

          '<div class="reader-layout">' +
            '<article class="reader-article">' +
              '<div class="reader-body" data-story-body>' + bodyHtml(story) + '</div>' +

              '<div class="reader-end" aria-hidden="true">' +
                '<span class="reader-end-mark">' + a.icons.sparkle + '</span>' +
              '</div>' +

              actionsHtml(story, favOn) +
            '</article>' +
          '</div>' +

          pager(story) +
        '</div></div>';
    },

    after: function (root, route) {
      var story = CBT.stories.get(route.params.id);
      if (!story) return;

      var doc = global.document;

      /* ---- Theme ----
         The palette is owned by assets/js/lib/theme.js. This only
         applies a `?theme=` override carried by a shared link, then
         lets the three-way switch write the preference. */
      var forced = normalizeTheme((route.query && route.query.theme) || '');
      if (forced) CBT.theme.set(forced);

      CBT.dom.delegate(root, 'click', '[data-theme]', function (e, btn) {
        var next = normalizeTheme(btn.getAttribute('data-theme'));
        if (!next) return;
        CBT.theme.set(next);
        CBT.dom.qsa('[data-theme]', root).forEach(function (b) {
          var on = b.getAttribute('data-theme') === next;
          b.classList.toggle('is-active', on);
          b.setAttribute('aria-pressed', String(on));
        });
        if (global.gsap && global.gsap.fromTo) {
          global.gsap.fromTo(root, { opacity: 0.55 }, { opacity: 1, duration: 0.34, ease: 'power2.out' });
        }
      });

      /* ---- Video stories ----
         No prose and no scroll progress: writing a progress entry would put
         the video into the "Lanjutkan membaca" card on the home page.
         The frame loads only on click, so nothing is sent to YouTube until
         the reader actually asks for it. */
      if (CBT.stories.isVideo(story)) {
        CBT.dom.delegate(root, 'click', '[data-video]', function (e, btn) {
          var id = btn.getAttribute('data-video');
          if (!id) return;
          var frame = doc.createElement('iframe');
          frame.className = 'video-frame';
          frame.src = 'https://www.youtube-nocookie.com/embed/' + encodeURIComponent(id) +
            '?autoplay=1&rel=0';
          frame.title = btn.getAttribute('aria-label') || story.title;
          frame.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; ' +
            'gyroscope; picture-in-picture; web-share');
          frame.setAttribute('allowfullscreen', '');
          frame.setAttribute('referrerpolicy', 'strict-origin-when-cross-origin');
          if (btn.parentNode) btn.parentNode.replaceChild(frame, btn);
        });

        if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);
        return;
      }

      /* ---- Reading progress ---- */
      var bar = root.querySelector('[data-read-bar]');
      var article = root.querySelector('.reader-article');
      var ticking = false;
      var lastSaved = -1;

      function measure() {
        if (!article || !bar) return;
        var vh = global.innerHeight;
        var start = article.getBoundingClientRect().top + global.pageYOffset;
        var span = Math.max(1, article.offsetHeight - vh * 0.72);
        var pct = ((global.pageYOffset - start) / span) * 100;
        pct = Math.max(0, Math.min(100, pct));
        bar.style.width = pct.toFixed(1) + '%';
        if (Math.abs(pct - lastSaved) >= 4) {
          lastSaved = pct;
          CBT.store.progress.set(story.id, pct);
        }
      }

      function onScroll() {
        if (ticking) return;
        ticking = true;
        global.requestAnimationFrame(function () { ticking = false; measure(); });
      }

      var offScroll = CBT.dom.on(global, 'scroll', onScroll, { passive: true });
      var offResize = CBT.dom.on(global, 'resize', onScroll, { passive: true });
      measure();
      // Nudge progress to at least 1% so "continue reading" picks it up.
      CBT.store.progress.set(story.id, Math.max(1, lastSaved < 0 ? 1 : lastSaved));

      /* ---- Reveal paragraphs ---- */
      if (global.gsap && CBT.app && CBT.app.revealParagraphs) {
        CBT.app.revealParagraphs(root.querySelector('[data-story-body]'));
      }
      if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);

      /* ---- Cleanup when the route changes ---- */
      CBT.app.registerCleanup(function () {
        offScroll();
        offResize();
        CBT.store.progress.set(story.id, Math.max(lastSaved, 0));
      });
    }
  };
})(typeof window !== 'undefined' ? window : this);
