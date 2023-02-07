// function solution(str, n1, n2) {
//   let temp = [...str];
//   let tempStr = "";

//   for (let i = 0; i < temp.length; i++) {
//     if (i === str[n1]) {
//       tempStr += temp[n2];
//       console.log("temp[1]", temp[n2]);
//     } else if (i === str[n2]) {
//       tempStr = temp[n1];
//       console.log("temp[2]", temp[n1]);
//     } else {
//       tempStr += temp[i];
//       console.log("temp[else]", temp[i]);
//     }
//   }
//   console.log("str", tempStr);

//    let tempNo1 = "";
//    let tempNo2 = "";
//    temp.filter((item, index) => (index == n1 ? (tempNo1 += item) : ""));
//    temp.filter((item, index) => (index == n2 ? (tempNo2 += item) : ""));

//    let temptemp = "";
//    let temptempArr = [];
//    for (let i = 0; i < temp.length; i++) {
//      if (temp[i] == tempNo1) {
//        temptemp += tempNo2;

//        temptempArr.push(temptemp);
//      } else if (temp[i] == tempNo2) {
//        temptemp = tempNo1;
//        temptempArr.push(temptemp);
//      }
//      temptemp = "";
//    }

//    if(i === num1){
//      answer += my_string[num2]
//  }else if(i === num2){
//      answer += my_string[num1]
//  }else{
//      answer += my_string[i]
//  }

//   return;
// }
// solution("hello", 1, 2);

function solution1(str, num1, num2) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (i == num1) {
      answer += str[num2];
    } else if (i == num2) {
      answer += str[num1];
    } else {
      answer += str[i];
    }
  }
  console.log("a", answer);
  return answer;
}
solution1("hello", 1, 2);
