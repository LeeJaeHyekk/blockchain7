// console.log(__filename);
// 파일 이름을 포함한 경로
// console.log(__dirname);
// 현재 파일 경로
//  위 변수들은 ES6에 없다.
// import fs from "fs";

const fs = require("fs");
// 불러 왔으니까 모듈
const path = require("path");
// 불러왔으면 모듈

// fs.writeFile("./test.txt", "안녕하세요", (data) => {
//   console.log(data);
// });
// 파일을 생성한다.
// console.log(path.dirname(__filename));
//  파일 이름을 포함한 경로
// console.log(path.extname(__filename));
// 현재 파일 경로
// console.log(path.basename(__filename));

// console.log(path.join(__dirname, "..", "..", "day27"));
//  경로를 합친다.
//  fs.readFile("./text.txt", (err, data) => {
//    if (err) console.log(err);
//    console.log(data);
//    console.log(data.toString());
//  });

// const fsprom = fs.promises;
// fsprom
//   .writeFile("./test1.txt", "프로미스~")
//   .then(() => {
//     return fsprom.readFile("./test1.txt");
//   })
//   .then((data) => {
//     console.log(data);
//     console.log(data.toString());
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// fs.writeFileSync("./test2.txt", "싱크 확인");

let data = fs.readFileSync("./test.txt");
console.log(data.toString());
data = fs.readFileSync("./test1.txt");
console.log(data.toString());
data = fs.readFileSync("./test2.txt");
console.log(data.toString());

// fs.createReadStream()
// 알아서 찾아봐라
// json 을 찾아봐라 알아둬야 한다.
// 버퍼 형식의 (영어 숫자 숫자)는 잘 생각해 봐야 한다  (힌트 : 유니코드)

async function readFileSyncFunc(filePath) {
  return await fs.promises.readFile(filePath);
}
console.log(readFileSyncFunc("./test.txt").toString());
