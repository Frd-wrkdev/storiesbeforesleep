/* DOM helpers - no framework, no build step */
(function (global) {
  'use strict';

  var CBT = global.CBT || (global.CBT = {});

  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) {
    return Array.prototype.slice.call((root || document).querySelectorAll(sel));
  }

  /** Escape text for safe interpolation into HTML strings. */
  function esc(str) {
    return String(str == null ? '' : str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /** Parse an HTML string into a DocumentFragment (first root element kept as wrapper). */
  function frag(html) {
    var t = document.createElement('template');
    t.innerHTML = html;
    return t.content;
  }

  /** Create an element from a tag name and props/children shorthand. */
  function el(tag, props, children) {
    var node = document.createElement(tag);
    if (props) {
      for (var k in props) {
        if (!Object.prototype.hasOwnProperty.call(props, k)) continue;
        var v = props[k];
        if (v == null || v === false) continue;
        if (k === 'class' || k === 'className') node.className = v;
        else if (k === 'html') node.innerHTML = v;
        else if (k === 'text') node.textContent = v;
        else if (k === 'style' && typeof v === 'object') {
          for (var s in v) node.style[s] = v[s];
        } else if (k.slice(0, 2) === 'on' && typeof v === 'function') {
          node.addEventListener(k.slice(2).toLowerCase(), v);
        } else if (k === 'dataset' && typeof v === 'object') {
          for (var d in v) node.dataset[d] = v[d];
        } else {
          node.setAttribute(k, v === true ? '' : v);
        }
      }
    }
    if (children != null) {
      var list = Array.isArray(children) ? children : [children];
      for (var i = 0; i < list.length; i++) {
        var c = list[i];
        if (c == null || c === false) continue;
        node.appendChild(typeof c === 'string' ? document.createTextNode(c) : c);
      }
    }
    return node;
  }

  function on(target, type, handler, opts) {
    target.addEventListener(type, handler, opts);
    return function () { target.removeEventListener(type, handler, opts); };
  }

  /** Event delegation. handler(event, matchedTarget) */
  function delegate(root, type, selector, handler) {
    return on(root, type, function (e) {
      var t = e.target && e.target.closest ? e.target.closest(selector) : null;
      if (t && root.contains(t)) handler(e, t);
    });
  }

  function clear(node) { while (node && node.firstChild) node.removeChild(node.firstChild); }

  function replace(node, html) {
    clear(node);
    node.appendChild(frag(html));
    return node;
  }

  /** Debounce (for search input). */
  function debounce(fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait || 180);
    };
  }

  CBT.dom = {
    qs: qs, qsa: qsa, esc: esc, frag: frag, el: el,
    on: on, delegate: delegate, clear: clear, replace: replace, debounce: debounce
  };
})(typeof window !== 'undefined' ? window : this);
