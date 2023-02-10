// function solution(n) {
//   let count = 0;
//   for (let i = 0; i < n; i++) {
//     let num = i;
//     console.log("num:", num);
//     if (6 % num === 0) {
//       count += 1;
//     } else {
//       count += 1;
//       console.log("counting:", count);

//       num = (num % 6) + 6;
//     }
//   }
//   console.log("count:", count);
//   return;
// }
// solution(10);
// 0. count를 올린다.
// 1. n값을 6으로 나눈다.
// 2. 나머지가 있다면 6을 더한다
// 3. 위 0~2 번을 나머지가 없을때 까지 반복하고, 카운트를 리턴한다.
// function solution(num) {
//   let tempNumA = 6;
//   let tempNumB = num;
//   let answer = 1;
//   for (let i = 1; i < Math.max(tempNumA, tempNumB); i++) {
//     if (tempNumA % i === 0 && tempNumB % i === 0) {
//       answer = i;
//       console.log("a:");
//     }
//     console.log("i:", i);
//     console.log("answer:", answer);
//   }
//   return num / answer;
// }

// solution(10);

// function solution(n) {
//   let answer = [];
//   //   for (let i = 0; i < n + 1; i++) {
//   //     if (n % i == 0) {
//   //       answer.push(i);
//   //     }
//   //   }
//   //   console.log(answer);
//   let a = 1;
//   while (n % a) {
//     a++;
//   }
//   console.log("a", a);
//   return;
// }
// solution(24);
// function solution(n, k) {
//   let temp = [...n.toString()];
//   let tempK = k.toString();
//   let answer = temp.findIndex((item) => item == tempK);
//   let real = 0;
//   if (answer > 0) {
//     let real = +answer + 1;
//   } else {
//     real = -1;
//   }

//   console.log("answer:", real);
// }
// solution(123456, 7);
