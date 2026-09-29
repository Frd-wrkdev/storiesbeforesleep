/* Validates every sprite in CBT.art:
     - all rows in a grid are the same width
     - every character is either the palette or transparent (' ' '.')
     - no row exceeds the declared width
   Exits non-zero when problems are found.                              */
const vm = require('vm');
const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const ctx = vm.createContext({});
for (const f of ['assets/js/lib/sprite.js', 'assets/js/lib/art.js']) {
  vm.runInContext(fs.readFileSync(path.join(root, f), 'utf8'), ctx, { filename: f });
}

const art = ctx.CBT.art;
const palette = art.palette;
const allowed = new Set([...Object.keys(palette), ' ', '.']);
const WANT_W = 16;
let problems = 0;

for (const name of art.names()) {
  const grid = art.sprites[name];
  const w = grid[0].length;
  if (w !== WANT_W) {
    console.log(`  ${name.padEnd(14)} grid width ${w} != ${WANT_W}`);
    problems++;
  }

  grid.forEach((row, i) => {
    if (row.length !== w) {
      console.log(`  ${name.padEnd(14)} row ${String(i).padStart(2)} width ${row.length} != ${w}   |${row}|`);
      problems++;
    }
    for (const ch of row) {
      if (!allowed.has(ch)) {
        console.log(`  ${name.padEnd(14)} row ${String(i).padStart(2)} unknown char "${ch}" (not in palette)  |${row}|`);
        problems++;
      }
    }
  });
}

console.log(`\n${art.names().length} sprites checked`);
console.log(problems ? `\nFAIL - ${problems} problem(s)` : '\nOK - all sprites valid');
process.exit(problems ? 1 : 0);
