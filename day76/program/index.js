// 23.01.22

// 세균
/// function solution(n, t) {
//   for (let i = 1; i < t + 1; i++) {
//     n *= 2;
//   }
//   console.log("A", n);
// }
// solution(2, 10);
// 배열
// function solution(n, list) {
//   let arr = [];
//   list.filter((item) => (item % n == 0 ? arr.push(item) : []));
//   console.log("arr", arr);
//   //   return answer;
// }
// solution(3, [4, 5, 6, 7, 8, 9, 10, 11, 12]);
// 문자 배열
// function solution(str) {
//   let temp = [...str];
//   let temptemp = [];
//   temp.map((item) =>
//     item === item.toUpperCase()
//       ? temptemp.push(item.toLowerCase())
//       : temptemp.push(item.toUpperCase())
//   );
//   console.log(temp);
//   console.log(temptemp);

//   //   return answer;
// }
// solution("cccCCC");
// function solution(n) {
//   let a = n.split("");
//   let temp = [];

//   for (let i = 0; i < a.join("").length; i++) {
//     if (a[i] == "2") {
//       temp.push("0");
//     } else if (a[i] == "0") {
//       temp.push("5");
//     } else {
//       temp.push("2");
//     }
//   }
//   console.log(temp);

//   //   console.log(temp);
//   //   return answer;
// }
// solution("205");
