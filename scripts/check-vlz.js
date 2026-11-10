import https from 'https';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets/partners');

const candidates = [
  { id: 'icicilombard', path: 'logos/icicilombard/icicilombard-ar21.svg' },
  { id: 'starhealth', path: 'logos/starhealth/starhealth-ar21.svg' },
  { id: 'tataaia', path: 'logos/tataaia/tataaia-ar21.svg' },
  { id: 'tataaig', path: 'logos/tataaig/tataaig-ar21.svg' },
  { id: 'bajajfinserv', path: 'logos/bajajfinserv/bajajfinserv-ar21.svg' },
  { id: 'adityabirla', path: 'logos/adityabirla/adityabirla-ar21.svg' }
];

function check(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.statusCode);
    }).on('error', () => resolve(500));
  });
}

async function run() {
  for (const c of candidates) {
    const url = `https://www.vectorlogo.zone/${c.path}`;
    const code = await check(url);
    console.log(`${c.id}: ${code} from ${url}`);
  }
}

run();

