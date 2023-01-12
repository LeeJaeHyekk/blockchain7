// function solution(arr, divisor) {
//   let temptemp = arr.filter((item) => item % divisor == 0);
//   temptemp.sort((a, b) => a - b);
//   if (!temptemp.length) {
//     temptemp.push(-1);
//   }

//   console.log(temptemp);

//   return temptemp;
// }
// solution([5, 9, 7, 10], 5);

function solution(num) {
  let temptemp = [...num];
  //  ["", "", "" ,""," "]
  let arrLength = temptemp.length;
  // 초기값의 길이를 저장하고
  let answer = "";
  // 정답이 될 저장소를 선언하고
  for (let i = 0; i < arrLength - 4; i++) {
    // 전체 길이의 4자리 전까지 반복
    temptemp.shift();
    // 원본에 앞자리를 제거
    // [4,4,4,4]
  }
  for (let j = 0; j < arrLength - 4; j++) {
    //  전체 길이의 4자리전 까지 반복
    temptemp.unshift("*");
    //  [4,4,4,4]에 앞으로 추가
  }
  answer = temptemp.join("");
  // [******4444]를 배열에서 빼냄
  console.log("a", typeof answer);

  return answer;
}
solution("01033334444");
