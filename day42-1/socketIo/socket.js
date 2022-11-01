const socket = require("socket.io");
// 소켓을 모듈 io(서버)
module.exports = (server) => {
  //모듈.서버로 리턴을 받는다.
  const io = socket(server);
  // 소켓에 서버를 매개변수로 받는다.
  io.on("connection", (ws) => {
    // 2번 프론트엔드(브라우저 웹 사이트)에서 message라는 이름으로 보낸 데이터를 받아서 처리한다.
    ws.on("hi", (data) => {
      console.log(data);
      //   3번 위에서 콘솔로 확인한다음 message라는 이름으로 프론트엔드에 데이터를 보낸다.
      // ws.emit("message1",data);
      // ws.emit은 연결된 프론트엔드에게 보낸다
      io.emit("message1", data);
      //message1로 데이터를 보낸다.
      // ws.broadcast.emit("message1", "data");
      //   webserver에 message1이름으로  data값을 보낸다.
    });

    ws.on("disconnect", () => {
      console.log("disconnection");
      io.emit("disconnect1", "Alalal");
    });
  });
};
