const sendBtn = document.getElementById("send-msg");
const endBtn = document.getElementById("end-msg");
function socket() {
  const webSocket = new WebSocket("ws://localhost:8080");

  webSocket.onopen = () => {
    console.log("socket link");
  };

  webSocket.onmessage = (data) => {
    console.log(data);
  };
  //소켓 서버에서 보낸 데이터를 받는 이벤트 함수이다.
  sendBtn.onclick = () => {
    webSocket.send("testing");
  };
  //  소켓 서버에 데이터를 보내는 메서드
  endBtn.onclick = () => {
    webSocket.close();
    console.log("end");
  };
}
socket();
