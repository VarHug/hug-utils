const fs = require('fs');

const rootDir = 'src';

const res = fs
  .readdirSync(rootDir, {
    withFileTypes: true
  })
  .filter((d) => {
    return d.isDirectory();
  });

console.table(res);
