import fs from 'fs';
import path from 'path';
import https from 'https';

const logoUrl = 'https://capitalgrow.co.in/assets/logo-DAyGa61T.png';
const dest = path.resolve('public/assets/partners/capital-grow.png');

https.get(logoUrl, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, res => {
  if (res.statusCode === 200) {
    const stream = fs.createWriteStream(dest);
    res.pipe(stream);
    stream.on('finish', () => {
      stream.close();
      const stats = fs.statSync(dest);
      console.log(`Saved capital-grow.png (${stats.size} bytes) from ${logoUrl}`);
    });
  } else {
    console.log(`Failed to download: HTTP ${res.statusCode}`);
  }
}).on('error', e => console.log('Error:', e.message));

