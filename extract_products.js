const fs = require('fs');
const html = fs.readFileSync('research_page.html', 'utf8');

// removed
// If cheerio is not available, let's use regex carefully.
// Let's just use regex since cheerio failed last time.

// The structure usually has an image followed by a heading (or vice versa).
// Let's find all headings with their nearest previous or next image.
const elements = html.match(/<(img|h[1-6])[^>]*>/gi);
let products = [];
let lastImg = null;

const textMap = new Map();
const allHeadings = [...html.matchAll(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi)];

for (const m of allHeadings) {
  const fullTag = m[0];
  const innerText = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  if (innerText.length > 2 && innerText.length < 100) {
    // Find image preceding this heading
    const index = m.index;
    const preHtml = html.substring(Math.max(0, index - 2000), index);
    const imgMatches = [...preHtml.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
    if (imgMatches.length > 0) {
      const imgUrl = imgMatches[imgMatches.length - 1][1];
      if (imgUrl.includes('wp-content/uploads')) {
        products.push({ name: innerText, image: imgUrl });
      }
    }
  }
}

// Remove duplicates
const unique = [];
const seen = new Set();
for (let p of products) {
  if (!seen.has(p.name) && p.name !== 'Products' && p.name !== 'Contact') {
    seen.add(p.name);
    unique.push(p);
  }
}

console.log(JSON.stringify(unique, null, 2));
