import { firefox } from 'playwright';
// import { chromium } from 'playwright';
// import { ips } from './ips_list.js';

// const proxy = ips[Math.round(Math.random() * ips.length)];
// console.log('going with', proxy);

// chromiu
const browser = await firefox.launchPersistentContext('./persistantContext', {
    headless: false,
    slowMo: 5000,
    // proxy: {
    //     server: '178.21.163.24',
    // },
});

const page = browser.pages()[0];

// https://ckgsir.com/
await page.goto('https://whatismyipaddress.com/');
// await page.waitForTimeout(5000);
// await browser.close();
