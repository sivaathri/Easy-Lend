import https from 'https';

https.get('https://homefirstindia.com', { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  let d = '';
  res.on('data', c => d += c);
  res.on('end', () => {
    const m = d.match(/<header[\s\S]*?<\/header>/i) || d.match(/<nav[\s\S]*?<\/nav>/i);
    console.log('Header:', m ? m[0].slice(0, 500) : 'none');
    const imgs = d.match(/<img[^>]+>/gi);
    console.log('Images found:', imgs ? imgs.slice(0, 8).join('\n') : 'none');
  });
});

