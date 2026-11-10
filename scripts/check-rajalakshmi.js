import https from 'https';
import fs from 'fs';

https.get('https://rajalakshmyassociates.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('HTML Length:', d.length);
    const matches = d.match(/<img[^>]+src=["']([^"']+)["']/gi);
    console.log('Found images:', matches ? matches.slice(0, 10) : 'none');
  });
}).on('error', e => console.log('Error:', e.message));

