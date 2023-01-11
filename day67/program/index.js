// function solution(n) {
//   let nums = [];

//   do {
//     nums.push(n % 10);
//     n = Math.floor(n / 10);
//   } while (n > 0);

//   let temp = nums.sort(function (a, b) {
//     return b - a;
//   });
//   let answer = temp.join("");
//   console.log(answer);
//   console.log(typeof +answer);

//   //   let temp = parseInt(n);
//   //   //   let temp = n.toString().split("");
//   //   console.log(temp);
//   //   console.log(n);
//   //   temp.map((item) => parseInt(item));
//   //   console.log("1", typeof temp);
//   // .sort(function (a, b) {
//   //   console.log(temp);
//   //   return b - a;
//   // });
// }
// solution(118372);
function solution(a, b) {
  let answer = [];

  for (let i = a; i <= b; i += 1) {
    let daap = a + (a + 1);
    answer.push(daap);
    console.log(answer);
  }
}
solution(3, 5);
