const { rcedit } = require('rcedit');
const path = require('path');

const exePath = path.join(__dirname, '..', 'dist', 'win-unpacked', 'Kraken MP3.exe');
const iconPath = path.join(__dirname, '..', 'assets', 'icons', 'icon.ico');

console.log('Applying icon to:', exePath);
console.log('Using icon:', iconPath);

rcedit(exePath, { icon: iconPath })
  .then(() => {
    console.log('Icon applied successfully!');
  })
  .catch(err => {
    console.error('Error applying icon:', err);
    process.exit(1);
  });
