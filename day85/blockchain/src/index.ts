// import Block from "@core/block/block";
// import Chain from "@core/chain";

// const genesis = new Block(["첫 블록"]);
// console.log("genesis :", genesis);

// const second = new Block(["두번째 블록"], genesis);
// console.log("second :", second);

// // npm i -D ts-jest
// //npx ts-node src/index 로 실행
// const previousBlock = new Block(["이전 블록"]);
// previousBlock.height = 29;
// previousBlock.difficulty = 10;
// const adjustmentBlock = new Block(["단위 개수 전 블록"]);
// adjustmentBlock.height = 20;
// adjustmentBlock.difficulty = 11;

// const newBlock = new Block(["asdf"], previousBlock, adjustmentBlock, {
//   DAI: 10,
//   averageGenerationTime: 60 * 1000,
// });

// console.log(newBlock);

// const chain = new Chain();

// for (let i = 0; i < 300; i++) {
//   chain.addBlock([`test block ${i}`]);
// }

// npm i -g ts-node
//ts-node src/index
// TCP는 3단계 HTTP는 4단계

import P2P, { IMessage, MessageType } from "./p2p";
import express, { Express, Request, Response } from "express";
import Wallet from "@core/wallet";

//esModuleInterop:true 있어서 한번에 적을수있다 tsconfig.json파일

const app: Express = express();
// 그냥 라이브러리의 Exprsss타입으로 해줌
const ws: P2P = new P2P();

app.use(express.json());

// 보안작업
// 밑에 get post확인전에 확인
// 블록체인쪽에서 버퍼로 비교함
///////////////////////////////
app.use((req: Request, res: Response, next) => {
  console.log("5-8/6-8 지갑 서버에서 보낸 요청 받음 ,인증확인");
  const baseAuth = req.headers.authorization?.split(" ")[1] || "";

  // "Basic " + Buffer.from("admin:1234").toString("base64"),
  // 공백기준으로 앞뒤로자름 Basic이 0번째
  // headers: {
  //   Authorization: "Basic " + Buffer.from("admin:1234").toString("base64"),
  // },
  // split없으면 undifined?
  // 있으면 앞에꺼 없으면 뒤에꺼
  console.log("baseAuth:", baseAuth);
  // admin:1234를 base64형식으로 바꾼게 YWRtaW46MTIzNA==
  if (!baseAuth || baseAuth === "") return res.status(401).end();
  //인증 정보가 없으면 401(유효하지않은 인증)을 응답한다.
  const [userId, userPw] = Buffer.from(baseAuth, "base64")
    // base64를 버퍼로바꿧다가 스트링으로
    .toString()
    .split(":");
  //YWRtaW46MTIzNA== 이게 userId:admin userPw:1234로바뀜
  if (userId !== "admin" || userPw !== "1234") return res.status(401).end();
  console.log("5-9/6-9 인증이 확인되면 다음으로 넘어감");

  next();
  // 그냥 app.use실행되고 끝났을때 밑으로 내려가라
  ////transaction/send 를타야하니
});
////////////////////////////////
// http 통신에서 header를 이용한 인증 방법
// Authorization Basic 방식을 사용한다.
// 아무나 내 블록체인 네트워크(서버||peer)에 블록을 추가하지 못하게 하기위해서

// app.options get,post등 하기전에 확인

app.get("/chains", (req: Request, res: Response) => {
  //현제 체인 가져온다  const genesis: IBlock = new Block([`제네시스 블록 ${new Date()}`]); chain폴더안에 index.ts
  console.log("GET /chains");
  //연결없음
  res.json(ws.getChain);
  //체인가져올려고 넣음
});

app.post("/block/mine", (req: Request, res: Response) => {
  //p2p랑상관없이 블록추가 데이터값 포스트맨에
  console.log("POST /block/mine");
  //체인 추가하려고넣음
  console.log("req.body: ", req.body);
  // { data: 'test123123' }
  const { data }: { data: string } = req.body;
  console.log("data: ", data);
  // 주소만 넣어줄꺼니까 string이된다 채굴할때 주소만있으면 ㄱ됨
  const newBlock: IBlock | null = ws.mineBlock(data);
  console.log("7-29 새 블록");

  // P2P로 체인을 수정하니까 Chain을 P2P로상속 그래서 chain의 속한 메서드를 p2p에서슬수있음
  // ws붙는이유?
  // addBlock할때 데이터 넣어주니까 그값을 넣어줌 형식은 JSon형식
  if (newBlock === null) res.send("error data");

  //3
  console.log("7-30 정상적으로 체인에 추가시 다른피어 알림");

  const message: IMessage = {
    type: MessageType.allBlock,
    payload: [newBlock],
    //메세지에 담긴 데이터
    msg: "",
  };
  ws.broadcast(message);
  //이거때문에 바로바로 체인추가할때 볼수있음 진정한웹소켓?

  res.json(newBlock);
});

