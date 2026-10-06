// Copies the web app into www/ for Capacitor.
// The Android app opens straight into the stock tracker, so stock.html
// becomes www/index.html and ShiftWise moves to www/shiftwise.html.
import { mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';

const out = 'www';
rmSync(out, { recursive: true, force: true });
mkdirSync(out);

const stock = readFileSync('stock.html', 'utf8').replaceAll('href="index.html"', 'href="shiftwise.html"');
const shift = readFileSync('index.html', 'utf8').replaceAll("location.href='stock.html'", "location.href='index.html'");

if (stock.includes('href="index.html"') || !stock.includes('href="shiftwise.html"')) throw new Error('stock.html link rewrite failed');
if (shift.includes("'stock.html'")) throw new Error('index.html link rewrite failed');

writeFileSync(`${out}/index.html`, stock);
writeFileSync(`${out}/shiftwise.html`, shift);
console.log('Built www/: index.html (StockWise), shiftwise.html (ShiftWise)');
