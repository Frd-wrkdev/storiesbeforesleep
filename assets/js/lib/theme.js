/* Site-wide colour theme.
   ------------------------------------------------------------------
   prefs.theme = 'auto' | 'dark' | 'light', defaulting to 'auto'.

   'auto' resolves from prefers-color-scheme and re-resolves whenever
   the device flips, so the page changes palette without a reload.
   An explicit 'dark' / 'light' pins it and stops following the device.

   A small inline copy of the resolve step lives in index.html <head>
   so the attribute is on <html> before first paint. Keep the two in
   sync: legacy 'night'/'paper' values must map the same way. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  var NS = 'cbt:v1:';
  var doc = global.document;
  var root = doc.documentElement;

  var mq = global.matchMedia
    ? global.matchMedia('(prefers-color-scheme: dark)')
    : null;

  var mode = 'auto';       // stored preference
  var current = 'dark';    // resolved, i.e. what <html data-theme> says

  function legacy(v) {
    if (v === 'night') return 'dark';
    if (v === 'paper') return 'light';
    return v;
  }

  function readPref() {
    var v = null;
    try { v = JSON.parse(global.localStorage.getItem(NS + 'prefs') || '{}').theme; }
    catch (e) { v = null; }
    v = legacy(v);
    return (v === 'dark' || v === 'light') ? v : 'auto';
  }

  function writePref(v) {
    var p = {};
    try { p = JSON.parse(global.localStorage.getItem(NS + 'prefs') || '{}') || {}; }
    catch (e) { p = {}; }
    p.theme = v;
    try { global.localStorage.setItem(NS + 'prefs', JSON.stringify(p)); }
    catch (e) { /* storage blocked - the mode still applies for this visit */ }
  }

  function resolve(m) {
    if (m === 'dark' || m === 'light') return m;
    return (mq && mq.matches) ? 'dark' : 'light';
  }

  function paint() {
    root.setAttribute('data-theme', current);
    var tc = doc.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute('content', current === 'light' ? '#F7F1E6' : '#0B1026');
  }

  function apply() {
    var next = resolve(mode);
    if (next === current) { paint(); return false; }
    current = next;
    paint();
    return true;
  }

  /* ---------------- Boot ---------------- */
  mode = readPref();
  current = resolve(mode);
  paint();

  if (mq) {
    var onSchemeChange = function () {
      if (mode !== 'auto') return;
      if (apply() && CBT.app && CBT.app.toast) {
        CBT.app.toast(current === 'dark' ? 'Mode malam' : 'Mode kertas');
      }
    };
    if (mq.addEventListener) mq.addEventListener('change', onSchemeChange);
    else if (mq.addListener) mq.addListener(onSchemeChange);
  }

  CBT.theme = {
    /** The stored preference: 'auto' | 'dark' | 'light'. */
    mode: function () { return mode; },
    /** What is actually applied right now: 'dark' | 'light'. */
    current: function () { return current; },
    /** Pins the mode (or 'auto') and applies it. Returns true if the palette changed. */
    set: function (m) {
      m = legacy(m);
      if (m !== 'dark' && m !== 'light') m = 'auto';
      mode = m;
      writePref(m);
      return apply();
    },
    refresh: apply
  };
})(typeof window !== 'undefined' ? window : this);
