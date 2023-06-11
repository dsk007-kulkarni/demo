const fs = require('fs');

const first= fs.readFileSync('./content/first.txt','utf8');
console.log(first);

fs.writeFileSync();