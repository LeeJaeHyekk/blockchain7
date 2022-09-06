let firstNum;
let secondNum;
let clickCount = 0;

function numSel(num) {
  // let num; << 위에 (num)과 같다.
  //   함수 스코프({}) 안에서만 사용된다.
  // 함수 밖에서 선언된 전역변수, 지역변수 등 "이름이 같은 다른 변수"와 다른 변수 이다.
  // 밖에서  NUM=1; 했어도 안에는 UNDIFIND가 뜰 수 있다. << 호출시 ()안이 비어있다.
  //   html 이후 12번  중에서 ()안에 7을 넣음으로써 "num=7"로 정의한다.
  if (clickCount == 0) {
    console.log(clickCount);
    firstNum = num;
    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
    secondNum = num;
  }
  clickCount++;
}
function numSel1() {
  if (clickCount == 0) {
    firstNum = 2;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 2;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel2() {
  if (clickCount == 0) {
    firstNum = 3;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 3;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel3() {
  if (clickCount == 0) {
    firstNum = 4;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 4;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel4() {
  if (clickCount == 0) {
    firstNum = 5;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 5;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel5() {
  if (clickCount == 0) {
    firstNum = 6;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 6;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel6() {
  if (clickCount == 0) {
    firstNum = 7;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 7;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel7() {
  if (clickCount == 0) {
    firstNum = 8;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 8;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel8() {
  if (clickCount == 0) {
    firstNum = 9;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 9;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}
function numSel9() {
  if (clickCount == 0) {
    firstNum = 0;
    console.log(clickCount);

    // 카운트를 증가시키는 (clickCount++)이 위에 있기 떄문에 1이 증가한 상태로 확인을 하게 된다.
  } else if (!clickCount == 1) {
    secondNum = 0;
    // 위와 마찬가지로 2번 클릭하면 카운트가 증가후 확인하기 떄문에 2로 확인한다.
    console.log(clickCount);
  }
  clickCount++;
}

function calculate(order) {
  // order는 위에 num와 마찬가지로 매개 변수
  if (clickCount < 2) return;
  // clickCount가 2 미만일때, 즉 0이거나 1일때 , 다른말로 숫자 클릭을 2번이상 하지 않았을때
  // 즉 숫자가 2개 가 아닐때 return 사용해서 함수를 멈춘다.
  switch (order) {
    case "+":
      alert(firstNum + secondNum);
      break;
    case "-":
      alert(firstNum - secondNum);
      break;
    case "*":
      alert(firstNum * secondNum);
      break;
    case "/":
      alert(firstNum / secondNum);
      break;
  }
}
