// function solution(age) {
//   let tempAge = age.toString();
//   let answer = [];
//   for (let i = 0; i < tempAge.length; i++) {
//     if (tempAge[i] == "0") {
//       answer.push("a");
//     } else if (tempAge[i] == "1") {
//       answer.push("b");
//     } else if (tempAge[i] == "2") {
//       answer.push("c");
//     } else if (tempAge[i] == "3") {
//       answer.push("d");
//     } else if (tempAge[i] == "4") {
//       answer.push("e");
//     } else if (tempAge[i] == "5") {
//       answer.push("f");
//     } else if (tempAge[i] == "6") {
//       answer.push("g");
//     } else if (tempAge[i] == "7") {
//       answer.push("h");
//     } else if (tempAge[i] == "8") {
//       answer.push("i");
//     } else if (tempAge[i] == "9") {
//       answer.push("j");
//     }
//   }

//   let tempAnswer = answer.join("");
//   console.log("answer:", tempAnswer);
//   return answer.join("");
// }
// console.log(solution(23));

function dap(arr) {
  let tempArr = arr.sort((a, b) => a - b);
  //   let tempLastArr = tempArr[tempArr.length-1]
  let answer =
    tempArr[0] * tempArr[1] >
    tempArr[tempArr.length - 2] * tempArr[tempArr.length - 1]
      ? tempArr[0] * tempArr[1]
      : tempArr[tempArr.length - 2] * tempArr[tempArr.length - 1];
  console.log("anw", answer);
  return answer;
}

dap([1, 2, -3, 4, -5]);
