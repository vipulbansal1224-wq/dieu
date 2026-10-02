const fs = require('fs');
const html = fs.readFileSync('research_page.html', 'utf8');

const regex = /<h[1-6][^>]*>(.*?)<\/h[1-6]>/gi;
let m;
while((m = regex.exec(html))) {
  console.log(m[1].replace(/<[^>]+>/g, '').trim());
}
