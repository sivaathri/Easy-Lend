import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/assets/partners');

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'EasyLendAssetBot/1.0 (contact@easylend.com)' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
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
  const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=File:Star_Health_and_Allied_Insurance.svg&prop=imageinfo&iiprop=url&format=json`;
  const json = await fetchJson(apiUrl);
  const pages = json.query.pages;
  for (const p in pages) {
    if (pages[p].imageinfo && pages[p].imageinfo[0]) {
      const imgUrl = pages[p].imageinfo[0].url;
      console.log(`Downloading star-health from ${imgUrl}`);
      await download(imgUrl, path.join(outDir, 'star-health.svg'));
      console.log('Saved star-health.svg');
    }
  }
}

run();

