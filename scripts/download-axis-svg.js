import fs from 'fs';
import path from 'path';
import https from 'https';

const apiUrl = 'https://commons.wikimedia.org/w/api.php?action=query&titles=File:Axis_Bank_logo.svg&prop=imageinfo&iiprop=url&format=json';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'EasyLendAssetBot/1.0 (contact@easylend.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(JSON.parse(data)));
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'EasyLendAssetBot/1.0 (contact@easylend.com)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
    }).on('error', reject);
  });
}

async function run() {
  const json = await fetchJson(apiUrl);
  const pages = json.query.pages;
  for (const p in pages) {
    if (pages[p].imageinfo && pages[p].imageinfo[0]) {
      const imgUrl = pages[p].imageinfo[0].url;
      console.log('Downloading Axis Bank SVG from:', imgUrl);
      const dest = path.resolve('public/assets/partners/axis-bank.svg');
      await download(imgUrl, dest);
      console.log('Saved axis-bank.svg');
    }
  }
}

run();

