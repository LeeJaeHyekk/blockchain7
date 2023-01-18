function solution(n) {
  //   let temp = [];
  //   let answer = 0;
  //   let realanswer = 0;
  //   for (let i = 0; i < 10; i++) {
  //     temp.push(i);
  //   }
  //   console.log("nnn", n);
  //   console.log("ty", typeof temp);
  //   console.log("it", typeof item);
  //   console.log("anw", typeof answer);
  //   answer += temp.filter((item) => !n.includes(item));
  //   //   answer.map((item) => (realanswer += +item));
  //   //   console.log("t", temp);
  //   console.log("aa", answer);
  //   //   console.log("ra", realanswer);
  //   //   let temptemp = (answer += num.filter((item) => item !== temp));
  //   //   answer += num.map((item) => item !== temp);
  //   //   return answer;
  //   return n.reduce((prev, curr) => prev - curr, 45);
}
// console.log(solution([5, 8, 4, 0, 6, 7, 9]));
// function good(A) {
//   let temp = [];
//   let temptemp = "";
//   let realAnswer = 0;
//   for (let i = 0; i < 10; i++) {
//     temp.push(i);
//   }
//   temptemp = temp.filter((item) => !A.includes(item));
//   temptemp.map((item) => (realAnswer += +item));
//   console.log("temp", temptemp);
//   console.log("rA", realAnswer);
// }
// good([1, 2, 3, 4, 6, 7, 8, 0]);
// function solution(s) {
//   let temp = [...s];
//   let dap = "";
//   console.log("temp", temp);
//   if (temp.length % 2 == 0) {
//     let ttemp = temp.indexOf(Math.floor(temp.length / 2));
//     console.log("tt", ttemp);
//     console.log("t", temp);
//   } else {
//     temp.indexOf;
//   }
//   console.log("dap :", dap);
// }
// solution("abcdef");
// function solution(n, k) {
//   let answer = 0;
//   let survice = Math.floor(n / 10);
//   answer = 12000 * n + 2000 * k - 2000 * survice;

//   console.log(answer);
//   return;
// }
// solution(10, 3);

function solution(n) {
  let takeDown = 7;
  let count = 0;

  if (n % takeDown == 0) {
    count = n / takeDown;
  } else {
    count = n / takeDown + 1;
  }
  console.log(parseInt(count));
  return;
}
solution(15);
