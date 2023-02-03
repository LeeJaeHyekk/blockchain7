import express, { Express, Request, Response } from "express";
import axios from "axios";
import path from "path";
import Wallet from "./wallet";

const app: Express = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, "public")));
// 1-1 __dirname(현재실행중인폴더경로)에서 public폴더를 찾아간다

app.post("/wallet/create", (req: Request, res: Response) => {
  console.log("2-2/wallet/create 라우터, post 메서드로 요청 들어옴");
  //2-2
  // 지갑을 생성해달라
  res.json(new Wallet());
  // res.json res.send res.end 전부 응답보내는거다
  console.log("2-7 생성된 지갑을 json형식으로 응답");

  // res.end();
});

app.get("/wallet/list", (req: Request, res: Response) => {
  // 이코드가 밑에 params밑에있으면
  //(await axios.get(`/wallet/` + _address) 이게 이거부터들어옴
  //3-3
  console.log("3-2 GET 메서드,/wallet/list 라우터로 요청 들어옴");
  res.json(Wallet.getList());
  //Wallet.getlist로 쓸수있는이유가 static이여서
  console.log("3-4 가져온 파일 목록으로 응답");
  //3-5 응답
  // static잇어야 이렇게 가져올수있음
});

app.get("/wallet/:address", async (req: Request, res: Response) => {
  console.log(req.params);
  //{ address: '234E9C058FEE24491DE27DA8B83638065F511FBB' }
  //:address는 test로바꾸면 {test:'234E9C058FEE24491DE27DA8B83638065F511FBB'} 이걸로바뀐다

  //4-3
  console.log("4-2 GET 메서드, /wallet/지갑주소 라우터로 요청 받음");
  const address: string = req.params.address;

  const privateKey: string = Wallet.getWalletPrivateKey(address);
  // 4-5

  //   console.log(privateKey);
  console.log("4-8 생성된 지갑을 json형식으로 응답");
  const wallet = new Wallet(privateKey);
  const balance = (
    await axios.post(
      "http://localhost:8080/balance",
      { address },
      {
        headers: {
          Authorization:
            "Basic " + Buffer.from("admin:1234").toString("base64"),
        },
      }
    )
  ).data.balance;
  wallet.balance = balance;

  res.json(wallet);
  // 처음에 privateKey없는데 넣어서 Wallet틀에서 생성
  // {"asd":"asd"}
  // Wallet 지갑객체가 나온다
  // privatekey를 기준으로 지갑을 생성
  // static잇어야 이렇게 가져올수있음
});

app.post("/transaction/send", (req: Request, res: Response) => {
  console.log(" 5-3 POST 메서드,/transaction/send 라우터로 요청받음 ");
  console.log(" 6-3 8/3 POST 메서드,/transaction/send 라우터로 요청받음 ");

  // console.log("req.body:", req.body);
  // req.body: {
  //   sender: {
  //     publicKey: '032DA39C429DC5B16C7600016E234E9C058FEE24491DE27DA8B83638065F511FBB',
  //     address: '234E9C058FEE24491DE27DA8B83638065F511FBB'
  //   },
  //   received: 'E853D6344A62FD0208C6ECB78B6B13FA613ACB10',
  //   amount: ''
  // }
  // 이런식으로 나옴 req.body
  const signature = Wallet.createSign(req.body);

  console.log(signature);

  const txObj = {
    sender: req.body.sender.publicKey,
    // 공개키
    received: req.body.received,
    //받는사람
    amount: req.body.amount,
    //보내는금액
    signature,
    //서명
  };
  console.log(
    "5-7/6-7 / 8-7 생성한 서명과 hash를 만들기 위한 데이터를 가지고 http://localhost:8080/transaction/send 에 요청보냄"
  );

  //4
  axios.post("http://localhost:8080/transaction/send", txObj, {
    // 지갑서버에서 블록체인서버로 보냄 src index가 블록체인서버
    headers: {
      Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
      // "Basic " + Buffer.from("admin:1234").toString("base64")이건쓰는방식
      //
      // buffer를 통해서 base64 형식으로 바꿔줌
      // HTTP 통신에서의 인증 방법
      // Authorization: Basic방식은 base64 포멧을 기본으로 한다.
    },
  });
  //서명을 만들어서 내용을 지갑서버에서 블록체인서버로 보낸다
  // p2p의 index.ts파일

  res.json(signature);
});

app.post("/block/mine", (req: Request, res: Response) => {
  axios.post("http://localhost:8080/block/mine", req.body, {
    headers: {
      Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
    },
  });
  res.end();
});
//서명을 만들어서 내용을 지갑서버에서 블록체인서버로 보낸다
// p2p의 index.ts파일

app.post("/balance", async (req: Request, res: Response) => {
  const balance = (
    await axios.post("http://localhost:8080/balance", req.body, {
      headers: {
        Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
      },
    })
  ).data.balance;
  res.send({ balance });
});

app.listen(9514, () => {
  console.log("wallet server open 9514");
});
