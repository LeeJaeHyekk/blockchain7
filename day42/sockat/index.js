// Http 통신 : 80번 포트 사용 , 클라이 언트가 요청을 하고 서버가 그 요청에 대해서 응답한다.
// 요청과 응답 << 요청이 없으면 서버가 응답을 보낼 수 없다.
// HTTPS 통신이랑 비교할때

const WebSocket = require("ws");
let count = 0;
module.exports = (server) => {
  const socket = new WebSocket.Server({ server });
  //   소켓을 연결한다.
  socket.on("connection", (ws, req) => {
    console.log("sockat start");
    ws.on("message", (msg) => {
      console.log(msg);
    });
    ws.interval = setInterval(() => {
      ws.send(count++);
      // 데이터를 전송한다 << 데이터를 보낸다
    }, 1000);
    ws.on("close", () => {
      clearInterval(ws.interval);
      console.log("disconnection");
    });
  });
};
