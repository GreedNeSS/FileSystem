'use strict';

const fs = require('fs');

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
console.log(`Data length: ${data.length}`);
console.log(data);
const lines = data.split('\r\n').filter(line => !!line);
console.log(lines);
