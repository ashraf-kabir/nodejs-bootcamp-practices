const fs = require('fs');

const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
// read text from ./text/input.txt
console.log(textIn);

const textOut = `Writing text: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./text/output.txt', textOut);
// write text to ./text/output.txt
console.log('File written');

// synchronus, blocking