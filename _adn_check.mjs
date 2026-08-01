import { chromium } from 'playwright';
const OUT = 'C:/Users/User/AppData/Local/Temp/claude/c--Users-User-Downloads-smooth-animations-hub-main/58877177-320f-46a1-81db-b43a5c829968/scratchpad';
const browser = await chromium.launch();
const page = await browser.newPage();

// PC check
await page.setViewportSize({ width: 1504, height: 950 });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(700);
await page.evaluate(() => { const el=document.querySelector('.gaia-dna'); if(el) el.scrollIntoView({block:'center'}); });
await page.waitForTimeout(1500);
await page.screenshot({ path: `${OUT}/adn_pc.png` });

// Mobile ADN
await page.setViewportSize({ width: 390, height: 900 });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
await page.evaluate(() => { const el=document.querySelector('.gaia-dna'); if(el) el.scrollIntoView({block:'start'}); });
await page.waitForTimeout(1800);
await page.screenshot({ path: `${OUT}/adn_mobile.png` });

// Mobile Valeurs (pillars)
await page.evaluate(() => { const el=document.querySelector('.gaia-pillars'); if(el) el.scrollIntoView({block:'start'}); });
await page.waitForTimeout(1800);
await page.screenshot({ path: `${OUT}/valeurs_mobile.png` });

await browser.close();
console.log('done');
