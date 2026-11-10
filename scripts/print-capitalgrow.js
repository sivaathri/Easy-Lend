import https from 'https';

https.get('https://capitalgrow.co.in', { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    console.log(d);
  });
}).on('error', e => console.log('Error:', e.message));

