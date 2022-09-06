while (true) {
  let playerSel = [];
  let tempInput = prompt;

  if (!tempInput) {
    alert("프로그램을 종료합니다.");
    break;
  }
  playerSel.length < 10;

  for (let i = 0; i <= playerSel; i++) {
    if (i % 2 == 0) {
      console.log(i + "이며 :" + i + "는 짝수 입니다.");
    } else if (i % 2 == 1) {
      console.log(i + "이며 : " + i + "는 홀수 입니다");
    }
  }
}
