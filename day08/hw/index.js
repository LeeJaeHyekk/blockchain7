let count = 0;
let firstNum = 0;
let secondNum = 0;

const fN = function () {
  firstNum++;
  //   firstNum 을 하나 증가시킨다.
  console.log("firstNum :" + firstNum);
  //   firstNum 을 콘솔창에 띄운다.
  // `${count++}`);
};
const sN = function () {
  secondNum++;
  // secondNum 을 하나 증가시킨다.
  console.log("secondNum :" + secondNum);

  //   console.log(`${count++}`);
};
const rS = function () {
  console.log(firstNum + secondNum);
  return;

  //   console.log(`${fN}+${sN}=`);
};

// function examAdd(firstNum) {
//   // let firstNum;
//   // 매개변수는 위에 변수와 다른 변수가 된다.
//   // 1번중에서 선언한 firstNum와 매개변수로 선언된 firstnum와 염연히 다른 놈이다.
//   console.log(firstNum);
//   firstNum++;
//   firstNum += 1;
//   firstNum = firstNum + 1;
//   console, log(firstNum);
// }
// examAddFN(firstNum);

// rS(fN, sN) {

//     return firstNum + secondNum;
// }

// function rS(num) {
//     switch (num) {
//       case 1:

//         return "+";
//         //   요 아래의 console.log는 출력되지 않는다.
//         // 이유는 함수는 return이 정해지는 순간 끝난다.
//         break;
//       case 2:

//         return "-";
//         break;
//       case 3:

//         return "*";
//         break;
//       case 4:

//         return "%";
//         break;
//       default:
//         return false;
//     }while(){}
