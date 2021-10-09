'use strict';

const fs = require('fs');

const files = ['1-readFileSync.js', 'n-untitled.js', '3-async.js'];

const stats = new Array(files.length);

let rest = files.length;

const printResult = () => {
	console.dir({ stats });
};

const addToStats = (file, i, err, stat) => {
	if (err) console.log(`File ${file} not found`);
	else stats[i] = stat;
	if (--rest) return;
	printResult();
};

const iterate = (file, i) => {
	console.dir({ file, i });
	const cb = addToStats.bind(null, file, i);
	fs.lstat(file, cb);
};

files.forEach(iterate);
