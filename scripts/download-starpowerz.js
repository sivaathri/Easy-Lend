import fs from 'fs';
import path from 'path';
import https from 'https';

const url = 'https://starpowerzdigiloans.com/assets/imgs/logo/digiloans_logo.png';
const dest = path.resolve('public/assets/partners/starpowerz.png');

https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, res => {
  if (res.statusCode === 200) {
    const stream = fs.createWriteStream(dest);
    res.pipe(stream);
    stream.on('finish', () => { stream.close(); console.log('Saved starpowerz.png'); });
  } else {
    console.log('Failed:', res.statusCode);
  }
});

