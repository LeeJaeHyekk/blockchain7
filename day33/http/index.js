const http = require("http");
const fs = require("fs").promises;
// const app = express();
// fs.filereadsync
// const app = express()
// app.use((req,res)=>{})
// http
//   .createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
//     res.write("<h1>할롬</h1>");
//     res.end("<p>완료</p>");
//   })
//   .listen(8080, () => {
//     console.log("서버를 열었다.");
//   });
http
  .createServer(async (req, res) => {
    try {
      if (req.method === "GET") {
        if (req.url === "/") {
          const data = await fs.readFile("./web/index.html");
          return res.end(data);
        }
        //   } else if (req.method === "post") {
        //     if (req.url === "/api/user") {
        //       const data = await fs.readFile("./web/index.html");
        //       return res.end(data);
        //     }
      } else if (req.method === "OPTIONS") {
      } else if (req === "PUT") {
      } else if (req === "DELETE") {
      }
    } catch (err) {
      console.log(err);
    }
  })
  .listen(8080, () => {
    console.log("8080포트");
  });
