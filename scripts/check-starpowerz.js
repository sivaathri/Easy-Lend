import https from 'https';

https.get('https://starpowerzdigiloans.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const matches = d.match(/<img[^>]+src=["']([^"']+)["']/gi);
    console.log('Starpowerz images:', matches ? matches.slice(0, 5) : 'none');
  });
}).on('error', e => console.log('Error:', e.message));

