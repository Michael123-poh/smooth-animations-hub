import { chromium } from 'playwright';
const OUT = 'C:/Users/User/AppData/Local/Temp/claude/c--Users-User-Downloads-smooth-animations-hub-main/58877177-320f-46a1-81db-b43a5c829968/scratchpad';
const browser = await chromium.launch();
const page = await browser.newPage();
await page.setViewportSize({ width: 390, height: 900 });
await page.goto('http://localhost:5199/', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
await page.evaluate(() => { const el=document.querySelector('.gaia-dna'); if(el) el.scrollIntoView({block:'start'}); });
await page.waitForTimeout(1500);
// stitch full DNA section by scrolling
await page.screenshot({ path: `${OUT}/r12_m_adn_top.png` });
await page.evaluate(() => window.scrollBy(0, 620));
await page.waitForTimeout(800);
await page.screenshot({ path: `${OUT}/r12_m_adn_bottom.png` });
await browser.close();
console.log('done');
