import https from 'https';
import http from 'http';
import fs from 'fs';
import path from 'path';

const url = 'https://capitalgrow.co.in';

function fetchPage(targetUrl) {
  return new Promise((resolve, reject) => {
    const client = targetUrl.startsWith('https') ? https : http;
    client.get(targetUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
        let loc = res.headers.location;
        if (loc.startsWith('/')) {
          const u = new URL(targetUrl);
          loc = u.origin + loc;
        }
        return fetchPage(loc).then(resolve).catch(reject);
      }
      let data = '';
      res.on('data', c => data += c);
      res.on('end', () => resolve({ data, finalUrl: targetUrl }));
    }).on('error', reject);
  });
}

async function run() {
  try {
    console.log(`Fetching ${url}...`);
    const { data: html, finalUrl } = await fetchPage(url);
    console.log('HTML Length:', html.length);
    // Find all images or logo matches
    const imgMatches = html.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/gi);
    console.log('Images found:', imgMatches ? imgMatches.slice(0, 15) : 'none');

    // Also look specifically for logo keywords in src or alt or class
    const logoMatches = html.match(/src=["']([^"']*(?:logo|brand)[^"']*)["']/gi);
    console.log('Logo matches:', logoMatches);
  } catch (e) {
    console.log('Error:', e.message);
  }
}

run();

