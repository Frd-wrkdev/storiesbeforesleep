/* Home view - hero, continue reading, featured, grids, categories */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  CBT.views = CBT.views || {};

  function E(s) { return CBT.dom.esc(s); }
  function ui() { return CBT.ui; }

  function continueBlock() {
    var c = CBT.store.progress.latest();
    if (!c || !c.story) return '';
    var s = c.story;
    var pct = Math.max(4, Math.min(100, c.pct || 0));
    return '' +
      '<section class="section continue-wrap">' +
        ui().sectionHead({ eyebrow: 'Lanjutkan', title: 'Lanjutkan membaca' }) +
        '<div class="continue-card acc-' + E(s.accent) + '">' +
          '<div class="continue-art">' + ui().sprite(s.sprite, { label: 'Ilustrasi ' + s.title }) + '</div>' +
          '<div class="continue-info">' +
            '<p class="continue-label">Berhenti di ' + pct + '%</p>' +
            '<h3 class="continue-title"><a href="' + CBT.router.href('reader', { id: s.id }) + '">' +
              E(s.title) + '</a></h3>' +
            '<p class="continue-meta">' + E(CBT.stories.progressLabel(s, pct)) + ' &middot; ' +
              CBT.stories.minutes(s) + ' menit total</p>' +
            '<div class="progress-track" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100" aria-label="Progres membaca">' +
              '<span class="progress-fill" style="width:' + pct + '%"></span>' +
            '</div>' +
          '</div>' +
          '<a class="btn btn-primary continue-cta" href="' + CBT.router.href('reader', { id: s.id }) + '">' +
            'Lanjut ' + ui().icons.arrow + '</a>' +
        '</div>' +
      '</section>';
  }

  function hero() {
    var a = ui();
    var total = CBT.stories.list.length;
    var words = CBT.stories.list.reduce(function (n, s) { return n + CBT.stories.words(s); }, 0);
    var mins = Math.round(words / 200);

    return '' +
      '<section class="hero">' +
        '<div class="hero-copy">' +
          '<p class="hero-eyebrow"><span class="dot"></span> Dongeng untuk malam ini</p>' +
          '<h1 class="hero-title">' +
            '<span class="line text-grad">Cerita Sebelum</span>' +
            '<span class="line text-grad">Tidur</span>' +
          '</h1>' +
          '<p class="hero-lede">Kumpulan dongeng pendek berbahasa Indonesia yang hangat, pelan, dan tenang ' +
            '— dibuat untuk dibacakan sambil memejamkan mata.</p>' +
          '<div class="hero-actions">' +
            '<a class="btn btn-primary" href="#/cerita">Mulai membaca ' + a.icons.arrow + '</a>' +
            '<button class="btn btn-secondary" type="button" data-random>' +
              a.icons.sparkle + ' Cerita acak</button>' +
          '</div>' +
          '<div class="hero-stats">' +
            '<div><p class="stat-num">' + total + '</p><p class="stat-label">Cerita</p></div>' +
            '<div><p class="stat-num">' + CBT.categories.list.length + '</p><p class="stat-label">Kategori</p></div>' +
            '<div><p class="stat-num">' + mins + '</p><p class="stat-label">Menit membaca</p></div>' +
            '<div><p class="stat-num">0</p><p class="stat-label">Biaya berlangganan</p></div>' +
          '</div>' +
        '</div>' +

        '<div class="hero-art" aria-hidden="true">' +
          '<span class="hero-float moon">' + a.sprite('moon', {}) + '</span>' +
          '<span class="hero-float star-a">' + a.sprite('starFace', {}) + '</span>' +
          '<span class="hero-float star-b">' + a.sprite('star', {}) + '</span>' +
          '<span class="hero-float cloud">' + a.sprite('cloudSleepy', {}) + '</span>' +
          '<span class="hero-hill"></span>' +
          '<span class="hero-float bunny">' + a.sprite('bunny', {}) + '</span>' +
          '<p class="hero-caption">' + a.icons.sparkle + ' Semua cerita bisa dibaca gratis</p>' +
        '</div>' +
      '</section>';
  }

  function featuredSection() {
    var a = ui();
    var s = CBT.stories.featured();
    return '' +
      '<section class="section">' +
        a.sectionHead({
          eyebrow: 'Pilihan malam ini',
          title: 'Cerita pilihan',
          sub: 'Satu cerita hangat untuk memulai malam Anda.',
          href: '#/cerita',
          linkText: 'Semua cerita'
        }) +
        '<div class="featured-card acc-' + E(s.accent) + '">' +
          '<div class="featured-art">' +
            '<div class="sprite-tile">' + a.sprite(s.sprite, { label: 'Ilustrasi ' + s.title }) + '</div>' +
            '<span class="featured-badge">' + a.icons.sparkle + ' Pilihan editor</span>' +
          '</div>' +
          '<div class="featured-body">' +
            '<div class="meta-row">' + a.metaBits(s) + '</div>' +
            '<h3 class="featured-title">' + E(s.title) + '</h3>' +
            '<p class="featured-excerpt">' + E(s.excerpt) + '</p>' +
            '<div class="story-row-tags">' + a.tagsFor(s, true) + '</div>' +
            '<div class="featured-actions">' +
              '<a class="btn btn-primary" href="' + CBT.router.href('reader', { id: s.id }) + '">' +
                'Baca sekarang ' + a.icons.arrow + '</a>' +
              a.favBtn(s) +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';
  }

  function storiesSection() {
    var a = ui();
    var list = CBT.stories.written.slice(0, 8);
    return '' +
      '<section class="section">' +
        a.sectionHead({
          eyebrow: 'Koleksi',
          title: 'Semua cerita',
          sub: 'Dua belas dongeng pendek, semuanya asli dan siap dibacakan malam ini.',
          href: '#/cerita',
          linkText: 'Lihat semua'
        }) +
        '<div class="story-grid" data-stagger>' +
          list.map(function (s) { return a.storyCard(s, 3); }).join('') +
        '</div>' +
      '</section>';
  }

  function categoriesSection() {
    var a = ui();
    return '' +
      '<section class="section">' +
        a.sectionHead({
          eyebrow: 'Telusuri',
          title: 'Kategori',
          sub: 'Pilih suasana yang paling cocok untuk malam ini.',
          href: '#/kategori',
          linkText: 'Semua kategori'
        }) +
        '<div class="rail" data-stagger>' +
          CBT.categories.list.map(a.catCard).join('') +
        '</div>' +
      '</section>';
  }

  function nightStrip() {
    var a = ui();
    return '' +
      '<section class="night-strip">' +
        '<div class="night-strip-text">' +
          '<h2 class="night-strip-title">Tidak tahu mau baca apa?</h2>' +
          '<p class="night-strip-sub">Serahkan pilihannya pada malam. Kami pilihkan satu cerita acak ' +
            '— sepuluh detik lagi Anda sudah terbaring.</p>' +
        '</div>' +
        '<div class="night-strip-actions">' +
          '<button class="btn btn-primary" type="button" data-random>' +
            a.icons.sparkle + ' Pilihkan cerita</button>' +
          '<a class="btn btn-ghost" href="#/kategori">Lihat kategori</a>' +
        '</div>' +
      '</section>';
  }

  function duoSection() {
    var a = ui();
    var favCount = CBT.store.favorites.count();
    return '' +
      '<section class="section">' +
        '<div class="duo-grid">' +
          '<a class="duo-card" href="#/favorit">' +
            '<span class="duo-icon" aria-hidden="true">' + a.icons.heart + '</span>' +
            '<h3>Favorit Anda</h3>' +
            '<p>' + (favCount
              ? 'Anda sudah menyimpan ' + favCount + ' cerita. Mereka menunggu untuk dibaca lagi.'
              : 'Simpan cerita yang ingin Anda baca lagi. Semuanya tersimpan di perangkat ini.') + '</p>' +
            '<span class="duo-go">Buka favorit ' + a.icons.arrow + '</span>' +
          '</a>' +
          '<a class="duo-card" href="#/kategori">' +
            '<span class="duo-icon" aria-hidden="true">' + a.icons.search + '</span>' +
            '<h3>Cari berdasarkan suasana</h3>' +
            '<p>Dari ' + CBT.categories.list.length + ' kategori: cerita lucu yang bikin tersenyum, cerita pelan ' +
              'untuk memejamkan mata, sampai petualangan yang menegangkan.</p>' +
            '<span class="duo-go">Jelajahi kategori ' + a.icons.arrow + '</span>' +
          '</a>' +
        '</div>' +
      '</section>';
  }

  CBT.views.home = {
    render: function () {
      return '<div class="view view-home"><div class="container">' +
        hero() +
        continueBlock() +
        featuredSection() +
        storiesSection() +
        categoriesSection() +
        nightStrip() +
        duoSection() +
        '</div></div>';
    },
    after: function (root) {
      // Stagger the card grids with GSAP when available.
      if (global.gsap && CBT.app && CBT.app.stagger) CBT.app.stagger(root);
    }
  };
})(typeof window !== 'undefined' ? window : this);
