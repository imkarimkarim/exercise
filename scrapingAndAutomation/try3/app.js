const { Builder, Browser, By, Key, until } = require('selenium-webdriver');

(async () => {
    let driver = await new Builder().forBrowser(Browser.FIREFOX).build();
    try {
        await driver.get('https://ckgsir.com/');
        // await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        // await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } finally {
        //     await driver.quit();
    }
})();
