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
function solution(m) {
  let temp = [...m];
  let MO = ["a", "e", "i", "o", "u"];
  let An = [];
  // for(let i=0;i<temp.length;i++){
  //   if()
  // }

  console.log("a".includes(MO.map((item) => item)));
  temp.filter((item) => (MO.includes(item) ? [] : An.push(item)));

  console.log("AN", An.join(""));
  return An.join("");
}
solution("nice to meet you");
