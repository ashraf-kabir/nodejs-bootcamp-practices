const fs = require('fs');

fs.readFile('./text/input.txt', 'utf-8', (err, data1) => {
  if (err) {
    return console.log('ERROR!');
  }

  fs.readFile('./text/input.txt', 'utf-8', (err, data1) => {
    // readfile->input.txt->it has text which will be used for reading file
    fs.readFile(`./text/${data1}.txt`, 'utf-8', (err, data2) => {
      // that file has text
      console.log(data2);
      fs.readFile('./text/append.txt', 'utf-8', (err, data3) => {
        console.log(data3);
        // append with prev text
        fs.writeFile(
          './text/final.txt',
          `${data2}\n${data3}`,
          'utf-8',
          (err) => {
            console.log('Your file has been written.');
          }
        );
      });
    });
  });
});
console.log('Will read file...');

// asynchronus, non-blocking
