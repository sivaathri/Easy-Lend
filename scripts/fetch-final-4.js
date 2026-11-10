import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const outDir = path.resolve('public/assets/partners');

const targets = [
  { id: 'homefirst-finance', url: 'https://homefirstindia.com' },
  { id: 'finwizz', url: 'https://finwizz.in' },
  { id: 'starpowerz', url: 'https://starpowerz.com' },
  { id: 'rajalakshmi', url: 'https://rajalakshmyassociates.com' }
];

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) loc = url.split('/').slice(0, 3).join('/') + loc;
        return fetchHtml(loc).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ data, finalUrl: url }));
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
      console.log(`Checking ${t.url}...`);
      const { data: html, finalUrl } = await fetchHtml(t.url);
      const match = html.match(/src=["']([^"']*(?:logo|brand)[^"']*\.(?:png|svg|webp|jpg))["']/i) ||
                    html.match(/<img[^>]+src=["']([^"']+\.(?:png|svg|webp|jpg))["'][^>]*class=["'][^"']*logo/i);
      if (match && match[1]) {
        let logoUrl = match[1];
        if (logoUrl.startsWith('//')) logoUrl = 'https:' + logoUrl;
        else if (logoUrl.startsWith('/')) logoUrl = finalUrl.split('/').slice(0, 3).join('/') + logoUrl;
        else if (!logoUrl.startsWith('http')) logoUrl = `${finalUrl}/${logoUrl}`;
        
        console.log(`Found for ${t.id}: ${logoUrl}`);
        const ext = logoUrl.includes('.svg') ? 'svg' : 'png';
        await download(logoUrl, path.join(outDir, `${t.id}.${ext}`));
        console.log(`Saved ${t.id}.${ext}`);
      } else {
        console.log(`No direct regex match for ${t.id}`);
      }
    } catch (e) {
      console.log(`Error for ${t.id}:`, e.message);
    }
  }
}

run();

