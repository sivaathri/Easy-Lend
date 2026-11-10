import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const outDir = path.resolve('public/assets/partners');

const targets = [
  { id: 'tata-aia', domain: 'www.tataaia.com' },
  { id: 'tata-aig', domain: 'www.tataaig.com' },
  { id: 'star-health', domain: 'www.starhealth.in' },
  { id: 'icici-lombard', domain: 'www.icicilombard.com' },
  { id: 'kotak-life', domain: 'www.kotaklife.com' },
  { id: 'bajaj-allianz', domain: 'www.bajajallianz.com' },
  { id: 'aditya-birla-capital', domain: 'www.adityabirlacapital.com' },
  { id: 'homefirst-finance', domain: 'homefirstindia.com' },
  { id: 'veritas-finance', domain: 'veritasfin.in' },
  { id: 'aadhar-housing', domain: 'aadharhousing.com' },
  { id: 'icici-home-finance', domain: 'www.icicihfc.com' },
  { id: 'andromeda', domain: 'www.andromedaloans.com' },
  { id: 'ruloans', domain: 'www.ruloans.com' },
  { id: 'aadifidelis', domain: 'www.aadifidelissolutions.com' }
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = url.split('/').slice(0, 3).join('/') + loc;
        return fetchHtml(loc).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = url.split('/').slice(0, 3).join('/') + loc;
        return download(loc, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) return reject(new Error(`HTTP ${res.statusCode}`));
      const stream = fs.createWriteStream(dest);
      res.pipe(stream);
      stream.on('finish', () => { stream.close(); resolve(); });
    }).on('error', reject);
  });
}

async function run() {
  for (const t of targets) {
    try {
      console.log(`Checking https://${t.domain}...`);
      const html = await fetchHtml(`https://${t.domain}`);
      // Find logo image tag
      const match = html.match(/<img[^>]+(?:logo|brand)[^>]+src=["']([^"']+)["']/i) ||
                    html.match(/src=["']([^"']+(?:logo|brand)[^"']*\.(?:png|svg|webp))["']/i);
      if (match && match[1]) {
        let logoUrl = match[1];
        if (logoUrl.startsWith('//')) logoUrl = 'https:' + logoUrl;
        else if (logoUrl.startsWith('/')) logoUrl = `https://${t.domain}${logoUrl}`;
        else if (!logoUrl.startsWith('http')) logoUrl = `https://${t.domain}/${logoUrl}`;
        
        console.log(`Found logo for ${t.id}: ${logoUrl}`);
        const ext = logoUrl.includes('.svg') ? 'svg' : 'png';
        const dest = path.join(outDir, `${t.id}.${ext}`);
        await download(logoUrl, dest);
        console.log(`Saved ${dest}`);
      } else {
        console.log(`No logo img match found for ${t.id}`);
      }
    } catch (e) {
      console.log(`Failed for ${t.id}:`, e.message);
    }
  }
}

run();

