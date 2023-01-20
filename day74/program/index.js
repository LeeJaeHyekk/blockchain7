// function solution(num1, dm1, num2, dm2) {
//   let ja1 = num1;
//   let ja2 = num2;
//   let mo1 = dm1;
//   let mo2 = dm2;
//   // let tempBig1 = ja1 * mo2;
//   // let tempBig2 = ja2 * mo1;

//   let boonsuJa = ja1 * mo2 + ja2 * mo1;
//   let boonsuMo = mo1 * mo2;

//   let bigSu = Math.max(boonsuJa, boonsuMo);
//   let minSu = Math.min(boonsuJa, boonsuMo);

//   let tempAnswer = "";
//   let temptempBig = 0;
//   let temptempmin = 0;

//   for (let i = 1; i <= minSu; i++) {
//     if (boonsuJa % i == 0 && boonsuMo % i == 0) {
//       temptempBig = bigSu;
//       temptempmin = minSu;
//       tempAnswer = i;
//     }
//   }
//   return [boonsuJa/tempAnswer,boonsuMo/tempAnswer]
//   console.log("t", tempAnswer);
//   console.log("b", temptempBig);
//   console.log("m", temptempmin);

//   // let Min = (mo1 * mo2) / Big;

//   // return answer;
// }
// solution(1, 2, 3, 4);
// function solution(str) {
//   let temp = [...str];
//   let temptemptemp = [];
//   let A = 0;
//   temp.map((item) => (+item !== NaN ? temptemptemp.push(+item) : []));
//   console.log("ttt", temptemptemp);
//   temptemptemp.forEach((item) => {
//     item / 1 == item ? (A += item) : (A += 0);
//   });
//   console.log("t", temp);
//   console.log("a", A);
//   console.log("ttt", temptemptemp);

//   // return answer;
// }
// solution("aAb1B2cC34oOp");
// function solution(m) {
//   let temp = [...m];
//   let MO = ["a", "e", "i", "o", "u"];
//   let An = [];
//   // for(let i=0;i<temp.length;i++){
//   //   if()
//   // }

//   console.log("a".includes(MO.map((item) => item)));
//   temp.filter((item) => (MO.includes(item) ? [] : An.push(item)));

//   console.log("AN", An.join(""));
//   return An.join("");
// }
// solution("nice to meet you");
// function solution(A) {
//   let arr = [];
//   let R = A.toString().split("");

// console.log(R);
// for (let i = 0; i < A.toString().length; i++) {
//   let temp = A;
//   arr.push(temp % 10);
//   console.log("a", arr);
// }
// let AA = A;
// do {
//   arr.push(A % 10);
// } while (AA / 10 > 0);
// console.log("a", arr);
// console.log(A % 10);

// return;
// }
// solution(29423);
// function solution(num) {
//   let temp = [];
//   let count = 0;
//   let A = num.toString().length;

//   for (let i = 0; i < A; i++) {
//     temp.push(num % 10);
//     num = parseInt(num / 10);
//   }

//   temp.map((item) =>
//     item === 3 || item === 6 || item === 9 ? (count += 1) : (count += 0)
//   );

//   console.log("t", temp);
//   console.log("c:", count);

//   return answer;
//   //   var answer = 0;
//   //   return answer;
// }
// solution(29423);
// function solution(a, b, n) {
//   //   let n = parseInt(n / 2);
//   //   for (let i = 0; i < n; i++) {
//   //     a = b % 2;
//   //     b = a / 2;
//   //     console.log("a", a);
//   //     console.log("b", b);
//   // let temp = n / 2;
//   // let tempN = n;
//   //   return answer;
//   while (n > 2) {
//     console.log("befor n :", n);
//     n= 3a
//     n = parseInt(a % 2);

//     console.log("after n :", n);
//   }
// }
// solution(2, 1, 20);
function solution(a, b, n) {
    let tempM = n/a;
    let tempNA = n % a;
    if(tempNA %2 ==0){
        return tempM+tempNA+1
    }else{
        return tempM+1
    }
  }

}
solution(2, 1, 20);
