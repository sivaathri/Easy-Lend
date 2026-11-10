import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const partnersDir = path.resolve('public/assets/partners');
if (!fs.existsSync(partnersDir)) {
  fs.mkdirSync(partnersDir, { recursive: true });
}

const partners = [
  // Banking
  { id: 'sbi', name: 'State Bank of India', wiki: 'File:State_Bank_of_India.svg', domain: 'sbi.co.in' },
  { id: 'axis-bank', name: 'Axis Bank', wiki: 'File:Axis_Bank_logo.svg', domain: 'axisbank.com' },
  { id: 'hdfc-bank', name: 'HDFC Bank', wiki: 'File:HDFC_Bank_Logo.svg', domain: 'hdfcbank.com' },
  { id: 'icici-bank', name: 'ICICI Bank', wiki: 'File:ICICI_Bank_Logo.svg', domain: 'icicibank.com' },
  { id: 'kotak-bank', name: 'Kotak Mahindra Bank', wiki: 'File:Kotak_Mahindra_Group_logo.svg', domain: 'kotak.com' },
  { id: 'indian-bank', name: 'Indian Bank', wiki: 'File:Indian_Bank_logo.svg', domain: 'indianbank.in' },
  { id: 'esaf-bank', name: 'ESAF Small Finance Bank', wiki: 'File:ESAF_Bank_Logo.svg', domain: 'esafbank.com' },
  { id: 'indusind-bank', name: 'IndusInd Bank', wiki: 'File:IndusInd_Bank_SVG_Logo.svg', domain: 'indusind.com' },
  { id: 'dcb-bank', name: 'DCB Bank', wiki: 'File:Development_Credit_Bank.svg', domain: 'dcbbank.com' },
  { id: 'bandhan-bank', name: 'Bandhan Bank', wiki: 'File:Bandhan_Bank_Svg_Logo.svg', domain: 'bandhanbank.com' },

  // NBFC
  { id: 'icici-home-finance', name: 'ICICI Home Finance', domain: 'icicihfc.com' },
  { id: 'aditya-birla-capital', name: 'Aditya Birla Capital', wiki: 'File:Aditya_Birla_Capital_logo.svg', domain: 'adityabirlacapital.com' },
  { id: 'aditya-birla-housing', name: 'Aditya Birla Housing Finance', domain: 'housingfinance.adityabirlacapital.com' },
  { id: 'homefirst-finance', name: 'Home First Finance', domain: 'homefirstindia.com' },
  { id: 'bajaj-finance', name: 'Bajaj Finance', wiki: 'File:Bajaj_Finserv_Logo.svg', domain: 'bajajfinserv.in' },
  { id: 'veritas-finance', name: 'Veritas Finance', domain: 'veritasfin.in' },
  { id: 'aadhar-housing', name: 'Aadhar Housing Finance', domain: 'aadharhousing.com' },

  // Insurance
  { id: 'tata-aia', name: 'TATA AIA Life Insurance', domain: 'tataaia.com' },
  { id: 'tata-aig', name: 'TATA AIG General Insurance', wiki: 'File:Tata_AIG_logo.svg', domain: 'tataaig.com' },
  { id: 'star-health', name: 'Star Health Insurance', wiki: 'File:Star_Health_and_Allied_Insurance_logo.svg', domain: 'starhealth.in' },
  { id: 'icici-lombard', name: 'ICICI Lombard', wiki: 'File:ICICI_Lombard_Logo.svg', domain: 'icicilombard.com' },
  { id: 'hdfc-ergo', name: 'HDFC ERGO', wiki: 'File:HDFC_ERGO_General_Insurance_Company.svg', domain: 'hdfcergo.com' },
  { id: 'aditya-birla-sunlife', name: 'Aditya Birla Sun Life Insurance', wiki: 'File:Aditya_Birla_Sun_Life_Insurance_logo.svg', domain: 'lifeinsurance.adityabirlacapital.com' },
  { id: 'aditya-birla-health', name: 'Aditya Birla Health Insurance', domain: 'adityabirlahealth.com' },
  { id: 'kotak-life', name: 'Kotak Life Insurance', domain: 'kotaklife.com' },
  { id: 'bajaj-allianz', name: 'Bajaj Allianz General Insurance', wiki: 'File:Bajaj_Allianz_General_Insurance_Logo.svg', domain: 'bajajallianz.com' },
  { id: 'irdai-auth', name: 'IRDAI', domain: 'irdai.gov.in' },

  // DSA
  { id: 'rajalakshmi', name: 'Rajalakshmi Associates', domain: 'rajalakshmyassociates.com' },
  { id: 'capital-grow', name: 'Capital Grow', domain: 'capitalgrothfinance.com' },
  { id: 'finwizz', name: 'Finwizz', domain: 'finwizz.in' },
  { id: 'andromeda', name: 'Andromeda', domain: 'andromedaloans.com' },
  { id: 'ruloans', name: 'RU Loans', domain: 'ruloans.com' },
  { id: 'aadifidelis', name: 'Aadifidelis', domain: 'aadifidelissolutions.com' },
  { id: 'starpowerz', name: 'Starpowerz', domain: 'starpowerz.com' }
];

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        return fetchUrl(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        return reject(new Error(`HTTP ${res.statusCode}`));
      }
      const chunks = [];
      res.on('data', c => chunks.push(c));
      res.on('end', () => resolve(Buffer.concat(chunks)));
    }).on('error', reject);
  });
}

