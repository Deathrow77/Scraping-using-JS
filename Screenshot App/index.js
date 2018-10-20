const puppeteer = require('puppeteer');

async function getImage(){
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.github.com/Deathrow77');
  await page.screenshot({path:'image.png'});
  await browser.close();
}

getImage();
