const csv = require('csv-parser');
const fs = require('fs');

const input = 'input_countries.csv';
const canadaFile = 'canada.txt';
const usaFile = 'usa.txt';

//Delete existing files
if (fs.existsSync(canadaFile)) {
  fs.unlinkSync(canadaFile);
  console.log(`Deleted existing ${canadaFile}`);
}

if (fs.existsSync(usaFile)) {
  fs.unlinkSync(usaFile);
  console.log(`Deleted existing ${usaFile}`);
}
fs.appendFileSync(canadaFile, 'country,year,population\n');
fs.appendFileSync(usaFile, 'country,year,population\n');

//Async
fs.createReadStream(input)
  .pipe(csv({
    headers: ['country', 'year', 'population'],
    skipLines: 0,
  }))
  .on('data', (row) => {
    const { country, year, population } = row;
    
    if (country.toLowerCase() === 'canada') {
      // Append Canada data to canada.txt
      const canadaData = `${country},${year},${population}\n`;
      fs.appendFileSync(canadaFile, canadaData);
    }

    if (country.toLowerCase() === 'united states') {
      // Append USA data to usa.txt
      const usaData = `${country},${year},${population}\n`;
      fs.appendFileSync(usaFile, usaData);
    }
  })
  .on('end', () => {
    console.log('CSV file processed successfully.');
  })
  .on('error', (err) => {
    console.error('Error reading the file:', err);
  });

