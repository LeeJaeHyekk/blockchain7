// -y(초기값)
const fs = require(`fs`);
const fsProm = fs.promises;
fsProm
  .readFile(`./text.txt`)
  .then((data) => {
    console.log(data);
    console.log(data.toString());
  })
  .catch((err) => {
    console.log(err);
  });
