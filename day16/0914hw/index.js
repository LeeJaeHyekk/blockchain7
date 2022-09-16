const list = document.getElementById("todo-list");
// const로 list를 초기화한 이유: 매서드(함수)를 호출할때마다 javascript는 해당 코드를 실행하기 떄문에 실행을 최소화하기 위해서 변수에 변환값(return)을 정의하여 이후 다시 찾지 않고 바로 쓸수 있다.

function deleteItem(num) {
  // 삭제를 위한 함수
  //   list.children[num].classList.add("delete");
  //   list의 자식들(Element) 중에 num 번째 자식에 'delete'라는 클래스를 추가한다.
  //   delete 클래스를 가진 엘리먼트는 css스타일로 인해 가운데 줄이 생긴다.

  //

  //   let startIdex = 0;
  //   let endIdx = 0;
  //   let tempHTML = list.innerHTML;
  //   for (let i = 0; i < num; ++i) {
  //     startIdex = tempHTML.slice(startIdex + 4).indexOf("<li>");
  //   }
  //   endIdx = tempHTML.slice(startIdex + 4).indexOf("<li>");
  //   console.log(endIdx);
  //   tempHTML = list.innerHTML;
  //   console.log(tempHTML);
  //   list.innerHTML = tempHTML.slice(0, startIdex) + tempHTML.slice(endIdx + 4);

  //

  list.innerHTML = list.innerHTML.replace(list.children[num].outerHTML, "");
}

document.getElementById("todo-add").onclick = () => {
  // todo-add, 즉 추가 버튼에 클릭에 대한 코드를 정의한다.
  const input = document.getElementById("todo-input");
  //   입력된 값을 홧인하기 위해 엘리먼트를  찾아 변수에 초기화 한다.
  if (!input.value) return;
  //   입력된 값이 없으면 return , 즉 매서드를 종료한다.
  list.innerHTML += `<li>${input.value}<button onclick="deleteItem(${list.children.length})">삭제</botton></li>`;
  // list, 할일 목록에 li 엘리먼트를 추가한다.
  // 엘리먼트의 자식으로 버튼을 추가하여 list의 자식들의 길이(현재는 추가되지 않았기 떄문에 index 처럼 사용가능)을 매개변수로 전달한다.

  input.value = "";
  //   입력된 값을 없앤다.
};
