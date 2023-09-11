const playwright = require('playwright');

(async function scraper() {
    const browser = await playwright.chromium.launch({ headless: false });
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('google.com');
})();