app.post("/");
// 데이터를 json형식으로 주고받겠다 json형식으로 파싱해줌 string으로바꿈 ->알아서 1,0으로바꿈?
//TCP 이쪽은 1계층에선 1이랑 0으로만 주고받음 4계층까지 binary(1,0)로 내려옴 buffer 를 string으로바꿈 4계층에서는 string으로주고받음

// JSON.stringify({a:1})// 스트링으로 바꾸겟다  자료형에서 json은 스트링

// peer끼리 체인확인용
// http가 /peer/add 요청과 응답을 주고받음 addTopeer로넘어가면peer
app.post("/peer/add", (req: Request, res: Response) => {
  console.log("POST peer/add");
  const { peer }: { peer: string } = req.body;
  ws.addToPeer(peer);
  res.end();
});

app.get("/peer", (req: Request, res: Response) => {
  // 처음엔 빈배열
  console.log("GET /peer");
  //서버에 연결된 피어를 확인하려고 넣음
  const sockets = ws.getSockets.map(
    (item: any) => item._socket.remoteAddress + ":" + item._socket.remotePort
  );
  // 나한테 연결된 피어 주소들을 볼수있다.
  res.json(sockets);
});

//03/06
app.post("/transaction/send", (req: Request, res: Response) => {
  console.log("5-10/6-10 / 8-8 지갑 서버에서 보낸요청 받음");
  console.log("req.body:", req.body);
  // req.body: {
  //   sender: '0286613AA1B55E4EB8FCDD06B949C2C47166EAFF56AA1A30F64F3661558F208D2C',
  //   received: 'E853D6344A62FD0208C6ECB78B6B13FA613ACB10',
  //   amount: '',
  //   signature: {
  //     r: 'd6b38d5b8d00988182da9a5444e1769a288fae8d0d3b90acae6907e3343592ad',
  //     s: '329fc2cf59398168eef77cd80e4de32bc81e014ee67be04a5cce6890e2db5bc6',
  //     recoveryParam: 1
  //   }
  // }
  // const isValid = Wallet.verify(req.body);
  console.log("6-11 8-9 트랜잭션 추가 함수를 호출");
  const result = Wallet.sendTransaction(req.body, ws.getUtxo);
  console.log(result);
  console.log("6-32 트랜잭션이 정상적으로 추가되었는지 확인");

  if (result.isError === true) res.send(result.msg);
  else {
    ws.addTxPool(result.value);
    // 추가
    console.log("6-33 UTXO 수정 함수 호출");

    ws.updateUTXO(result.value);
    console.log("6-37 트랜잭션 추가 및 UTXO 수정 끝");
    res.end();
  }

  console.log("5-12 서명 확인 결과 출력");
  // console.log(isValid);
  // res.end();
});

app.get("/utxo", (req: Request, res: Response) => {
  res.json(ws.getUtxo);
});

app.post("/balance", (req: Request, res: Response) => {
  res.json({ balance: Wallet.getBalance(req.body.address, ws.getUtxo) });
  //블록체인 서버쪽으로보내주기위해 req.body.address로
  // P2P클래스 받은 ws라 getUtxo가 P2P에있음
  //get getUtxo(): Array<IUnspentTxOut> {
  //   return [...this.utxos];
  // }
  // chain에서 상속받은 p2p
});

//03/07
app.get("/txpool", (req: Request, res: Response) => {
  res.json(ws.getTxPool);
});

const ports = [
  [8080, 7545],
  [8081, 7546],
];
const idx = 0;

// peer1에서 peer2로 연결요청을 할꺼다
// 요청을보내는 주체는 peer1(7545) 그래서 포스트맨에서 7545로보냄
// 우리가보낸(포스트맨)에서 보낸 주소를 기준으로 소켓을 보냄 peer1에서는 요청을 받음 peer2는 요청을보냄
//idx 0일때 왼쪽(open) 오른쪽은(peer1) socket start 1로바꾸면 오른쪽실행
app.listen(ports[idx][0], () => {
  console.log("server start" + ports[idx][0]);
  ws.listen(ports[idx][1]);
  //listen함수에 안에있는걸 보냄
  // WebSocket(P2P) 서버 생성/배포
});
