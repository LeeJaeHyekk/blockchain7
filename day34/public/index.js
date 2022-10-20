const todoList = document.getElementById("list");
function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((resData) => {
    resData.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      tempElem.classList.add("list-group-item");
      tempElem.innerHTML = `${todo.text} / 등록시간 : ${new Date(todo.time)}`;
      todoList.append(tempElem);
    });
  });
}
getList();
document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault();
  // 기본 이벤트를 막는다.
  //   xmlhttpRequest => fetch/ajax => axios
  //  http 모듈 => express
  //   axios.get(
  //     "/api/add?name=" +
  //       document.forms["todo-form"]["do-name"].value +
  //       "&str=" +
  //       "이재혁"
  //   );
  //  axios.post("라우터", 서버의 req.body) 저 데이터를 보낸다.
  axios.post("/api/list", {
    // 꺽쇠 안에 있는것이 바디
    name: document.forms["todo-form"]["do-name"].value,
    time: Date.now(),
  });
  //.then((data) => {
  //   getList();
  //  });
  // axios
  // .delete("/api/list", {
  // 삭제
  //  })
  //  .then((data) => {});
  //axios
  // .put("/api/list", {
  // 수정
  // })
  //  .then((data) => {});
};
