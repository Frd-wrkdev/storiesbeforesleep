/* Shared view fragments - every view builds its markup from these so
   cards, rows and chips stay visually identical across routes. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  function E(s) { return CBT.dom.esc(s); }

  /* ---------- Icons ---------- */
  var I = {
    heart: '<svg viewBox="0 0 16 16" width="16" height="16" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 14 2 8.5A3.6 3.6 0 0 1 8 4a3.6 3.6 0 0 1 6 4.5z"/></svg>',
    clock: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm0 2a5 5 0 1 1 0 10A5 5 0 0 1 8 3zm-.75 2h1.5v3.1l2.3 1.5-.75 1.15L7.25 8.6z"/></svg>',
    text: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M2 3h12v1.6H2zM2 7.2h12v1.6H2zM2 11.4h8v1.6H2z"/></svg>',
    arrow: '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false"><path fill="currentColor" d="M9 2.6 14.4 8 9 13.4l-1.2-1.2L11 8H2V7h9L7.8 3.8z"/></svg>',
    arrowL: '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 2.6 1.6 8 7 13.4l1.2-1.2L5 8h9V7H5l3.2-3.2z"/></svg>',
    search: '<svg viewBox="0 0 16 16" width="17" height="17" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 1a6 6 0 1 0 3.6 10.8l3 3 1.4-1.4-3-3A6 6 0 0 0 7 1zm0 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8z"/></svg>',
    sparkle: '<svg viewBox="0 0 16 16" width="15" height="15" aria-hidden="true" focusable="false"><path fill="currentColor" d="M7 1h2v3.2L11.4 6 9 7.8V11H7V7.8L3.6 6 7 4.2zM13 9h1.6v1.6H13zM2.4 11H4v1.6H2.4zM12.4 3H14v1.6h-1.6z"/></svg>',
    play: '<svg viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path fill="currentColor" d="M4.5 2.6v10.8L13.2 8z"/></svg>'
  };

  /* ---------- Sprites ---------- */
  function sprite(name, opts) {
    opts = opts || {};
    if (opts.decorative === undefined) opts.decorative = true;
    return CBT.art.render(name, opts);
  }

  /* ---------- Small building blocks ---------- */
  function minutes(story) { return CBT.stories.minutes(story); }

  function isVideo(s) { return !!(s && s.video); }

  /* "5 menit" for prose, the runtime (or just "Video") for a video story. */
  function lengthLabel(story) {
    if (isVideo(story)) return story.duration || 'Video';
    return minutes(story) + ' menit';
  }

  /* Corner marker on the cover so a video card reads as one at a glance. */
  function videoBadge() {
    return '<span class="video-badge">' + I.play +
      '<span class="video-badge-text">Video</span></span>';
  }

  function metaBits(story) {
    return '' +
      '<span class="meta-item">' + I.clock + ' ' + minutes(story) + ' menit baca</span>' +
      '<span class="meta-dot" aria-hidden="true"></span>' +
      '<span class="meta-item">' + I.text + ' ' + CBT.stories.words(story) + ' kata</span>';
  }

  function tagsFor(story, link) {
    return story.categories.map(function (c) {
      var cat = CBT.categories.get(c);
      if (!cat) return '';
      if (link) {
        return '<a class="tag" href="' + CBT.router.href('category', { id: c }) + '">' +
          cat.icon + ' ' + E(cat.label) + '</a>';
      }
      return '<span class="tag">' + cat.icon + ' ' + E(cat.label) + '</span>';
    }).join('');
  }

  function favBtn(story, extraClass) {
    var on = CBT.store.favorites.has(story.id);
    return '<button class="fav-btn ' + (extraClass || '') + (on ? ' is-on' : '') + '"' +
      ' type="button" data-fav="' + E(story.id) + '"' +
      ' aria-pressed="' + (on ? 'true' : 'false') + '"' +
      ' aria-label="' + (on ? 'Hapus dari favorit: ' : 'Tambah ke favorit: ') + E(story.title) + '">' +
      I.heart + '</button>';
  }

  /* Headings must nest without skipping a level, so card titles accept the
     level of their surroundings: 3 under a section's h2, 2 directly under h1. */
  function heading(level, cls, inner) {
    var n = Number(level);
    var tag = (n >= 1 && n <= 6) ? 'h' + n : 'h3';
    return '<' + tag + ' class="' + cls + '">' + inner + '</' + tag + '>';
  }

  /* ---------- Story card ---------- */
  function storyCard(story, level) {
    return '' +
      '<article class="story-card acc-' + E(story.accent) + '">' +
        '<div class="sprite-tile">' + sprite(story.sprite, { label: 'Ilustrasi ' + story.title }) +
          (isVideo(story) ? videoBadge() : '') + '</div>' +
        '<div class="story-card-body">' +
          heading(level, 'story-card-title',
            '<a href="' + CBT.router.href('reader', { id: story.id }) + '">' + E(story.title) + '</a>') +
          '<p class="story-card-excerpt">' + E(story.excerpt) + '</p>' +
          '<div class="story-card-foot">' +
            '<span class="meta-row">' + (isVideo(story) ? I.play + ' ' : '') +
              E(lengthLabel(story)) + '</span>' +
            favBtn(story) +
          '</div>' +
        '</div>' +
      '</article>';
  }

  /* ---------- Story row (compact list) ---------- */
  function storyRow(story, level) {
    return '' +
      '<article class="story-row acc-' + E(story.accent) + '">' +
        '<div class="sprite-tile">' + sprite(story.sprite, { label: 'Ilustrasi ' + story.title }) +
          (isVideo(story) ? videoBadge() : '') + '</div>' +
        '<div class="story-row-main">' +
          heading(level, 'story-row-title',
            '<a href="' + CBT.router.href('reader', { id: story.id }) + '">' + E(story.title) + '</a>') +
          '<p class="story-row-excerpt">' + E(story.excerpt) + '</p>' +
          '<div class="story-row-tags">' + tagsFor(story, false) + '</div>' +
        '</div>' +
        '<div class="story-row-actions">' +
          '<span class="tag">' + (isVideo(story) ? I.play + ' ' : '') +
            (isVideo(story) ? E(lengthLabel(story)) : minutes(story) + ' mnt') + '</span>' +
          favBtn(story) +
        '</div>' +
      '</article>';
  }

  /* ---------- Category card ---------- */
  function catCard(cat) {
    var count = CBT.stories.inCategory(cat.id).length;
    var accents = ['lilac', 'sky', 'gold', 'rose', 'mint'];
    var accent = accents[cat.id.length % accents.length];
    return '' +
      '<a class="cat-card acc-' + accent + '" href="' + CBT.router.href('category', { id: cat.id }) + '">' +
        '<span class="cat-card-icon" aria-hidden="true">' + cat.icon + '</span>' +
        '<span class="cat-card-name">' + E(cat.label) + '</span>' +
        '<span class="cat-card-blurb">' + E(cat.blurb) + '</span>' +
        '<span class="cat-card-count">' + count + ' cerita</span>' +
      '</a>';
  }

  /* ---------- Empty state ---------- */
  function empty(o) {
    return '' +
      '<div class="empty">' +
        (o.art || sprite(o.sprite || 'star', { label: 'Ilustrasi' })) +
        heading(o.level, 'empty-title', E(o.title)) +
        '<p class="empty-text">' + E(o.text) + '</p>' +
        (o.actions ? '<div class="empty-actions">' + o.actions + '</div>' : '') +
      '</div>';
  }

  /* ---------- Section head ---------- */
  function sectionHead(o) {
    return '' +
      '<div class="section-head">' +
        '<div>' +
          (o.eyebrow ? '<p class="section-eyebrow">' + E(o.eyebrow) + '</p>' : '') +
          '<h2 class="section-title">' + E(o.title) + '</h2>' +
          (o.sub ? '<p class="section-sub">' + E(o.sub) + '</p>' : '') +
        '</div>' +
        (o.href ? '<a class="section-link" href="' + o.href + '">' + E(o.linkText || 'Lihat semua') + ' ' + I.arrow + '</a>' : '') +
      '</div>';
  }

  CBT.ui = {
    icons: I,
    sprite: sprite,
    metaBits: metaBits,
    tagsFor: tagsFor,
    favBtn: favBtn,
    storyCard: storyCard,
    storyRow: storyRow,
    catCard: catCard,
    empty: empty,
    sectionHead: sectionHead,
    minutes: minutes
  };
})(typeof window !== 'undefined' ? window : this);
