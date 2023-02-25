// function solution(x, n) {
//   let temp = [];
//   for (let i = 0; i < n; i++) {
//     let temptemp = temp.push(x + i);
//     console.log(temptemp + temptemp);
//   }
//   console.log(temptemp);
//   return temp;
// }
// solution(2, 5);
// function solution(s) {
//   let tempA = [...s];
//   let temptemp = "p";
//   let temptemp2 = "y";
//   let countP = 0;
//   let countY = 0;
//   let realStr = true;
//   for (let i = 0; i < s.length; i++) {
//     let str = tempA[i].toLowerCase();

//     if (str == temptemp) {
//       countP++;
//     } else if (str == temptemp2) {
//       countY++;
//     }
//   }
//   if (countP == countY) {
//     console.log(realStr);
//     realStr = true;
//   } else {
//     console.log(realStr);
//     realStr = false;
//   }

//   return realStr;
// }
// solution("pPoooyY");

// p || y 비교해서 갯수 같으면 true 다르면 false 로 리턴
//  p || y 둘다 없으면 true

let array = [];
let group = { a: 10, b: 20 };
for (let i = 0; i < 3; i++) {
  array.push(group);
}
// console.log(array);

const send = (array) => {
  // let  { array }
  //              {a:10 , b:20 }
  // console.log(let {123123} = { array });
};
send();
