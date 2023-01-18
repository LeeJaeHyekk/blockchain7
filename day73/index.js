const net = require("net");
const reqParser = require("./lib/req");
const resParser = require("./lib/res");

global.isJson = true;
global.board = ["dfg", "tyj", "ghsfd"];
// 게시판 목록이다.

const server = net.createServer((client) => {
  // 연결이 생성됬을때 그 연결된
  client.on("data", (data) => {
    console.log(data);

    const req = reqParser(data.toString());
    const res = resParser(client, req);
    // 라우터 구현
    // req,요청으로 들어온 정보를 가져와서 path와 method에 따라 라우터를 구분하여 응답을 보낸다.
    if (req.method === "GET" && req.path === "/") {
      // app.get("/",(req,res)=>{})
      // get 형식으로 / 라우터로 요청이 왔을 때 public 폴더의 index.html 파일으로 응답한다.
      res.sendFile("index.html");
    } else if (req.method === "GET" && req.path === "/index.css") {
      // app.get("/index.css",(req,res)=>{})
      res.sendFile("index.css");
    } else if (req.method === "GET" && req.path === "/index.js") {
      // app.get("/index.js",(req,res)=>{})
      res.sendFile("index.js");
    } else if (req.method === "GET" && req.path === "/board") {
      // app.get("/board",(req,res)=>{})
      res.sendFile("board.html");
    } else if (req.method === "GET" && req.path === "/board/list") {
      res.send(JSON.stringify(global.board));
      // JSON.stringify => json 으로 변환한다.
      // string + -ify => string, 문자열로 -ify, - 화한다. => 문자열로 변환한다.
      // res.sendFile(global.board);
    } else if (req.method === "POST" && req.path === "/board/add") {
      console.log("req", req.body.value);
      global.board.unshift(req.body.value);
      res.send(JSON.stringify(global.board));
    } else {
      // app.get("/*",(req,res)=>{})
      // 들어온 요청의 형식과 라우터가 정해진 형식과 라우터가 아닐시 404 응답
      res.send("404");
    }
  });
  client.on("close", () => {
    console.log("요청에 따른 응답 완료");
  });
});

server.on("close", () => {
  // Socket 했을 때와 마찬가지로 통신에 대한 이벤트를 추가한다.
  console.log("연결이 끊겼다.");
});

server.on("connection", () => {
  console.log("연결이 생겼다.");
});

server.listen(4193, "127.0.0.1", () => {
  // listen << 서버가 들을 준비를 한다.
  //   - 즉, 요청을 받을 수 있도록 대기한다.
  // 매개변수로는 (port, ip, 서버 열고 실행할 함수)
  console.log("4193 서버를 열었다.");
});
