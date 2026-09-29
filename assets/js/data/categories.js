/* Kategori cerita */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  var LIST = [
    {
      id: 'sebelum-tidur',
      label: 'Sebelum Tidur',
      icon: '🌙',
      blurb: 'Cerita pelan yang dibacakan pelan-pelan sambil memejamkan mata.'
    },
    {
      id: 'lucu',
      label: 'Lucu',
      icon: '😂',
      blurb: 'Kelakaran kecil yang bikin senyum sampai tertidur.'
    },
    {
      id: 'petualangan',
      label: 'Petualangan',
      icon: '✨',
      blurb: 'Berangkat jauh tanpa perlu meninggalkan kasur.'
    },
    {
      id: 'fantasi',
      label: 'Fantasi',
      icon: '🧙',
      blurb: 'Dunia ajaib, mantra kuno, dan hal yang mustahil jadi mungkin.'
    },
    {
      id: 'menghangatkan',
      label: 'Menghangatkan Hati',
      icon: '❤️',
      blurb: 'Cerita baik yang terasa seperti selimut hangat.'
    },
    {
      id: 'hewan',
      label: 'Hewan',
      icon: '🐻',
      blurb: 'Kawan-kawan kecil bersayap, berbulu, dan bersisik.'
    },
    {
      id: 'imajinasi',
      label: 'Imajinasi',
      icon: '🌈',
      blurb: 'Untuk pikiran yang suka melayang jauh sebelum tidur.'
    },
    {
      id: 'video',
      label: 'Cerita Video',
      icon: '🎬',
      blurb: 'Cerita yang ditonton, bukan dibaca. Dari cerita rakyat sampai animasi.'
    }
  ];

  var byId = {};
  for (var i = 0; i < LIST.length; i++) byId[LIST[i].id] = LIST[i];

  CBT.categories = {
    list: LIST,
    get: function (id) { return byId[id] || null; },
    label: function (id) { return byId[id] ? byId[id].label : id; },
    icon: function (id) { return byId[id] ? byId[id].icon : '✨'; }
  };
})(typeof window !== 'undefined' ? window : this);
