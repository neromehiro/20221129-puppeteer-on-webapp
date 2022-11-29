const http = require('http');
const os = require('os');
const puppeteer = require('puppeteer');

(async () => {
})();

const port = process.env.PORT || 8080;
http.createServer(async function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  const host = os.hostname()
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  await page.goto('https://protoout.studio/');
  await new Promise(r => setTimeout(r, 10000));
  res.end(await page.screenshot())
  await browser.close();
}).listen(port).on("listening", () => { console.log(`listening on http://localhost:${port}`) });
