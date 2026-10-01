// Prints /cv/print/ to the downloadable PDF.
// Usage: start `npm run dev` (or `npm run preview`), then `npm run cv:pdf [base-url]`.
import { chromium } from 'playwright-core';
import { fileURLToPath } from 'node:url';

const base = process.argv[2] ?? 'http://localhost:4321';
const out = fileURLToPath(new URL('../public/doc/CV-MichaelTomaylla2026.pdf', import.meta.url));

async function launch() {
  for (const channel of ['msedge', 'chrome']) {
    try {
      return await chromium.launch({ channel });
    } catch {
      // try the next installed browser
    }
  }
  throw new Error('No Edge or Chrome installation found.');
}

const browser = await launch();
try {
  const page = await browser.newPage();
  const res = await page.goto(new URL('/cv/print/', base).href, { waitUntil: 'networkidle' });
  if (!res?.ok()) throw new Error(`Could not load ${base}/cv/print/ (HTTP ${res?.status()}). Is the dev server running?`);
  await page.evaluate(() => document.fonts.ready);
  await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
  console.log(`CV written to ${out}`);
} finally {
  await browser.close();
}
