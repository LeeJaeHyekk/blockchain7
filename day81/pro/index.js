// const readline = require("readline");
// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// const { count } = require("console");

// let input = [];

// rl.on("line", function (line) {
//   input = line.split(" ");
// }).on("close", function () {
//   console.log(Number(input[0]));
// });

// function solution(num) {
//   let answer = [];
//   let count = "";

//   for (let i = 0; i < num; i += 1) {
//     answer.push((count += "*"));
//     console.log(typeof answer[i - 1]);
//   }
//   console.log(answer);
//   console.log(typeof answer[0]);
//   console.log(answer.join("\n"));
//   console.log(answer);

//   return;
// }
// solution(3);

// 1. 매개변수 만큼 "문자별"의 i개 만큼을 배열에 추가하는 함수를 만듬
// 2. \n으로 세로 정렬을 해야함
// function fore() {
// for (let i = 0; i < umber.length; i++) {
// 동기(sync) 방식이기 때문에 for문 안에서 오류가 나면 에러위치 이후의 이벤트들은 동작하지 않고 멈춰버린다.
//
// }
// }

// function forEachs() {
//   // 가변적인 배열이나 리스트 크기를 구할 필요가없어 복잡한 반복문에 적합하며, 인덱스를 생성하여 접근하는 for문보다 수행속도가 더 빠르다.
//   //   (item) => item;
// }

// let map = { j1: 10, j2: 20, j3: 30 };
// for (let key in map) {
//   console.log(key, map[key]);
// }

const array = [1, 2, 3, 4, 5];
array.forEach((element) => {
  console.log(element);
});
array.map((element) => {
  return element + 10;
});

function for1() {}
for1(array);

function map() {}
map(array);
