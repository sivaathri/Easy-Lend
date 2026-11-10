import https from 'https';

function fetchJson(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => {
        try { resolve(JSON.parse(data)); } catch (e) { reject(e); }
      });
    }).on('error', reject);
  });
}

async function run() {
  try {
    const data = await fetchJson('https://api.brandfetch.io/v2/brands/icicilombard.com');
    console.log('Logos:', JSON.stringify(data.logos, null, 2));
  } catch (e) {
    console.log('Error:', e.message);
  }
}

run();

