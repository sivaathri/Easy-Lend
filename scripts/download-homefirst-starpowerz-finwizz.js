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
  const items = [
    {
      id: 'homefirst-finance',
      url: 'https://homefirst-website-prod-mum.s3.ap-south-1.amazonaws.com/assets/images/homefirst_logo.svg',
      fallback: 'https://homefirst-website-prod-mum.s3.ap-south-1.amazonaws.com/assets/images/homefirst_white.svg',
      dest: path.join(outDir, 'homefirst-finance.svg')
    },
    {
      id: 'starpowerz',
      url: 'https://cdn.brandfetch.io/idozjuDIQg/w/2544/h/1250/idoHbFDV51.jpeg',
      dest: path.join(outDir, 'starpowerz.png')
    },
    {
      id: 'finwizz',
      url: 'https://d1h53oncnz25tl.cloudfront.net/company/logo/lin_FINWIZZ_FINANCIAL_SERVICES_PVT_LTD_1746798740_4xSwhRxnGK.jpeg',
      dest: path.join(outDir, 'finwizz.png')
    }
  ];

  for (const item of items) {
    try {
      console.log(`Downloading ${item.id}...`);
      await download(item.url, item.dest);
      console.log(`Saved ${item.dest}`);
    } catch (e) {
      console.log(`Error for ${item.id}:`, e.message);
      if (item.fallback) {
        try {
          console.log(`Trying fallback for ${item.id}...`);
          await download(item.fallback, item.dest);
          console.log(`Saved fallback for ${item.dest}`);
        } catch (e2) {
          console.log(`Fallback failed:`, e2.message);
        }
      }
    }
  }
}

run();

