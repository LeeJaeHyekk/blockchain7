// function solution(str, c) {
//   let temp = [...str];
//   let temptemp = [];
//   let tempNum = c - 1;
//   temp.map((item, index) =>
//     index.length % tempNum == 0 || index[0] !== 0 ? temptemp.push(item) : []
//   );
//   for (let i = 0; i < str.length; i++) {
//     let arr = temp.slice(0, c);
//     console.log(arr);
//     temptemp.push(arr[c - 1]);
//     console.log("c", c);
//   }
// console.log(temptemp);
//   console.log(temp);
//   console.log("type", typeof c);
//   console.log(temptemp);
//   return;
// }
// solution("pfqallllabwaoclk", 2);
// function solution(str, num) {
//   let temp = [];
//   let tempStr = str.split("");

//   tempStr.filter((item, index) =>
//     item == index[num - 1] ? temp.push(item) : []
//   );

//   console.log(str.split(""));
//   console.log("temp", temp);
//   //   return answer;
// }
// solution("dfjardstddetckdaccccdegk", 4);

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// let input = [];

// rl.on("line", function (line) {
//   input = line.split(" ");
// }).on("close", function () {
//   console.log(Number(input[0]));
// });
// function solution(box, n) {
//   let temp = (box[0] * box[1]) / 3 / n;

//   return temp*n;
// }
// solution([10, 8, 6], 3);
// function solution(arr) {
//   let temp = [];
//   temp.push(arr.reduce((a, b) => Math.max(a, b)));
//   temp.push(arr.reduce((a, b) => Math.min(a, b)));
//   //   arr.indexof(temp[0]);
//   console.log("temp", temp);
//   console.log("arrIndex", arr.indexof(temp[0]));
//   //   arr.find((item) => item == temp[0]?));
//   //   return temp;
// }
// solution([1, 8, 3]);
// function solution(arr) {
//   //   let answer = temp;
//   let temptemp = [];
//   let value = -1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > arr[i - 1]) {
//       temptemp.push(arr[i]);
//     } else {
//       temptemp.push(arr[i]);
//     }
//   }
//   console.log("tt", temptemp);
//   for (let i = 0; i < temptemp.length; i++) {
//     let tempNum = 0;
//     console.log("tempi", temptemp[i + 1]);
//     if (tempNum[i] < temptemp[i + 1]) {
//       console.log("비교 true", tempNum < temptemp[i]);

//       tempNum += temptemp[i + 1];
//     } else {
//       console.log("비교 flase", tempNum > temptemp[i]);
//       tempNum;
//     }
//     console.log("tempNum", tempNum);
//   }
//   return;
// }
// solution([9, 10, 11, 8]);
function solution(arr) {
  let temp = [...arr];
  let answer = [];
  temp = temp.sort((a, b) => a - b);
  answer.push(temp[temp.length - 1]);
  for (let i = 0; i < arr.length; i++) {
    console.log("temp", temp[temp.length - 1]);
    if (temp[temp.length - 1] == arr[i]) {
      console.log("i", i);
      answer.push(i);
    }
  }
  console.log(answer);

  return answer;
}
solution([9, 10, 11, 8]);
