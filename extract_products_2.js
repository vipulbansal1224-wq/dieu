const fs = require('fs');
const html = fs.readFileSync('research_page.html', 'utf8');

const products = [];

// Split by product sections roughly. Let's look for images first.
const imgMatches = [...html.matchAll(/<img[^>]+src="([^"]+wp-content\/uploads[^"]+)"[^>]*>/gi)];
for (const match of imgMatches) {
  const imgSrc = match[1];
  const idx = match.index;
  // Look ahead for the next heading
  const chunk = html.substring(idx, idx + 2000);
  const headingMatch = chunk.match(/<h[1-6][^>]*>(.*?)<\/h[1-6]>/i);
  if (headingMatch) {
    let title = headingMatch[1].replace(/<[^>]+>/g, '').trim();
    if (title && title.length < 80 && !title.includes('Products') && !title.includes('Ensure') && !title.includes('Latest Blog') && !title.includes('Get In Touch')) {
       products.push({ name: title, image: imgSrc });
    }
  }
}

// Remove duplicates
const unique = [];
const seen = new Set();
for (let p of products) {
  if (!seen.has(p.name)) {
    seen.add(p.name);
    unique.push(p);
  }
}
console.log(JSON.stringify(unique, null, 2));
