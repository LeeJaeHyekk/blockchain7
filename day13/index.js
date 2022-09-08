let cards = []; // (내)카드의 배열을 만든다.

for (let i = 0; i < 8; i++) {
  cards.push(i + 1);
  cards.push(i + 1);
}
//(내)2개의 동일한 카드를 8쌍을 만든다.

cards = shuffle(cards, 100);
// 카드를 섞어주는 함수 (자체 제작)

// (내) 첫번째 카드를 temp에 넣고, 두번째 의 값과 첫번째 카드와 같은 값을 동일하게 만든다 , 첫번째 카드와 temp 의 값을 동일하게 만드는 방법을 count만큼 반복시킨다.
//  temp => 1번 값 적용 / 2번 값 => 1번자리 적용 / 2번자리 => temp 1번 적용 /
//           1 , 1 ,2       1 , 2  ,2                1,2,1
console.log(cards);

//-------------------------------------------------(09월08일)---------------------------------------------------------------------------

let firstCardIdx = -1;
let secondCardIdx = -1;
// (내)-1의 이유 첫째 자리가 0부터인데 , 선택의 유무판단을 위해 -1을 대입
// (내) 첫번째 카드와 두번째 카드에 클릭  유무확인

function selectNum(cardNum) {
  // (내) 함수는 마우스로 카드클릭을 인식하는 함수
  const tempElem = document.getElementById("card" + cardNum);
  //   검색결과: Document.getElementByid()는 메서드는 주어진 문자열과 일치하는 id속성을 가진 요소를 찾고,이를 나타내는 Element 객체를 반환합니다.
  //   (내) 'card+cardNum'에  객체를 tempElem에 넣어눴는다. cardNum = 셔플에서 카드를 100번 섞어 나온 자리값

  const firstElem = document.getElementById("card" + firstCardIdx);
  //   첫번째 선택된 카드의 태그가 정의됨
  //(내) firstElem 은 (card,-1) 이 들어간다.

  const secondElem = document.getElementById("card" + secondCardIdx);
  // 매개변수로 받은 cardNum는 id의 'card' 뒤에 붙은 숫자와 동일하게 되어있으며 cardNum와 'card'을 붙여서 id를 찾아옵니다.
  //(내) secondElem 은 (card, -1) 이 들어간다.
  if (tempElem.innerHTML) return;
  // (내) 1번,2번 카드가 아닌 temp가 html(card)에 입력되면 실행을 취소해라. 목적:  카드 초기화
  if (firstCardIdx > -1 && secondCardIdx > -1) {
    // 카드 2장으로 모두 모두선택했는가?
    // (내) 만약 첫번째 카드와 두번째 카드가 둘다 클릭이 안되있다면
    if (cards[firstCardIdx] != cards[secondCardIdx]) {
      // 카드가 두장이 다른가?
      // (내) 첫번째 선택한 카드에 지정된 배열수와 두번째 선택한 카드의 지정된 배열수가 같지 않으면
      firstElem.innerHTML = "";
      secondElem.innerHTML = "";
      //   카드를 다시 뒤집는다.
      // (내) 뒤집어져 있는 카드 초기의 안보이는 상태로
    }
    firstCardIdx = -1;
    secondCardIdx = -1;
    // 선택한 카드들에 대한 위치 정보를 없앤다.
    // (내) 카드의 값을 안보이게 처음으로 초기화 한다.
  }

  if (!firstCardIdx < 0) {
    // 첫번째 카드를 선택하지 않았는가?
    // (내)첫번째 카드가 클릭되었다면
    firstCardIdx = cardNum;
    // 첫번째 카드의 index(cards 기준)를 정의한다.
    // (내)카드 번호를 넣어주고
    tempElem.innerHTML = cards[cardNum];
    // (내)html에 카드 번호를 넣는다.
  } else if (secondCardIdx < 0) {
    // 두번째 카드를 선택하지 않았는가?
    secondCardIdx = cardNum;
    tempElem.innerHTML = cards[cardNum];
    console.log("카드가 일치합니다.");
  } else if (cards[firstCardIdx] != cards[secondCardIdx]) {
    firstElem.innerHTML = "";
    secondElem.innerHTML = "";
  }
  firstCardIdx = -1;
  secondCardIdx = -1;

  tempElem.innerHTML = cards[cardNum];
  //   찾은 클릭 당한 태그에 내용으로 cards(랜덤으로 배치한 카드들) 중에 (cardNum-1)번쨰 (컴퓨터는 숫자를 0부터 시작하기 떄문)를 찾아 출력하도록 한다.
}
