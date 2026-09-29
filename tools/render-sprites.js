/* Renders every sprite in CBT.art to an HTML grid for visual review.
   Usage: node tools\render-sprites.js > tools\_sprites.html   */
const vm = require('vm');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ctx = vm.createContext({});

for (const f of ['assets/js/lib/sprite.js', 'assets/js/lib/art.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}

const art = ctx.CBT.art;
const names = art.names();

const cells = names.map((n) => {
  const svg = art.render(n, { cls: 'sprite', label: n });
  return `<figure class="cell"><div class="tile">${svg}</div><figcaption>${n}</figcaption></figure>`;
});

const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>Sprite review</title>
<style>
  body{margin:0;padding:24px;background:#0B1026;font:13px/1.4 system-ui,sans-serif;color:#F4F1FF}
  h1{font-size:16px;letter-spacing:.02em;color:#8380A8;margin:0 0 20px}
  .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:18px}
  .cell{margin:0;text-align:center}
  .tile{background:#FDF8F0;border-radius:18px;padding:22px;display:grid;place-items:center;
        box-shadow:0 10px 24px -14px #000}
  .tile.dark{background:#141B3D}
  .sprite{width:96px;height:96px;image-rendering:pixelated}
  figcaption{margin-top:8px;color:#8380A8;font-size:12px}
  .row2{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:18px;margin-top:26px}
</style>
<h1>CBT.art - ${names.length} sprites</h1>
<div class="grid">${cells.join('')}</div>
<h1 style="margin-top:32px">On dark surfaces</h1>
<div class="grid">${names.map((n) => `<figure class="cell"><div class="tile dark">${art.render(n, { cls: 'sprite', label: n })}</div><figcaption>${n}</figcaption></figure>`).join('')}</div>
</html>`;

process.stdout.write(html);
