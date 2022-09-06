let comsel = [];
// 컴퓨터의 선택에 대한 배열정의
let count = 0;
// 시도한 횟수
const comSet = new Set();
// 배열은 배열인데 내부에서 중복을 처리하는 배열(배열이랑은 다르다.)
// 사용할떄는 new Set() 를 변수에 정의하여 변수를 사용한다.(let asd=[])
// clear(),add(),size

function reset() {
  comSel = [];
  comSet.clear();
  count = 0;
  // 컴퓨터 선택을 초기화이다.
  document.getElementById("player-sel").innerHTML = "<th>Player Select</th>";
  document.getElementById("count").innerHTML = "<th>Count</th>";
  document.getElementById("strike").innerHTML = "<th>Strike</th>";
  document.getElementById("ball").innerHTML = "<th>Ball</th>";
  document.getElementById("out").innerHTML = "<th>Out</th>";

  while (comSet.size < 3) {
    // set은 중복처리를 알아서
    comSet.add(parseInt(Math.random() * 10));
    //comset에 0-9 까지 랜덤수를 추가
    // 만약 중복되는 수라면 알아서 중복이 안되게 처리해줌
  }
  // console.log(comSet);
  comsel = [...comSet];
  // ... 은 스프레드라고 한다.
  // 배열,객체 등 연속되는 데이터들을 하나하나 분해해서 출력해 준다.
  // [...comset]은 comset의 아이템 하나하나를 분해해서 배열내에 넣어준다. if(comset.size==3) [comset[0],comset[1],comset[2]]와 같은 말이다.

  console.log(comSel);
  alert("컴퓨터는 준비가 끝났습니다.");
}

function selectNum() {
  if (!comsel.length) return;
  //   컴퓨터가 준비되지 않은 상태에서(숫자가 선택되지 않음) 게임을 진행하지 않도록 함수 멈춤
  let playerSel = "";
  let strike = 0;
  let ball = 0;

  //   html 찾아서 입력받을수 있도록 미리 정의해 두자.
  const playerSelTr = document.getElementById("player-sel");
  const countTr = document.getElementById("count");
  const strikeTr = document.getElementById("strike");
  const ballTr = document.getElementById("ball");
  const outTr = document.getElementById("out");
  // id를 기준으로 엘리먼트 검색해서 변수에 정의

  while (playerSel.length !== 3) {
    playerSel = prompt(`3자리 수를 입력해라`);
    if (!playerSel) return alert("포기한거냐?");
    const tempLength = playerSel.length;
    //  현재 입력된 숫자의 개수를 정의함
    playerSel = [...new Set(playerSel.split(""))]
      // 플레이어가 입력한 수를 배열로 변환후에 set에 세팅하여 중복을 없앤다.
      .map((item) => parseInt(item))
      // 중복을 없앤 플레이어의 수를 배열로 변환후 map을 이용해 정수로 변환시킨다.
      .join("");
    // 정수의 배열을 join 매서드를 이용해 하나의 문자열로 변환시킨다.
    if (playerSel.length != tempLength || playerSel.indexOf(`NaN`) > -1)
      playerSel = "";
    //   playersel의 길이가 이전(tempLength)과 다르면 중복된 숫자가 있었던것이다. 떄문에 playerSel을 빈값으로 정의한다.
    // playerSel에 NaN이  있으면 중간에 숫자가 아닌 문자가 있기 떄문에 마찬가지로 playerSel을 빈값으로 정의한다.
  }
  strike = ball = 0; // strike 와 ball을 0으로 정의한다.
  comsel.forEach((item, index) => {
    // for Each의 매개변수함수(배열/문자열의 아이템, 인덱스(순서) => {내용})
    if (item == playerSel[index]) strike++;
    // 아이템과 playerSel의 index 번째 아이템이 같은가? 같으면 stroke++
    else if (playerSel.includes(item)) ball++;
    // 아이템이 playerSel에 포함되면 ball
  });

  playerSelTr.innerHTML += "<td>" + playerSel + "</td>";
  countTr.innerHTML += "<td>" + ++count + "</td>";
  strikeTr.innerHTML += "<td>" + strike + "</td>";
  ballTr.innerHTML += "<td>" + ball + "</td>";
  outTr.innerHTML += "<td>" + (3 - strike - ball) + "</td>";
  //   platerSel = "";<< 굳이 안해도됨
  // 플레이어의 선택에 삭제
  if (strike === 3) {
    alert(`${count}번만에 맞추셨습니다.`);
    comSel = [];
  } else {
    alert(`strike: ${strike}, ball:${ball},out: ${3 - strike - ball}`);
  }
}
