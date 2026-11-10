import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/assets/partners');

const files = [
  { id: 'indusind-bank', title: 'File:IndusInd_Bank_SVG_Logo.svg' },
  { id: 'bandhan-bank', title: 'File:Bandhan_Bank_Svg_Logo.svg' },
  { id: 'tata-aig', title: 'File:Tata_AIG_logo.svg' },
  { id: 'star-health', title: 'File:Star_Health_and_Allied_Insurance_logo.svg' },
  { id: 'icici-lombard', title: 'File:ICICI_Lombard_Logo.svg' },
  { id: 'hdfc-ergo', title: 'File:HDFC_ERGO_General_Insurance_Company.svg' },
  { id: 'bajaj-allianz', title: 'File:Bajaj_Allianz_General_Insurance_Logo.svg' },
  { id: 'aditya-birla-capital', title: 'File:Aditya_Birla_Capital_logo.svg' },
  { id: 'dcb-bank', title: 'File:Development_Credit_Bank.svg' },
  { id: 'esaf-bank', title: 'File:ESAF_Bank_Logo.svg' }
];

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
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
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
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
    const apiUrl = `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(item.title)}&prop=imageinfo&iiprop=url&format=json`;
    try {
      const json = await fetchJson(apiUrl);
      const pages = json.query.pages;
      for (const p in pages) {
        if (pages[p].imageinfo && pages[p].imageinfo[0]) {
          const imgUrl = pages[p].imageinfo[0].url;
          console.log(`Downloading ${item.id} from ${imgUrl}`);
          const dest = path.join(outDir, `${item.id}.svg`);
          await download(imgUrl, dest);
          console.log(`Saved ${dest}`);
        }
      }
    } catch (e) {
      console.log(`Error for ${item.id}:`, e.message);
    }
  }
}

run();

