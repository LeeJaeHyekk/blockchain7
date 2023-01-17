// function solution(arr) {
//   let answer = [...arr];
//   let temp = arr.sort((a, b) => b - a).pop();
//   let newAnswer = answer.filter((item) => item !== temp);
//   console.log(newAnswer);
//   if (newAnswer[0] == null) {
//     newanswer.push(-1);
//   }

//   return newAnswer;
// }

// solution([10]);
// function solution(absolutes, signs) {
//   let temp = signs.map((item) => item.replace("false", "-"));
//   let temptemp = temp.map

//   console.log("temp : ", temp);
//   console.log("temptemp : ", temptemp);
// }
// solution([4, 7, 12], [true, false, true]);
//   let tempNum = absolutes;
//   let tempsigns = signs.join("");
//   let realsign = [];
//   for (let i = 0; i < tempsigns.length; i++) {
//     if (
//       tempsigns.slice(i, i + 1)
//       // .map((item) => item == "true")
//     ) {
//       realsign.push(
//         tempsigns
//         // .join("").replace("true", "+")
//       );
//       console.log("+ : ", realsign);
//     } else if (tempsigns.slice(i, i + 1).map((item) => item == "false")) {
//       realsign.push(tempsigns.join("").replace("false", "-"));
//     }
//   }
//   console.log(tempsigns);
//   return answer;
function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < absolutes.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer -= absolutes[i]);
  }
  console.log(answer);

  //   absolutes.map((item, index) =>
  //     signs[index] ? (answer += item) : (answer -= item)
  //   );
  //   console.log(answer);

  //   return;
}
solution([1, 2, 3], [false, false, true]);
