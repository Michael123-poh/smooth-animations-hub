import puppeteer from 'puppeteer-core';

const browser = await puppeteer.launch({
  headless: true,
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  args: ['--no-sandbox', '--disable-setuid-sandbox']
});

const page = await browser.newPage();

// ── PC ──
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:8080', { waitUntil: 'networkidle0', timeout: 15000 });
await page.reload({ waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

const pcH = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < pcH; y += 900) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `pc-s${y}.png`, clip: { x: 0, y, width: 1440, height: Math.min(900, pcH - y) } });
  console.log(`pc-s${y}.png`);
}

// ── Mobile ──
await page.setViewport({ width: 390, height: 844, isMobile: true, hasTouch: true });
await page.goto('http://localhost:8080', { waitUntil: 'networkidle0', timeout: 15000 });
await page.reload({ waitUntil: 'networkidle0' });
await new Promise(r => setTimeout(r, 2000));

const mobH = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y < mobH; y += 844) {
  await page.evaluate(s => window.scrollTo(0, s), y);
  await new Promise(r => setTimeout(r, 400));
  await page.screenshot({ path: `mob-s${y}.png`, clip: { x: 0, y, width: 390, height: Math.min(844, mobH - y) } });
  console.log(`mob-s${y}.png`);
}

await browser.close();
console.log('all done');
