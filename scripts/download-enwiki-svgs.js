import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/assets/partners');

const files = [
  { id: 'tata-aig', title: 'File:Tata_AIG_logo.svg' },
  { id: 'star-health', title: 'File:Star_Health_and_Allied_Insurance_logo.svg' },
  { id: 'icici-lombard', title: 'File:ICICI_Lombard_Logo.svg' },
  { id: 'bajaj-allianz', title: 'File:Bajaj_Allianz_General_Insurance_Logo.svg' },
  { id: 'aditya-birla-capital', title: 'File:Aditya_Birla_Capital_logo.svg' },
  { id: 'aditya-birla-sunlife', title: 'File:Aditya_Birla_Sun_Life_Insurance_logo.svg' },
  { id: 'bajaj-finance', title: 'File:Bajaj_Finserv_Logo.svg' }
];

const sleep = ms => new Promise(r => setTimeout(r, ms));

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
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => {
        stream.close();
        resolve();
      });
    }).on('error', reject);
  });
}

async function run() {
  for (const item of files) {
    const apiUrl = `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;
    try {
      await sleep(1500);
      const json = await fetchJson(apiUrl);
      const pages = json.query.pages;
      for (const p in pages) {
        if (pages[p].imageinfo && pages[p].imageinfo[0]) {
          const imgUrl = pages[p].imageinfo[0].url;
          console.log(`Downloading ${item.id} from ${imgUrl}`);
          const ext = imgUrl.endsWith('.png') ? 'png' : 'svg';
          const dest = path.join(outDir, `${item.id}.${ext}`);
          await sleep(1500);
          await download(imgUrl, dest);
          console.log(`Saved ${dest}`);
        } else {
          console.log(`No imageinfo on en.wikipedia for ${item.title}`);
        }
      }
    } catch (e) {
      console.log(`Error for ${item.id}:`, e.message);
    }
  }
  console.log('Finished downloading Wikipedia batch.');
}

run();

