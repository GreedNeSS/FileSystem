'use strict';

const fs = require('fs');

const data = fs.readFileSync('1-readFileSync.js', 'utf8');
const lines = data.split('\r\n').filter(line => !!line);
console.log({ data, lines });
fs.writeFileSync('1-readFileSync.txt', lines.join('\n'));
