/* ==================================================================
   CBT.art - the illustration library
   ------------------------------------------------------------------
   Every creature shares ONE 16x16 head shape, so the whole set looks
   like it was drawn by the same hand. Small "patches" are merged on
   top: ears, eyes, nose, mouth, horns, cheeks...

   Patch rows are 16 chars wide. "." keeps the pixel underneath,
   anything else overwrites it. The letter "f" inside a patch means
   "the coat colour" and is substituted after merging.

   Head geometry (rows 0-3 are free for ears):
     0-3   ear space
     4     .kkkkkkkkkkkkkk.   top outline
     5     .kffffffffffffk.
     6-7   forehead
     8-9   EYES
     10    -
     11    NOSE
     12    MOUTH
     13    chin
     14    .kffffffffffffk.
     15    ..kkkkkkkkkkkk..   bottom outline
   ================================================================== */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  var sprite = CBT.sprite;

  /* ---------------- Shared palette ---------------- */
  var P = {
    k: '#2E2547',  // universal outline
    d: '#423A6B',  // soft outline
    w: '#FDF8F0',  // white
    c: '#F6EDE0',  // cream
    s: '#EADFCB',  // cream shade
    g: '#F6D68A',  // gold
    G: '#EFC35C',  // gold deep
    y: '#FFE9A8',  // pale gold
    l: '#B9A6F2',  // lilac
    L: '#9C86E8',  // lilac deep
    v: '#7C67D6',  // violet
    b: '#8FB8F0',  // sky
    B: '#6FA3E8',  // sky deep
    p: '#F2A8B8',  // rose
    P: '#E88CA1',  // rose deep
    m: '#9EE0C8',  // mint
    M: '#6FCFB0',  // mint deep
    n: '#B58258',  // brown
    O: '#8A5F3D',  // brown deep
    e: '#C7C9DE',  // grey
    E: '#9A9BC0',  // grey deep
    r: '#EE8A5A',  // orange
    R: '#D4673C',  // orange deep
    T: '#79C98F',  // leaf green
    S: '#5FB178',  // leaf deep
    q: '#6B5FA8',  // dusk purple
    Q: '#4A4080'
  };

  /* ---------------- Base head (16x16) ---------------- */
  var BASE = [
    '................',
    '................',
    '................',
    '................',
    '.kkkkkkkkkkkkkk.',
    '.kffffffffffffk.',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    'kffffffffffffffk',
    '.kffffffffffffk.',
    '..kkkkkkkkkkkk..'
  ];

  /* ---------------- Face feature rows ---------------- */
  var F = {
    eyes:     ['kffkkffffkkfffk', 'kffkkffffkkfffk'], // 2x2, cols 3-4 / 11-12
    eyesShut: ['kffffffffffffffk', 'kfffkkfffkkfffk'], // sleepy lids
    noseSm:   'kffffffkkffffffk',
    nosePk:   'kffffffppffffffk',
    mouthSm:  'kfffffkkkkfffffk',
    mouthW:   'kffffkkkkkkffffk'
  };

  /* ---------------- Ear patches (rows 0-3) ---------------- */
  var E = {
    bunny:  ['.....kk..kk.....', '....kkk..kkk....', '....kfk..kfk....', '....kfk..kfk....'],
    bear:   ['................', '..kkkk....kkkk..', '..kffk....kffk..', '..kffk....kffk..'],
    cat:    ['...kk......kk...', '..kkk......kkk..', '..kffk....kffk..', '..kffk....kffk..'],
    fox:    ['...kk......kk...', '..kffk....kffk..', '..kffk....kffk..', '..kfffk..kfffk..'],
    pig:    ['................', '..kkkk....kkkk..', '..kffk....kffk..', '..kffk....kffk..'],
    dragon: ['..kk........kk..', '..kqqk....kqqk..', '..kqqk....kqqk..', '..kqqk....kqqk..'],
    sheep:  ['..kkkkkkkkkkkk..', '.kwwwwwwwwwwwwk.', 'kwwwwwwwwwwwwwwk', 'kwwwwwwwwwwwwwwk']
  };

  /* ---------------- Composition ---------------- */
  function merge(grid, patch, y) {
    var out = grid.slice();
    for (var g = 0; g < patch.length; g++) {
      var row = patch[g];
      if (!row) continue;
      var target = y + g;
      if (target < 0 || target >= out.length) continue;
      var line = out[target].split('');
      for (var c = 0; c < row.length && c < line.length; c++) {
        var ch = row.charAt(c);
        if (ch !== '.') line[c] = ch;
      }
      out[target] = line.join('');
    }
    return out;
  }

  /** fill = palette char for the coat. layers = [{rows:[...], y:n}, ...] */
  function creature(fill, layers) {
    var grid = BASE.slice();
    for (var i = 0; i < layers.length; i++) grid = merge(grid, layers[i].rows, layers[i].y);
    // "f" inside a patch means "the coat colour"
    for (var r = 0; r < grid.length; r++) grid[r] = grid[r].replace(/f/g, fill);
    return grid;
  }

  /* ---------------- Sprites ---------------- */
  var S = {};

  /* ===== Hero / decor ===== */

  S.moon = [
    '......ggggg.....',
    '....ggggggggg...',
    '...ggggggggggg..',
    '..gggggggggggg..',
    '..gggggggggggg..',
    '..ggggggggg.....',
    '..ggggggg.......',
    '..gggggg........',
    '..gggggg........',
    '..ggggggg.......',
    '..ggggggggg.....',
    '..gggggggggggg..',
    '..gggggggggggg..',
    '...ggggggggggg..',
    '....ggggggggg...',
    '......ggggg.....'
  ];

  S.moonFace = [
    '......gggg......',
    '....gggggggg....',
    '...gggggggggg...',
    '..gggggggggggg..',
    '.gggggggggggggg.',
    'gggggggggggggggg',
    'gggggggggggggggg',
    'ggggkkggggkkgggg',
    'ggggkkggggkkgggg',
    'gggggggggggggggg',
    'ggggggkkkkgggggg',
    'gggggggggggggggg',
    '.gggggggggggggg.',
    '..gggggggggggg..',
    '...gggggggggg...',
    '....gggggggg....'
  ];

  S.star = [
    '.......g........',
    '.......g........',
    '......ggg.......',
    '......ggg.......',
    '.....ggggg......',
    'gggggggggggggggg',
    '.gggggggggggggg.',
    '..gggggggggggg..',
    '...gggggggggg...',
    '....gggggggg....',
    '...gggg..gggg...',
    '..gggg....gggg..',
    '................',
    '................',
    '................',
    '................'
  ];

  S.starFace = [
    '.......g........',
    '.......g........',
    '......ggg.......',
    '......ggg.......',
    '.....ggggg......',
    'gggggggggggggggg',
    '.gggkkggggkkggg.',
    '..gggggggggggg..',
    '...gggkkkkggg...',
    '....gggggggg....',
    '...gggg..gggg...',
    '..gggg....gggg..',
    '................',
    '................',
    '................',
    '................'
  ];

  S.starSmall = [
    '.......g........',
    '.......g........',
    '......ggg.......',
    '.....ggggg......',
    'gggggggggggggggg',
    '.gggggggggggggg.',
    '..gggggggggggg..',
    '...gggggggggg...',
    '....gggggggg....',
    '...gggg..gggg...',
    '..gggg....gggg..',
    '.......g........',
    '.......g........',
    '................',
    '................',
    '................'
  ];

  S.book = [
    '................',
    '................',
    '..kkkkkkkkkkkk..',
    '.kllllkkkkklllk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    'klllllkvkvklqlk.',
    '.kllllkkkkklll..',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................'
  ];

  S.pillow = [
    '................',
    '................',
    '................',
    '...kkkkkkkkkk...',
    '..kccccccccccck.',
    '.kccssssssssccck',
    'kccssssssssssccc',
    'kccssssssssssccc',
    'kccssssssssssccc',
    '.kcccccccccccck.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................',
    '................'
  ];

  S.sparkle = [
    '.......g........',
    '......ggg.......',
    '......ggg.......',
    '.....ggggg......',
    'gggggggggggggg..',
    '.gggggggggggg...',
    '..gggggggggg....',
    '...gggggggg.....',
    '...gggggggg.....',
    '..gggggggggg....',
    '.gggggggggggg...',
    'gggggggggggggg..',
    '.....ggggg......',
    '......ggg.......',
    '......ggg.......',
    '.......g........'
  ];

  S.heart = [
    '................',
    '................',
    '..kkk....kkk....',
    '.kpppk....kpppk.',
    'kppppppppppppppk',
    'kppppppppppppppk',
    'kppppppppppppppk',
    '.kppppppppppppk.',
    '..kppppppppppk..',
    '...kppppppppk...',
    '....kppppppk....',
    '.....kppppk.....',
    '......kppk......',
    '.......kk.......',
    '................',
    '................'
  ];

  S.cloudSleepy = [
    '................',
    '......kkkk......',
    '....kkwwwwkk....',
    '..kkwwwwwwwwkk..',
    '.kwwwwwwwwwwwwk.',
    'kwwwwwwwwwwwwwwk',
    'kwwkwwwwwwwwkwwk',
    'kwwwwwwwwwwwwwwk',
    'kwwwwkkkkwwwwwwk',
    '.kwwwwwwwwwwwwk.',
    '.kkwwwwwwwwwwkk.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................'
  ];

  S.cloud = [
    '................',
    '......kkkk......',
    '....kkwwwwkk....',
    '..kkwwwwwwwwkk..',
    '.kwwwwwwwwwwwwk.',
    'kwwwwwwwwwwwwwwk',
    'kwkwwwwwwwwwwkww',
    'kwwwwwwwwwwwwwwk',
    'kwwwkkkkkkkwwwwk',
    '.kwwwwwwwwwwwwk.',
    '.kkwwwwwwwwwwkk.',
    '..kkkkkkkkkkkk..',
    '................',
    '................',
    '................',
    '................'
  ];

  /* ===== Creatures ===== */

  S.bunny = creature('w', [
    { rows: E.bunny, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: [F.nosePk], y: 11 },
    { rows: [F.mouthSm], y: 12 }
  ]);

  S.bear = creature('n', [
    { rows: E.bear, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: ['kfffffkkkkfffffk'], y: 11 },   // muzzle
    { rows: ['kfffffkkkkfffffk'], y: 12 },
    { rows: ['kffffffffffffffk'], y: 13 }
  ]);

  S.cat = creature('e', [
    { rows: E.cat, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: [F.nosePk], y: 11 },
    { rows: [F.mouthSm], y: 12 }
  ]);

  S.fox = creature('r', [
    { rows: E.fox, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: ['kfffffkkkkfffffk'], y: 11 },
    { rows: ['kfffffkkkkfffffk'], y: 12 },
    { rows: ['kwwwwwwwwwwwwwwk', '.kwwwwwwwwwwwwk.'], y: 13 }  // cream cheeks
  ]);

  S.frog = creature('T', [
    { rows: ['..kkk......kkk..'], y: 1 },
    { rows: ['..kfk......kfk..'], y: 2 },
    { rows: ['..kkk......kkk..'], y: 3 },
    { rows: [F.mouthW], y: 12 },
    { rows: ['kffffffffffffffk'], y: 13 }
  ]);

  S.sheep = creature('e', [
    { rows: E.sheep, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: [F.nosePk], y: 11 },
    { rows: [F.mouthSm], y: 12 }
  ]);

  S.pig = creature('p', [
    { rows: E.pig, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: ['kffffppkkppffffk'], y: 11 },   // snout
    { rows: [F.mouthSm], y: 13 }
  ]);

  S.dragon = creature('m', [
    { rows: E.dragon, y: 0 },
    { rows: F.eyes, y: 8 },
    { rows: ['kffffffkkffffffk'], y: 11 },   // nostrils
    { rows: ['kfffkkkkkkkkfffk'], y: 12 }    // grin
  ]);

  S.turtle = [
    '................',
    '......kkkk......',
    '....kkTTTTkk....',
    '..kkTTSSSSTTkk..',
    '.kTTSSSSSSSSTTk.',
    'kTTSSSTTSSSTSSTk',
    'kTSSTTTTTSSSSSTk',
    'kTTSSSTSSSSSSTTk',
    '.kTTSSSSSSTTTk..',
    '..kkkkkkkkkkkk..',
    '.kssk.kkkk.kssk.',
    'ksssk.kwwk.ksssk',
    'ksssk.kwwk.ksssk',
    '.kkk...kk...kkk.',
    '................',
    '................'
  ];

  S.penguin = [
    '................',
    '......kkkk......',
    '....kkwwwwkk....',
    '...kwwwwwwwwk...',
    '..kwwkwwwwkwwk..',
    '..kwwkwwwwkwwk..',
    '..kwwwwwwwwwwk..',
    '.kbbwwwkkwwwbbk.',
    '.kbbwkkkkkkwbbk.',
    '.kbbwwwwwwwwbbk.',
    '.kbbwwwwwwwwbbk.',
    '.kbbbwwwwwwbbbk.',
    '..kbbbbbbbbbbk..',
    '..kkbbbbbbbbkk..',
    '...kkkkkkkkkk...',
    '................'
  ];

  /* ---------------- Story id -> sprite ---------------- */
  var STORY_SPRITE = {
    'kelinci-tak-bisa-tidur': 'bunny',
    'beruang-dan-bintang-jatuh': 'bear',
    'kucing-yang-ingin-ke-bulan': 'cat',
    'rubah-dan-toko-es-krim-ajaib': 'fox',
    'katak-yang-takut-gelap': 'frog',
    'domba-yang-kehilangan-mimpi': 'sheep',
    'kura-kura-dan-sepatu-terbang': 'turtle',
    'naga-kecil-yang-bersin-api': 'dragon',
    'awan-yang-ingin-menjadi-hujan': 'cloud',
    'penguin-yang-salah-masuk-rumah': 'penguin',
    'bulan-yang-lupa-tidur': 'moonFace',
    'bintang-kecil-yang-tersesat': 'starFace'
  };

  /**
   * Render a named sprite to SVG markup.
   * @param {string} name - key of S
   * @param {{cls?:string, label?:string, decorative?:boolean}} [opts]
   */
  function render(name, opts) {
    opts = opts || {};
    var def = S[name];
    if (!def) { def = S.star; name = 'star'; }
    return sprite.svg(
      { grid: def, pal: P, title: opts.label },
      {
        cls: opts.cls || 'sprite',
        key: 'art:' + name,
        label: opts.label,
        decorative: !!opts.decorative
      }
    );
  }

  /** Sprite used for a given story id. */
  function forStory(storyId) {
    return STORY_SPRITE[storyId] || 'star';
  }

  CBT.art = {
    palette: P,
    sprites: S,
    render: render,
    forStory: forStory,
    names: function () { return Object.keys(S); }
  };
})(typeof window !== 'undefined' ? window : this);
