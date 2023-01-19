// function solution(D) {
//   let answer = [];
//   let Real = 0;
//   D.map((item) => answer.push(item >= 0));

//   if (answer[0] == true && answer[1] == true) {
//     Real = 1;
//   } else if (answer[0] == false && answer[1] == true) {
//     Real = 2;
//   } else if (answer[0] == true && answer[1] == false) {
//     Real = 4;
//   } else if (answer[0] == false && answer[1] == false) {
//     Real = 3;
//   }

//   console.log("aa", Real);

//   return Real;
// }
// solution([2, -4]);
// -------------------------------------------
// function solution(n) {
//   let count1 = 0;
//   let count2 = 0;
//   let an = [count1, count2];
//   n.map((item) => (item % 2 ? count1++ : count2++));
//   console.log("1", count1);
//   console.log("2", count2);
//   console.log(an);
//   //   return answer;
// }
// solution([1, 3, 5, 7]);
// --------------------------------------------
// function solution(s, n) {
//   let count = 0;
//   if (n % s == 0) {
//     count = parseInt(n / s);
//   } else {
//     count = parseInt(n / s) + 1;
//   }
//   console.log("a", count);
//   return;
// }
// solution(4, 12);

// ---------------------------------------------
// function solution(m) {
//   let A = [];
//   A.push(parseInt(m / 5500));
//   A.push(m - 5500 * parseInt(m / 5500));
//   console.log("a", A);
//   //   return answer;
// }
// solution(15000);
// function solution(s) {
//   s.sort((a, b) => a - b);
//   if (s[0] + s[1] <= s[2]) {
//     console.log("1", s[0] + s[1] <= s[2]);
//     return (answer = 2);
//   } else {
//     console.log("2", s[0] + s[1] > s[2]);
//     return (answer = 1);
//   }
// }
// solution([199, 72, 222]);

// ---------------------------------------//
// function solution(numbers) {
//   let answer = 0;
//   numbers.sort(function (a, b) {
//     if (a > b) return -1;
//     else if (b > a) return 1;
//     else return 0;
//     console.log(numbers);
//   });
//   return numbers;
// }
// solution([1, 2, 3, 4, 5]);
// ---------------------------------------//
// function solution(n) {
//   n.sort((a, b) => b - a);
//   let A = n[0] * n[1];
//   console.log("dap", A);
//   //   return answer;
// }
// solution([1, 2, 3, 4, 5]);
// ---------------------------------------//
// function solution(n) {
//   let A = [];
//   let tempA = A;
//   let real = [];
//   for (let i = 1; i < n + 1; i++) {
//     A.push(i);
//   }
//   tempA.filter((item) => (item % 2 == 0 ? [] : real.push(item)));

//   console.log("t", real);
//   console.log("A", A);
//   //   return answer;
// }
// solution(10);
// -------------------------------------------//
// function solution(str, n) {
//   let temp = [...str];
//   let temptemp = [];
//   for (let i = 0;
//     i < temp.length; i++) {
//     temptemp.push();
//     for (let j = 0; j < n; j++) {
//       temptemp.push(temp[i]);
//     }
//   }
//   //   temp.map((item) => temptemp.push(item * n));
//   console.log("a", temp);
//   console.log("A", temptemp);
//   return answer;
// }
// solution("hello", 3);
// -------------------------------------------//
// function solution(m, l) {
//   let A = [...m];
//   let B = [];
//   let C = [];
//   A.map((item) => (item == l ? B.push(item) : []));
//   A.filter((item) => (item != B[0] ? C.push(item) : []));

//   console.log("A", A);
//   console.log("B", B);
//   console.log("C", C);

//   return;

//   // (answer += my_string.replace(letter, ""));
//   // replace 와 정규표현식
// }
// solution("abcdef", "f");
// --------------------------------------------//
// function solution(array) {
//     let result = [...array]
//     result.getMedian(array)
//     console.log( getMedian(array))
//     return answer;
// }
//
// function solution(array) {
//   array.sort((a, b) => a - b);
//   let A = parseInt(array.length / 2);
//   console.log("A", array[A]);
//   console.log("a", A);
//   return array[A];
// }
// solution([9, -1, 0]);
//---------------------------- //
// function solution(n) {
//   let A = [];
//   for (let i = 0; i < n; i++) {
//     if (n % i == 0) {
//       A.push(i);
//     }
//   }

//   console.log("a", A.length + 1);

//   return;
// }
// solution(20);
// function solution(s1, s2) {
//   let A = s1.filter((item) => s2.includes(item));

//   return A.length;
// }
// solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
// ---------------------------------------------------------//
// function solution(str1, str2) {
//   let B = str2.length;
//   let C = [...str1];
//   let A = C.slice();

//   //   let B = A.filter((item) => B.include(item));
//   console.log("A", A);
//   return;
// }
// solution("ab6CDE443fgh22iJKlmn1o", "6CD");

// function solution(n) {
//   let AA = Math.sqrt(n);

//   if (AA % 1 == 0) {
//     return 1;
//   } else {
//     return 2;
//   }
// }
// solution(144);
// function solution(str1, str2) {
//   let answer = 0;
//   if (str1.includes(str2)) {
//     console.log("a0", answer);
//     answer = 1;
//   } else {
//     console.log("ax", answer);

//     answer = 2;
//   }
//   console.log("a", answer);
// }
// solution("ppprrrogrammers", "pppp");
function solution(n) {
  let J = n % 5;
  let M = J % 3;
  let T = M % 1;
  let A = J + M + T;
  console.log("j", J);
  console.log("m", M);
  console.log("t", T);

  console.log("a", A);

  return answer;
}
solution(23);
