/* Persistent state - favourites, reading progress, preferences.
   Namespaced under `cbt:v1:` so future migrations can coexist.
   Every read is guarded: localStorage can be blocked or full. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  var NS = 'cbt:v1:';
  var mem = {}; // in-memory fallback when localStorage is unavailable

  var hasLS = (function () {
    try {
      var k = '__cbt_probe__';
      global.localStorage.setItem(k, '1');
      global.localStorage.removeItem(k);
      return true;
    } catch (e) { return false; }
  })();

  function read(key, fallback) {
    var raw;
    if (hasLS) {
      try { raw = global.localStorage.getItem(NS + key); } catch (e) { raw = null; }
    } else {
      raw = mem[key];
    }
    if (raw == null) return fallback;
    try { return JSON.parse(raw); } catch (e) { return fallback; }
  }

  function write(key, value) {
    var raw;
    try { raw = JSON.stringify(value); } catch (e) { return false; }
    if (hasLS) {
      try { global.localStorage.setItem(NS + key, raw); return true; }
      catch (e) { /* quota or blocked - fall through to memory */ }
    }
    mem[key] = raw;
    return true;
  }

  /* ---------------- Favourites ---------------- */
  var favorites = {
    all: function () {
      var v = read('favorites', []);
      return Array.isArray(v) ? v : [];
    },
    has: function (id) { return favorites.all().indexOf(id) !== -1; },
    toggle: function (id) {
      var list = favorites.all();
      var i = list.indexOf(id);
      if (i === -1) list.push(id); else list.splice(i, 1);
      write('favorites', list);
      return i === -1; // returns true when now favourited
    },
    count: function () { return favorites.all().length; }
  };

  /* ---------------- Reading progress ----------------
     shape: { [storyId]: { pct: 0-100, at: timestamp } } */
  var progress = {
    all: function () {
      var v = read('progress', {});
      return (v && typeof v === 'object') ? v : {};
    },
    get: function (id) {
      return progress.all()[id] || null;
    },
    set: function (id, pct) {
      pct = Math.max(0, Math.min(100, Math.round(pct)));
      var all = progress.all();
      var prev = all[id];
      // Never let scrolling backwards erase how far someone got.
      if (prev && prev.pct > pct && prev.pct - pct < 20) pct = prev.pct;
      all[id] = { pct: pct, at: Date.now() };
      write('progress', all);
      return all[id];
    },
    remove: function (id) {
      var all = progress.all();
      delete all[id];
      write('progress', all);
    },
    /** The most recently opened story that still has progress left. */
    latest: function () {
      var all = progress.all();
      var best = null;
      for (var id in all) {
        if (!Object.prototype.hasOwnProperty.call(all, id)) continue;
        var rec = all[id];
        if (!CBT.stories.get(id)) continue;
        if (!best || rec.at > all[best].at) best = id;
      }
      if (!best) return null;
      return { story: CBT.stories.get(best), pct: all[best].pct, at: all[best].at };
    },
    any: function () {
      var all = progress.all();
      for (var id in all) {
        if (Object.prototype.hasOwnProperty.call(all, id) && CBT.stories.get(id)) return true;
      }
      return false;
    }
  };

  /* ---------------- Preferences ---------------- */
  var DEFAULT_PREFS = { theme: 'night' }; // 'night' | 'paper'
  var prefs = {
    all: function () {
      var v = read('prefs', null);
      if (!v || typeof v !== 'object') return Object.assign({}, DEFAULT_PREFS);
      return Object.assign({}, DEFAULT_PREFS, v);
    },
    get: function (key) { return prefs.all()[key]; },
    set: function (key, value) {
      var p = prefs.all();
      p[key] = value;
      write('prefs', p);
      return p;
    }
  };

  CBT.store = {
    storageAvailable: hasLS,
    favorites: favorites,
    progress: progress,
    prefs: prefs
  };
})(typeof window !== 'undefined' ? window : this);
