const fs = require('fs');

fetch('https://dieusterimed.com')
  .then(r => r.text())
  .then(t => {
    const imgs = [...t.matchAll(/<img[^>]+src="([^"]+)"/g)].map(m => m[1]);
    const bgs = [...t.matchAll(/background-image:\s*url\((['"]?)(.*?)\1\)/g)].map(m => m[2]);
    console.log('IMGS:', JSON.stringify(imgs, null, 2));
    console.log('BGS:', JSON.stringify(bgs, null, 2));
  });
