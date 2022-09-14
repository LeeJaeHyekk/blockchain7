console.log(document.body.children);
// children은 엘리먼트의 자식 엘리먼트를 가져온다. 호출한다.
console.log(document.body.childNodes);
// childNodes는 자식 노드들을 모두 가져온다.

console.log(document.getElementById("parent").childNodes);

console.log(document.getElementById("parentElement"));
// 부모 엘리먼트를 가져온다.
console.log(document.getElementById("child1").parentElement);

console.log(document.getElementById("parent").firstElementChild);
// 첫번째 자식 엘리먼트를 가져온다.
console.log(document.getElementById("parent").lastElementChild);
// 마지막 자식 엘리먼트를 가져온다.

console.log(document.getElementById("child1").nextElementSibling);
// 다음 형제 엘리먼트를 가져온다.
console.log(document.getElementById("child1").previousElementSibling);
// 이전 형제 엘리먼트를 가져온다.

let children = [...document.getElementById("parent").children];
// 얘는 배열이 아니라 컬렉션이라 합니다.
children.forEach((elem) => {
  console.log(elem);
});
// 컬렉션이라 합니다. foreach를 쓰고 싶으면 배열로 변환 해야한다.
// 변환 방법 =>[...변환할 변수]

console.log(document.getElementsByClassName("child"));
// 클래스명을 찾아서 Element들을 가져온다.

children = document.getElementsByClassName("child");

console.log(children[0]);

children[0].onclick = () => {
  alert("온클릭");
};

function onclick(num) {
  console.log(num + "번째 자식을 클릭했어!");
}

[...children].forEach(function (elem, index) {
  // forEach 매개변수함수에 매개변수로 (item,index) 형식으로 받아올수 있다.
  // item은 배열의 아이템 하나하나, index는 해당 아이템의 인덱스 번호(몇번째 아이템인가?)
  //  forEach는 배열의 아이템을 하나하나 가져와서 매개변수함수로 전달된 함수에 매개변수로 전달해서 함수를 호출한다.
  elem.onmouseover = () => {
    elem.classList.toggle("hover");
  };
  elem.onclick = function () {
    onclick(index + 1);
    // 보기쉽게 1번째 자리부터 시작하게 만든다.
    console.log(elem.innerHTML);

    /*
    if (elem.classList.contains("on")) {
      elem.classList.add("on");
      elem.classList.remove("on");
    } else elem.classList.add("on");
    // classList는 엘리먼트의 클래스를 관리하는 객체이다.
    // add 매서드는 클래스를 추가한다.*/

    elem.classList.toggle("on");
    // toggle 메서드는 클래스가 있으면 없애고 없으면 추가한다.
  };
});

// document.querySelector; 쓰면 해결된다.<div>안의<div>

const tempArr = ["a", "b", "c"];
tempArr.forEach((item, index) => {
  console.log(item + " : " + index + "번쨰 아이템");
  //  forEach의 유일한 단점 : 멈출수 없다.
});
// for Each 결과
// a : 0번째 아이템
// b : 1번째 아이템
// c : 2번째 아이템

for (let index = 0; index < tempArr.length; ++index) {
  const item = tempArr[index];
  // forEach에서 사용하는 item이랑 변수 통일하기 위해서 초기화
  console.log(item + " : " + index + "번째 아이템");
}

// index는 배열의 위치인데, 매개변수 (item, index)하면 값이랑 배열위치라고 보면 된다.

console.log(document.getElementById("parent").innerHTML);
// html 기준으로 텍스트를 가져온다.
console.log(document.getElementById("parent").innerText);
// html 태그 등등을 제외한 텍스트만 가져온다.

document.getElementById("btn").onclick = () => {
  // 버튼클릭시 실행
  console.log(document.getElementById("BTS").value);
  // BTS에 입력된 값을 로그로 출력한다.
  document.getElementById("btn").style.backgroundColor = "#ff0000";
};
