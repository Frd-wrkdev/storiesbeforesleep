/* ==================================================================
   CBT.sprite - pixel-art renderer
   ------------------------------------------------------------------
   Sprites are authored as character grids + a palette map:

       { grid: ["..kk..", ".kwwk."], pal: { k:"#2A2440", w:"#FDF8F0" } }

   Every pixel of the same colour is merged into ONE horizontal run,
   and all runs of one colour are merged into a single <path>. A 24x24
   sprite therefore costs ~5 DOM nodes instead of 576.

   Output is a scalable inline SVG with crispEdges so the pixel grid
   stays razor sharp at any size.

   Legend: any character absent from the palette, plus " " and ".",
   renders as transparent.
   ================================================================== */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});
  var SVG_NS = 'http://www.w3.org/2000/svg';
  var coreCache = Object.create(null);

  function resolve(pal, ch) {
    if (ch === ' ' || ch === '.') return null;
    return pal[ch] || null;
  }

  /* Group pixels into one horizontal run per row, bucketed by colour. */
  function compile(grid, pal) {
    var h = grid.length;
    var w = 0;
    var i, r;

    for (i = 0; i < h; i++) if (grid[i].length > w) w = grid[i].length;

    var order = [];
    var paths = Object.create(null);

    for (r = 0; r < h; r++) {
      var row = grid[r];
      var len = row.length;
      var c = 0;

      while (c < len) {
        var color = resolve(pal, row[c]);
        if (!color) { c++; continue; }

        var start = c;
        while (c < len) {
          if (resolve(pal, row[c]) !== color) break;
          c++;
        }

        var run = c - start;
        if (!paths[color]) { paths[color] = ''; order.push(color); }
        paths[color] += 'M' + start + ',' + r + 'h' + run + 'v1h-' + run + 'z';
      }
    }

    return { w: w, h: h, order: order, paths: paths };
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function coreFor(def, key) {
    if (key && coreCache[key]) return coreCache[key];

    var out = compile(def.grid, def.pal);
    var i;
    var inner = [];
    for (i = 0; i < out.order.length; i++) {
      var color = out.order[i];
      inner.push('<path fill="' + color + '" d="' + out.paths[color] + '"/>');
    }

    var core = { w: out.w, h: out.h, inner: inner.join('') };
    if (key) coreCache[key] = core;
    return core;
  }

  /**
   * Render a sprite definition to an SVG markup string.
   * @param {{grid:string[], pal:Object, title?:string}} def
   * @param {{title?:string, cls?:string, key?:string, label?:string}} [opts]
   * @returns {string}
   */
  function svg(def, opts) {
    opts = opts || {};
    var core = coreFor(def, opts.key);

    if (opts.decorative) {
      return '<svg' +
        ' xmlns="' + SVG_NS + '"' +
        ' viewBox="0 0 ' + core.w + ' ' + core.h + '"' +
        ' width="' + core.w + '" height="' + core.h + '"' +
        ' shape-rendering="crispEdges"' +
        ' aria-hidden="true" focusable="false"' +
        ' class="' + esc(opts.cls || 'sprite') + '"' +
        ' data-px="' + core.w + 'x' + core.h + '">' +
        core.inner +
        '</svg>';
    }

    var label = opts.label || opts.title || def.title || 'Ilustrasi piksel';

    return '<svg' +
      ' xmlns="' + SVG_NS + '"' +
      ' viewBox="0 0 ' + core.w + ' ' + core.h + '"' +
      ' width="' + core.w + '" height="' + core.h + '"' +
      ' shape-rendering="crispEdges"' +
      ' role="img"' +
      ' class="' + esc(opts.cls || 'sprite') + '"' +
      ' data-px="' + core.w + 'x' + core.h + '">' +
      '<title>' + esc(label) + '</title>' +
      core.inner +
      '</svg>';
  }

  /** Convenience: build a sprite from a newline-separated template string. */
  function fromString(str, pal, title) {
    return svg({ grid: str.replace(/^\n/, '').replace(/\n$/, '').split('\n'), pal: pal, title: title });
  }

  CBT.sprite = {
    svg: svg,
    fromString: fromString,
    compile: compile,
    clearCache: function () { coreCache = Object.create(null); },
    NS: SVG_NS
  };
})(typeof window !== 'undefined' ? window : this);
