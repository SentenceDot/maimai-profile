const puppeteer = require('puppeteer');

(async () => {
    console.time('run at')
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('https://maimai-net.com/maimai-mobile/');
    const segaid = await page.$('input[name=segaId]')
    await segaid.type('your segaid here')
    const passWd = await page.$('input[name=passWd]')
    await passWd.type('your password here')
    const login = await page.$('input[type=image]')
    await login.click()
    await page.waitForNavigation();
    const detail = await page.$('img[alt=プレイヤーデータ]')
    await detail.click()
    await page.waitForNavigation();
    await page.hover('div.status_data')
    const status_data = await page.$('div.status_data')

    await status_data.screenshot({
        path: 'example.png',
    });

    await browser.close();
    console.timeEnd('run at')
})();
