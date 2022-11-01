const sendBtn = document.getElementById("send-msg");
const endBtn = document.getElementById("end-msg");
const inputElem = document.getElementById("text");
const createDiv = document.getElementById("create");
const tempId = document.createElement("div");
const tempText = document.createElement("div");

function socket() {
  const socket = io();
  // const webSocket = new Websocket("ws://localhost:8080")
  //   4번 소켓에서 받아서 처리한다.
  socket.on("message1", (data) => {
    const tempDiv = document.createElement("div");
    const tempId = document.createElement("div");
    const tempText = document.createElement("div");
    tempDiv.classList.add("jae");
    tempDiv.append(tempId);
    tempDiv.append(tempText);
    createDiv.append(tempDiv);
    tempId.innerText = data.id;
    tempText.innerText = data.text;
    console.log(data.text);
  });
  //   1번을 클릭했다. 그럼 소켓 서버에 messeage라는 이름으로 보낸다

  sendBtn.onclick = () => {
    socket.emit("hi", { text: inputElem.value, id: "dok2" });
  };

  socket.on("disconnect1", (data) => {
    console.log(data);
  });
  endBtn.onclick = () => {
    socket.disconnect();
  };
}

socket();
