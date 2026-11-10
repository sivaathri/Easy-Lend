import fs from 'fs';
import path from 'path';
import https from 'https';

const outDir = path.resolve('public/assets/partners');

function download(url, dest) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
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
  const urls = [
    { id: 'tata-aig', url: 'https://www.tataaig.com/s3/Tata_AIG_Logo_Sept_2026_630c66ccd7.png' }
  ];

  for (const u of urls) {
    try {
      console.log(`Downloading ${u.id}...`);
      await download(u.url, path.join(outDir, `${u.id}.png`));
      console.log(`Saved ${u.id}.png`);
    } catch (e) {
      console.log(`Error ${u.id}:`, e.message);
    }
  }
}

run();

