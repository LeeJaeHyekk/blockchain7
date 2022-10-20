const todoList = document.getElementById("list");
function getList() {
  todoList.innerHTML = "";
  axios.get("/api/list").then((Resdata) => {
    Resdata.data.list.forEach((todo) => {
      const tempElem = document.createElement("li");
      tempElem.classList.add("list-group-item");
      tempElem.innerHTML = ` 오늘의 점심 특선: ${todo.text} | 시간: ${new Date(
        todo.time
      )}`;
      todoList.append(tempElem);
    });
  });
}
getList();

document.forms["todo-form"].onsubmit = function (e) {
  e.preventDefault();
  axios.post("/api/list", {
    name: document.forms["todo-form"]["do-name"].value,
    time: Date.now(),
  });
};
