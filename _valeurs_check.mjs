import { chromium } from 'playwright';
const OUT = 'C:/Users/User/AppData/Local/Temp/claude/c--Users-User-Downloads-smooth-animations-hub-main/58877177-320f-46a1-81db-b43a5c829968/scratchpad';
const browser = await chromium.launch();
const page = await browser.newPage();

// PC check (unaffected)
await page.setViewportSize({ width: 1504, height: 950 });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
await page.evaluate(() => { const el=document.querySelector('.gaia-pillars'); if(el) el.scrollIntoView({block:'center'}); });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${OUT}/valeurs_pc_v2.png` });

// Mobile Valeurs
await page.setViewportSize({ width: 390, height: 900 });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
await page.evaluate(() => { const el=document.querySelector('.gaia-pillars'); if(el) el.scrollIntoView({block:'start'}); });
await page.waitForTimeout(1800);
await page.screenshot({ path: `${OUT}/valeurs_mobile_v2.png` });
await page.evaluate(() => window.scrollBy(0, 500));
await page.waitForTimeout(500);
await page.screenshot({ path: `${OUT}/valeurs_mobile_v2b.png` });

await browser.close();
console.log('done');
