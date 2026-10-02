const fs = require('fs');
const html = fs.readFileSync('research_page.html', 'utf8');

const products = [];

// Split by 'elementor-image-box-wrapper'
const blocks = html.split('elementor-image-box-wrapper');
for (let block of blocks) {
  const imgMatch = block.match(/<img[^>]+src="([^"]+)"/);
  const descMatch = block.match(/class="elementor-image-box-description">([^<]+)<\/p>/);
  
  if (imgMatch && descMatch) {
     let img = imgMatch[1];
     let title = descMatch[1].trim();
     if (title && !title.includes('Ensure Safe')) {
        products.push({ title, image: img });
     }
  }
}

console.log(JSON.stringify(products, null, 2));
