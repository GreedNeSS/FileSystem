'use strict';

const fs = require('fs');

const path = './1-readFileSync.js';

const load = path => {
	fs.readFile(path, (err, data) => {
		if (err) throw err;
		console.log('\x1Bc');
		console.log(`Data length: ${data.length}`);
		console.log(data.toString());
	});
};

const watch = path => {
	fs.watch(path, () => {
		load(path);
	});
};

load(path);
watch(path);
