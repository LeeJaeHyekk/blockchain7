const root = document.getElementById("root");
// id가 root인 엘리먼트를 가져온다. 그리고 root 변수에 초기화 한다.

// root.onload
// onload라는 메서드는 로드가 되었는가? 되었을때 실행된다. 즉 dom 생성됐을떄

root.onwheel = (e) => {
  // 마우스 휠에 대한 매서드
  console.log(e.target);
};

document.getElementById("name").onchange = (e) => {
  console.log(e.target.value);
  //   e.target은 해당 매서드가 어디서 실행됬는지,포커스가 기준이 될 수도 있고 마우스의 위치가 기준이 될 수 있다.
};

document.getElementById("name").oninput = (e) => {
  // 입력했을떄
  console.log(e.target.value);
  //   on 매서드를 쓸때 , on 함수들은 이벤트 함수라고 부른다.
  // 즉, 클릭,키다운,입력등 사용자의 입력에 대해서 이벤트가 발생했을때 실행된다.
};

document.getElementById("name").addEventListener =
  ("click",
  (e) => {
    console.log(e.target);
  });

for (let i = 0; i < 10; ++i) {
  const tempElem = document.createElement("div");
  //   div 엘리먼트를 생성해서 tempElem 변수에 초기화 한다.
  tempElem.innerHTML = i + "번째 DIV";
  //   tempElem의 내용(innerHTML)을 'i번째 DIV'라고 정의한다.

  //   root.append(tempElem);
  //   root 엘리먼트에 tempElem 엘리먼트를 자식으로 추가한다.(뒤에서)
  root.prepend(tempElem);
  //   root 엘리먼트에 tempElem 엘리먼트를 첫번쨰 자식으로 추가한다.
}

document.getElementById("name").style.backgroundColor = "lightgray";
// html 문서에서 style  속성을 이용해서 inline 형식으로 설정된 스타일과 마찬가지로 적용된다.
console.log(document.getElementById("name").style.border);
