// function solution(a, b) {
//   let answer = 0;
//   if (a > b) {
//     console.log("a>b", ((a + b) / 2) * (a - 1));
//     return ((a + b) / 2) * a;
//     //
//   } else if (b < a) {
//     console.log("a<b", ((a + b) / 2) * (b - 1));
//     return (a + b / 2) * b;
//     //
//   } else {
//     console.log("a=b", (a + b) / 2);
//     return (a + b) / 2;
//   }
// }
// solution(3, 5);

// function solution(a, b) {
//   //   let nums = (a, b) => {
//   //     if (a > b) {
//   //       return (nums = b);
//   //     } else if (b < a) {
//   //       return (nums = a);
//   //     } else {
//   //       return (nums = a);
//   //     }
//   //   };
//   let tempDaap = 0;
//   if (a < b) {
//     for (let i = a; i < b + 1; i++) {
//       tempDaap += i;
//       console.log("i", i);
//       console.log(">", tempDaap);
//     }
//   } else if (a == b) {
//     tempDaap = a;
//     console.log(tempDaap);
//   } else if (a > b) {
//     for (let i = b; i < a + 1; i++) {
//       tempDaap += i;
//       console.log("<", tempDaap);
//     }
//   }
//   return tempDaap;
// }
// solution(7, 10);
// function solution(x) {
//   let tempArr = x.toString().split("");
//   console.log("str", tempArr);
//   let temptemp = tempArr.map((item) => parseInt(item));
//   let answer = 0;
//   for (let i = 0; i < temptemp.length; i++) {
//     answer += temptemp[i];
//     console.log("num", answer);
//   }
//   console.log("answer", answer);
//   if (x % answer == 0) {
//     return true;
//   } else {
//     return false;
//   }
// }
// solution(18);

// function solution(seoul) {
//   let daap = seoul.findIndex((item) => item === "Kim");
//   console.log(daap);
//   return;
// }
// solution(["Jane", "Kim"]);
