const fs = require('fs');

const textIn = fs.readFileSync('./text/input.txt', 'utf-8');
console.log(textIn);

const textOut = `Writing text: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./text/output.txt', textOut);
console.log('File written');