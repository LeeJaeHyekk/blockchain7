// Http 통신 : 80번 포트를 사용, 클라이언트가 요청을 하고 서버가 그 요청에 대해서 응답한다.
// 요청과 응답 << 요청이 없으면 서버가 응답을 보낼 수 없지 << 서버가 클라이언트에게 마음대로 데이터나 정보 등을 보낼 수 없다.
// HTTPS 통신이란 비교를 할때 인증서 언급
// 이런 방식이 아닌 서버에서도 마음대로 데이터를 보낼 수 있도록 하는 방식이 socket 통신 이다.
// 웹 에서도 이런 방식이 필요하다 생각해서 만들어진게 Web Socket
// 요즘은 거의 쓰이지 않지만 기초적인 라이브러리가 ws

const WebSocket = require("ws");
module.exports = (server) => {
  const socket = new WebSocket.Server({ server });
  let count = 0;
  socket.on("connection", (ws, req) => {
    console.log("socket start");

    ws.on("message", (msg) => {
      console.log(msg.toString());
    });

    ws.interval = setInterval(() => {
      ws.send(count++);
    }, 1100);

    ws.on("close", () => {
      clearInterval(ws.interval);
      console.log("disconnection");
    });
  });
};
