const fs = require('fs');
fetch('https://dieusterimed.com')
  .then(res => res.text())
  .then(text => {
    const regex = /https:\/\/dieusterimed\.com\/wp-content\/uploads\/[^"'\s]+?\.(?:jpg|jpeg|png)/gi;
    const matches = [...text.matchAll(regex)].map(m => m[0]);
    console.log(JSON.stringify([...new Set(matches)], null, 2));
  });
