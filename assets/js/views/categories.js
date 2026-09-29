/* Category index - the grid of all moods/genres */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  CBT.views = CBT.views || {};

  function E(s) { return CBT.dom.esc(s); }
  function ui() { return CBT.ui; }

  CBT.views.categories = {
    render: function () {
      var a = ui();
      var cats = CBT.categories.list;

      return '<div class="view view-categories"><div class="container">' +
        '<header class="page-head">' +
          '<p class="section-eyebrow">Telusuri berdasarkan suasana</p>' +
          '<h1 class="page-title">Kategori</h1>' +
          '<p class="page-lede">Setiap malam punya suasana yang berbeda. Pilih yang paling cocok dengan ' +
            'perasaan Anda sekarang — dari cerita pelan untuk memejamkan mata sampai petualangan yang menegangkan.</p>' +
        '</header>' +

        '<div class="cat-grid" data-stagger>' +
          cats.map(a.catCard).join('') +
        '</div>' +

        '<section class="night-strip">' +
          '<div class="night-strip-text">' +
            '<h2 class="night-strip-title">Masih belum yakin?</h2>' +
            '<p class="night-strip-sub">Lewati saja pemilihannya. Kami pilihkan satu cerita acak ' +
              'dari seluruh koleksi.</p>' +
          '</div>' +
          '<div class="night-strip-actions">' +
            '<button class="btn btn-primary" type="button" data-random>' +
              a.icons.sparkle + ' Pilihkan cerita</button>' +
            '<a class="btn btn-ghost" href="#/cerita">Lihat semua cerita</a>' +
          '</div>' +
        '</section>' +

        '<section class="section">' +
          '<div class="duo-grid">' +
            '<a class="duo-card" href="#/cerita">' +
              '<span class="duo-icon" aria-hidden="true">' + a.icons.arrow + '</span>' +
              '<h3>Lihat semua cerita</h3>' +
              '<p>Dua belas dongeng pendek, urut dan siap dibaca dari awal sampai akhir tanpa perlu memilih kategori.</p>' +
              '<span class="duo-go">Buka koleksi ' + a.icons.arrow + '</span>' +
            '</a>' +
            '<a class="duo-card" href="#/favorit">' +
              '<span class="duo-icon" aria-hidden="true">' + a.icons.heart + '</span>' +
              '<h3>Favorit Anda</h3>' +
              '<p>' + (CBT.store.favorites.count()
                ? 'Anda sudah menyimpan ' + CBT.store.favorites.count() + ' cerita di perangkat ini.'
                : 'Simpan cerita yang ingin Anda baca lagi. Semuanya tersimpan lokal di perangkat Anda.') + '</p>' +
              '<span class="duo-go">Buka favorit ' + a.icons.arrow + '</span>' +
            '</a>' +
          '</div>' +
        '</section>' +
        '</div></div>';
    },

    after: function (root) {
      if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);
    }
  };
})(typeof window !== 'undefined' ? window : this);