async function getWikimediaImageUrl(fileTitle) {
  if (!fileTitle) return null;
  const urls = [
    `https://commons.wikimedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json`,
    `https://en.wikipedia.org/w/api.php?action=query&titles=${encodeURIComponent(fileTitle)}&prop=imageinfo&iiprop=url&format=json`
  ];
  for (const apiUrl of urls) {
    try {
      const data = await fetchUrl(apiUrl);
      const json = JSON.parse(data.toString());
      const pages = json.query.pages;
      for (let p in pages) {
        if (pages[p].imageinfo && pages[p].imageinfo[0]) {
          return pages[p].imageinfo[0].url;
        }
      }
    } catch (e) {
      // ignore
    }
  }
  return null;
}

async function main() {
  console.log(`Starting logo downloads for ${partners.length} partners...`);
  const results = {};

  for (const p of partners) {
    const ext = p.wiki ? 'svg' : 'png';
    const filePath = path.join(partnersDir, `${p.id}.${ext}`);

    let downloaded = false;

    // 1. Try Wikimedia if title provided
    if (p.wiki) {
      const wikiUrl = await getWikimediaImageUrl(p.wiki);
      if (wikiUrl) {
        console.log(`[Wikimedia] Fetching ${p.name} from ${wikiUrl}...`);
        try {
          const buf = await fetchUrl(wikiUrl);
          if (buf.length > 200) {
            fs.writeFileSync(filePath, buf);
            results[p.id] = { status: 'success', source: 'wikimedia', file: `${p.id}.${ext}` };
            downloaded = true;
          }
        } catch (e) {
          console.log(`Wikimedia fetch failed for ${p.id}: ${e.message}`);
        }
      }
    }

    // 2. Try Clearbit / Google if not downloaded
    if (!downloaded && p.domain) {
      const fallbackUrls = [
        `https://logo.clearbit.com/${p.domain}`,
        `https://www.google.com/s2/favicons?domain=${p.domain}&sz=256`
      ];

      for (const fbUrl of fallbackUrls) {
        try {
          console.log(`[Fallback] Fetching ${p.name} from ${fbUrl}...`);
          const buf = await fetchUrl(fbUrl);
          if (buf.length > 500) { // real image
            const pngPath = path.join(partnersDir, `${p.id}.png`);
            fs.writeFileSync(pngPath, buf);
            results[p.id] = { status: 'success', source: fbUrl, file: `${p.id}.png` };
            downloaded = true;
            break;
          }
        } catch (e) {
          // ignore
        }
      }
    }

    if (!downloaded) {
      results[p.id] = { status: 'failed' };
      console.log(`[FAILED] Could not auto-download ${p.name}`);
    } else {
      console.log(`[DONE] ${p.name} saved!`);
    }
  }

  fs.writeFileSync(path.join(partnersDir, 'manifest.json'), JSON.stringify(results, null, 2));
  console.log('All downloads processed!');
}

main().catch(console.error);

