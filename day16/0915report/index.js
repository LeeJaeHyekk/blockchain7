let randomNum;
let comsel;


for (let i = 0; i < 3; i++) {
  randomNum = Math.floor(Math.random() * 3);
  
  ranarr.push(randomNum);
  console.log(ranarr);
}if (!ranarr.includes(randomNum)ranarr.push(randomNum))


const count = document.getElementById("life-count");
document.getElementById("life-count").onclick = () => {
    const input = document.getElementById("todo-input");
    //   입력된 값을 홧인하기 위해 엘리먼트를  찾아 변수에 초기화 한다.
    if (!input.value) return;
    list.innerHTML += `<li>${input.value}<button onclick="deleteItem(${list.children.length})">
    삭제</botton></li>`;
    // list, 할일 목록에 li 엘리먼트를 추가한다.
    // 엘리먼트의 자식으로 버튼을 추가하여 list의 자식들의 길이(현재는 추가되지 않았기 떄문에 index 처럼 사용가능)을 매개변수로 전달한다.
  
    input.value = "";
    //   입력된 값을 없앤다.
  };


num1()
num2()
num3()
