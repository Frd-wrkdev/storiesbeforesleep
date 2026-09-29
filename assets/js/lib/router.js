/* Hash router - required because the site must work from file://,
   where history.pushState and ES modules are unavailable. */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  var routes = [];
  var current = null;
  var listener = null;
  var suppress = false;

  function add(pattern, name) {
    routes.push({
      name: name,
      segments: pattern.split('/').filter(Boolean)
    });
  }

  function parseHash(hash) {
    var raw = String(hash || '').replace(/^#/, '');
    if (!raw || raw === '/') raw = '/';
    var qi = raw.indexOf('?');
    var path = qi === -1 ? raw : raw.slice(0, qi);
    var queryStr = qi === -1 ? '' : raw.slice(qi + 1);

    var parts = path.split('/').filter(Boolean);
    var query = {};
    if (queryStr) {
      queryStr.split('&').forEach(function (pair) {
        if (!pair) return;
        var eq = pair.indexOf('=');
        var k = eq === -1 ? pair : pair.slice(0, eq);
        var v = eq === -1 ? '' : pair.slice(eq + 1);
        try { query[decodeURIComponent(k)] = decodeURIComponent(v.replace(/\+/g, ' ')); }
        catch (e) { query[k] = v; }
      });
    }
    return { parts: parts, query: query, path: '/' + parts.join('/') };
  }

  function match(parts) {
    for (var i = 0; i < routes.length; i++) {
      var r = routes[i];
      if (r.segments.length !== parts.length) continue;
      var params = {};
      var ok = true;
      for (var j = 0; j < r.segments.length; j++) {
        var seg = r.segments[j];
        if (seg.charAt(0) === ':') {
          params[seg.slice(1)] = decodeURIComponent(parts[j]);
        } else if (seg !== parts[j]) {
          ok = false;
          break;
        }
      }
      if (ok) return { name: r.name, params: params };
    }
    return null;
  }

  function resolve() {
    var h = parseHash(global.location.hash);
    var m = match(h.parts);
    if (!m) m = { name: 'notfound', params: {} };
    return {
      name: m.name,
      params: m.params,
      query: h.query,
      path: h.path,
      hash: global.location.hash || '#/'
    };
  }

  function navigate(to, opts) {
    opts = opts || {};
    var target = to.charAt(0) === '#' ? to : '#' + (to.charAt(0) === '/' ? to : '/' + to);
    if ((global.location.hash || '#/') === target) {
      // Same hash - re-emit so callers can force a re-render.
      emit();
      return;
    }
    suppress = !!opts.replace;
    if (opts.replace && global.location.replace) {
      global.location.replace(
        global.location.pathname + global.location.search + target
      );
    } else {
      global.location.hash = target;
    }
  }

  function emit() {
    if (!listener) return;
    var next = resolve();
    var prev = current;
    current = next;
    listener(next, prev);
  }

  function start(fn) {
    listener = fn;
    if (!routes.length) {
      add('/', 'home');
      add('/cerita', 'stories');
      add('/kategori', 'categoryIndex');
      add('/kategori/:id', 'category');
      add('/favorit', 'favorites');
      add('/cerita/:id', 'reader');
    }
    global.addEventListener('hashchange', function () {
      if (suppress) { suppress = false; return; }
      emit();
    });
    if (!global.location.hash) {
      // Normalise an empty hash so links are always explicit.
      if (global.history && global.history.replaceState) {
        global.history.replaceState(null, '', global.location.pathname + global.location.search + '#/');
      }
    }
    emit();
  }

  function href(name, params) {
    params = params || {};
    var pattern = null;
    for (var i = 0; i < routes.length; i++) if (routes[i].name === name) pattern = routes[i];
    if (!pattern) return '#/';
    var out = pattern.segments.map(function (seg) {
      return seg.charAt(0) === ':' ? encodeURIComponent(params[seg.slice(1)] || '') : seg;
    }).join('/');
    return '#/' + out;
  }

  CBT.router = {
    start: start,
    navigate: navigate,
    href: href,
    resolve: resolve,
    current: function () { return current; }
  };
})(typeof window !== 'undefined' ? window : this);
