// function solution(str) {
//   let temp = [...str];
//   let imsi = [];
//   temp.filter((item) => (+item + 1 ? imsi.push(item) : []));
//   console.log("temp:", temp);
//   console.log("imsi:", imsi);
//   imsi.sort((a, b) => a - b);
//   console.log("imsi:", imsi);
//   return;
// }
// solution("abcde0");

// 1. 숫자와 문자를 나눔 + , - , * , / 를 써서 문자를 제거함
// 2. 나온 숫자를 sort(a,b)=>(a-b) 로 정렬

// function solution(box, n) {
//   let temp = parseInt(box[0] / n) * parseInt(box[1] / n) * parseInt(box[2] / n);
//   console.log(box[0] / n);
//   console.log(temp);
//   return temp;
// }
// solution([10, 8, 6], 3);
// 1. 들어가야 되는 길이를 (가로,세로,높이)로 나눠서 목을 추려 곱한다.
// function solution(num, dir) {
//   let answer = [];
//   if (dir === "left") {
//     for (let i = 0; i < num.length; i++) {
//       if (i != 0) {
//         let tempNum = num[i];
//         answer.push(tempNum);

//         console.log("tempNum:", tempNum);

//         // tempNum.push(num[0]);
//         // num = num.unshift([num.length - 1]);
//         // console.log("num 1:", num);
//       }
//       //   console.log("num 2:", num);
//     }
//     answer.push(num[0]);
//   } else {
//     for (let i = 0; i < num.length; i++) {
//       if (i != num.length - 1) {
//         let tempNum = num[i];
//         answer.push(tempNum);
//       }
//     }
//     answer.unshift(num[num.length - 1]);
//   }
//   console.log("An:", answer);

//   return;
// }
// solution([1, 2, 3], "right");

// 1. direction 의 글 길이를 기준으로 length < 4 면 index + 1 , 만약 numbers의 길이보다 크면 arr.length -1 을 arr[0] 으로 이동
// 2. direction 의 글 길이를 기준으로 length > 4 면 index - 1 , 만약 numbers의 index가 0보다 작으면 arr.length -1 로 이동
// unshift() ,
// function solution(str, code) {
//   let A = [...str];
//   let tempC = code - 1;
//   let temp = [];
//   const temp1 = A.filter((item, index) => (index + 1) % code == 0);
//   console.log("temp", temp);
//   console.log("temp1 : ", temp1);

//   //   return answer;
// }
// solution("pfqallllabwaoclk", 2);
// function solution(str, code) {s
//   let temp = [...str];
//   let temptemp = [];
//   console.log(temp);
//   for (let i = code; i < temp.length; i += code) {
//  answer += temp[i - 1];
//   }
//   temptemp.push(temp[temp.length - 1]);
//   temptemp[0];
//   console.log("tt:", temptemp);

//   answer += temptmep;
//   let answer = "";

//   for (let i = 0; i < temptemp.length; i++) {
//     answer += temptemp[i];
//   }
//   console.log("a:", answer);
//   //   return answer;
// }
// solution("dfjardstddetckdaccccdegk", 4);
