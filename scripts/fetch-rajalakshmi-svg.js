import https from 'https';
import fs from 'fs';

https.get('https://rajalakshmyassociates.com/favicon.svg', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log('Favicon SVG:', d.slice(0, 300));
    fs.writeFileSync('F:/Easy-Lend/public/assets/partners/rajalakshmi.svg', d);
    console.log('Saved rajalakshmi.svg');
  });
});

