document.forms["sign-up"].onsubmit = async function (e) {
  e.preventDefault();
  if (
    !e.target["user-id"].value ||
    !e.target["user-pw"].value ||
    !e.target["user-name"].value ||
    !e.target["user-class"].value
  )
    return;
  try {
    await axios.post("/api/user/regist", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
      name: e.target["user-name"].value,
      className: e.target["user-class"].value,
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
};
document.forms["sign-in"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["user-id"].value || !e.target["user-pw"].value) return;
  try {
    const result = await axios.post("/api/user/login", {
      id: e.target["user-id"].value,
      pw: e.target["user-pw"].value,
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
};
document.getElementById("sign-out-btn").onclick = async function (e) {
  try {
    await axios.get("/api/user/logout");
  } catch (error) {
    console.error(error.response.data.message);
  }
};

const boardList = document.getElementById("board-list");
async function getlist() {
  try {
    // <div id="board-list">
    const result = (await axios.get("/api/board")).data;
    boardList.innerHTML = "";
    result.forEach((item) => {
      const boardItem = document.createElement("div");
      const boardTitle = document.createElement("div");
      const boardText = document.createElement("div");
      const boardBtnBox = document.createElement("div");
      const boardDelete = document.createElement("button");
      const boardUpdate = document.createElement("button");
      const formCommentAdd = document.createElement("form");
      const formCommentText = document.createElement("input");
      const formCommentAddBtn = document.createElement("button");
      const commentList = document.createElement("div");
      const commentText = document.createElement("div");
      const commentBtnBox = document.createElement("div");
      const commentDelete = document.createElement("button");
      const commentUpdate = document.createElement("button");

      boardItem.append(boardTitle);
      boardItem.append(boardText);
      boardItem.append(boardBtnBox);
      boardBtnBox.append(boardDelete);
      boardBtnBox.append(boardUpdate);
      boardItem.append(formCommentAdd);
      formCommentAdd.append(formCommentText);
      formCommentAdd.append(formCommentAddBtn);
      boardItem.append(commentList);
      commentList.append(commentText);
      commentList.append(commentBtnBox);
      commentBtnBox.append(commentDelete);
      commentBtnBox.append(commentUpdate);
      boardList.append(boardItem);
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
}
// getlist();
document.forms["board-add"].onsubmit = async function (e) {
  e.preventDefault();
  if (!e.target["board-title"].value || !e.target["board-text"].value) return;
  try {
    const result = await axios.post("/api/user/login", {
      title: e.target["board-title"].value,
      text: e.target["board-text"].value,
    });
  } catch (error) {
    console.error(error.response.data.message);
  }
};
