import https from 'https';

https.get('https://www.aadifidelissolutions.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const matches = d.match(/https:\/\/[^"']*(?:logo|AADI)[^"']*\.(?:png|jpg|svg|webp)/gi);
    console.log('Aadifidelis logos found:', matches);
  });
}).on('error', e => console.log('Error:', e.message));

