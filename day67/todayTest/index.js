let AA = document.getElementById("Btn1");
let BB = document.getElementById("Btn2");
let CC = document.getElementById("Btn3");
let DD = document.getElementById("Btn4");
let daap = document.getElementById("answer");
let restart = document.getElementById("re");

// onchange

let temp = [];

AA.addEventListener("click", () => {
  let AAA = document.getElementById("input1");
  let tempAAA = AAA.value;
  temp.push(tempAAA);
  console.log("AAA", temp);
  return;
});
BB.addEventListener("click", () => {
  let BBB = document.getElementById("input2");
  let tempBBB = BBB.value;
  temp.push(tempBBB);
  console.log("AAA", temp);

  return;
});

CC.addEventListener("click", () => {
  let CCC = document.getElementById("input3");
  let tempCCC = CCC.value;
  temp.push(tempCCC);

  console.log("CCC", temp);

  const goodCalc = (no1, no2, clac) => {
    let temp = [];
    temp.push(parseInt(no1));
    temp.push(parseInt(no2));
    temp.push(clac);

    switch (temp[2]) {
      case "+":
        console.log("+", temp[0] + temp[1]);
        // daap.innerText = temp[0] + temp[1];
        return temp[0] + temp[1];

      case "-":
        console.log("-", temp[0] - temp[1]);
        // daap.innerText = temp[0] - temp[1];
        return temp[0] - temp[1];

      case "*":
        console.log("*", temp[0] * temp[1]);
        // daap.innerText = temp[0] * temp[1];
        return temp[0] * temp[1];

      case "/":
        console.log("/", temp[0] / temp[1]);
        // daap.innerText = temp[0] / temp[1];
        return temp[0] / temp[1];
      default:
        return;
    }
  };
  goodCalc(temp[0], temp[1], temp[2]);
  console.log(goodCalc(temp[0], temp[1], temp[2]));

  daap.value = temp = goodCalc(temp[0], temp[1], temp[2]);
});

console.log(temp);

restart.addEventListener("click", () => {
  let AAA = document.getElementById("input1");
  let BBB = document.getElementById("input2");
  let CCC = document.getElementById("input3");
  daap.value = "";
  AAA.value = null;
  BBB.value = null;
  CCC.value = null;
  temp = [];
});

// const goodCalc = (no1, no2, clac) => {
//     let temp = [];
//     temp.push(no1);
//     temp.push(no2);
//     temp.push(clac);

//     switch (temp[2]) {
//       case "+":
//         console.log(temp[2]);
//         console.log("+", temp[0] + temp[1]);
//         return temp[0] + temp[1];

//       case "-":
//         console.log("-", temp[0] - temp[1]);

//         return temp[0] - temp[1];

//       case "*":
//         console.log("*", temp[0] * temp[1]);
//         return temp[0] * temp[1];

//       case "/":
//         console.log("/", temp[0] / temp[1]);
//         return temp[0] / temp[1];
//       default:
//         return;
//     }
//   };
