const fs = require("fs");
// 파일을 다루는 모든 방법이다 있다.
// 어씽크 어웨이트 써야된다.

const path = require("path");
// 경로를 만들어 준다.
const parser = (client, req) => {
  function createMessage(data) {
    const dataBuffer = Buffer.from(data);
    // Buffer from == 생성하는거
    let contentType = req.headers.accept;
    //
    if (contentType.indexOf("text/html") > -1) contentType = "text/html";
    //
    return `HTTP/1.1 200 OK
Connection:Close
Content-Type : ${contentType}; charset=UTF-8
Content-Length :${dataBuffer.length}

${dataBuffer.toString()})`;
  }
  return {
    send: (data) => {
      const message = createMessage(data);
      client.write(message);
    },
    sendFile(fileName) {
      const target = path.join(__dirname, "../public", fileName);
      console.log("dir", __dirname);

      const readLine = fs.readFileSync(target, "utf-8");
      // 파일이 정확히 있고, 읽을수 있으면
      // 씽크가 없다면 프라미스 형식으로 써야된다.
      // 파일이 언제다 올지를 모른다.
      const message = createMessage(readLine);
      client.write(message);
    },
  };
};

module.exports = parser;
