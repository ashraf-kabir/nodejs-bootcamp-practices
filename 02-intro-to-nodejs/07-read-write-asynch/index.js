const fs = require('fs');

fs.readFile('./text/auyrujkhajdh.txt', 'utf-8', (err, data1) => {
    if (err) return console.log('ERROR!');

    fs.readFile('./text/input.txt', 'utf-8', (err, data1) => {
        fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
            console.log(data2);
            fs.readFile('./text/append.txt', 'utf-8', (err, data3) => {
                console.log(data3);

                fs.writeFile('./text/final.txt', `${data2}\n${data3}`, 'utf-8', err => {
                    console.log('Your file has been written.');
                });
            });
        });
    });
});
console.log('Will read file...');

// asynchronus, non-blocking