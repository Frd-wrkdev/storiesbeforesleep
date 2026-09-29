/* Favourites - stored locally, never sent anywhere */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  CBT.views = CBT.views || {};

  function E(s) { return CBT.dom.esc(s); }
  function ui() { return CBT.ui; }

  function resolve() {
    return CBT.store.favorites.all()
      .map(function (id) { return CBT.stories.get(id); })
      .filter(Boolean);
  }

  CBT.views.favorites = {
    render: function () {
      var a = ui();
      var list = resolve();

      var head = '' +
        '<header class="page-head">' +
          '<p class="section-eyebrow">Tersimpan di perangkat ini</p>' +
          '<h1 class="page-title">Favorit Anda</h1>' +
          '<p class="page-lede">' + (list.length
            ? 'Cerita-cerita yang Anda tandai. Daftar ini tersimpan di peramban Anda saja — ' +
              'tidak dikirim ke mana pun dan tetap ada meski halaman dimuat ulang.'
            : 'Belum ada cerita yang tersimpan.') + '</p>' +
        '</header>';

      var content;
      if (!list.length) {
        content = a.empty({
          sprite: 'heart',
          title: 'Masih kosong',
          text: 'Ketuk ikon hati di kartu cerita untuk menyimpannya di sini. Favorit berguna untuk ' +
                'melanjutkan cerita yang belum selesai besok malam.',
          actions: '<a class="btn btn-primary" href="#/cerita">Jelajahi cerita</a>' +
                   '<a class="btn btn-ghost" href="#/">Ke beranda</a>',
          level: 2
        });
      } else {
        content =
          '<div class="page-tools">' +
            '<p class="result-count" role="status"><strong>' + list.length + '</strong> cerita tersimpan</p>' +
            '<button class="btn btn-ghost btn-sm" type="button" data-clear-favs>' +
              'Kosongkan daftar</button>' +
          '</div>' +
          '<div class="story-grid" data-stagger style="margin-top:var(--s-6)">' +
            list.map(function (s) { return a.storyCard(s, 2); }).join('') +
          '</div>';
      }

      return '<div class="view view-favorites"><div class="container">' +
        head + content + '</div></div>';
    },

    after: function (root) {
      var btn = root.querySelector('[data-clear-favs]');
      if (btn) {
        CBT.dom.on(btn, 'click', function () {
          if (!global.confirm('Kosongkan seluruh daftar favorit?')) return;
          resolve().forEach(function (s) {
            if (CBT.store.favorites.has(s.id)) CBT.store.favorites.toggle(s.id);
          });
          if (CBT.app && CBT.app.syncFavCount) CBT.app.syncFavCount();
          CBT.router.navigate('/favorit');
        });
      }
      if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);
    }
  };
})(typeof window !== 'undefined' ? window : this);
