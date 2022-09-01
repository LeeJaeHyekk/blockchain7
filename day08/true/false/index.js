console.log(Math.random());

const comSel = parseInt(Math.random() * 99 + 1);
console.log(comSel);
// 컴퓨터 선택 완료
let playerSel;
let count = 0;
let max = 100;
let min = 0;
let updown = "";
const maxCount = parseInt(prompt(`몇번만에 맞출래? 숫자로만`));
do {
  playerSel = prompt(`${updown}\n
    "숫자를 선택해 주세요. 컴퓨터가 선택한 숫자를 맞추시면 됩니다.\n최소 :${min} / 최대 : ${max}/ 남은 횟수 : ${
    maxCount - count
  } `);

  //   카운트를 플레이어가 입력했을 때 하나씩 증가 시킨다.
  // prompt 는 string,parseint 정수형으로 바꿔줌으로 number
  playerSel = parseInt(playerSel);
  if (min >= playerSel || max <= playerSel) {
    console.log("제외된 숫자들 이다.");
    // 최소와 최대 사이에 값만 확인하기 위해 최소 미만과 최대 초과를 먼저 처리한다.
  } else if (playerSel === comSel) {
    count = count + 1;
    console.log(`${count}번 만에 맞추셨네요, 축하 합니다.`);
    break;
  } else if (playerSel > comSel) {
    // 플레이가 선택한 숫자가 컴퓨터가 선택한 숫자보다 크다.
    max = playerSel;
    // max가 현재 플레이어가 선택한 숫자가 된다
    console.log("DOWN!");
    updown = "down";
    count++;
    // 정상적인 숫자를 입력했을때만 카운트를 늘리도록 up, down일때 카운트를 추가한다.
  } else if (playerSel < comSel) {
    min = playerSel;
    console.log("UP!");
    updown = "up";
    count++;
  } else {
    console.log("숫자만 ! 입력해라");
    updown = "숫자만 입력해주세요";
  }
} while (playerSel !== comSel && count < 10);
if (count >= maxCount) {
  console.log(`제한 횟수를 초과 했습니다.`);
}
// 컴퓨터가 숫자 선택후 플레이어가 선택하는 것은 계속 반복되야 한다.
// 언제까지? 플레이어가 컴퓨터의 숫자를 맞출떄 까지
