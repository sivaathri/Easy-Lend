import https from 'https';

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

async function run() {
  try {
    const data = await fetchJson('https://www.wikidata.org/wiki/Special:EntityData/Q5972822.json');
    const claims = data.entities.Q5972822.claims;
    console.log('ICICI Lombard logo property P154:', claims.P154 ? claims.P154[0].mainsnak.datavalue.value : 'none');
  } catch (e) {
    console.log('Error:', e.message);
  }
}

run();

