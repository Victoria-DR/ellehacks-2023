const fs = require('fs');

const findL3Code = (l3Region) => {
  const file = fs.readFileSync('../wgsrpdL3.txt');
  const index = file.indexOf(l3Region);
  if (index !== -1) {
    return file.toString().substring(index - 4, index - 1);
  }
};

module.exports = findL3Code;
