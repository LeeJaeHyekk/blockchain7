// import Block from "@core/block/block";
// import Chain from "@core/chain/chain";
// //
// const genesis = new Block(["첫 블록"]);
// console.log("genesis", genesis);
// //
// const second = new Block(["두번째 블록"], genesis);
// console.log("sec", second);
// //
// const previousBlock = new Block(["이전 블록"]);
// previousBlock.height = 29;
// previousBlock.difficulty = 10;
// //
// const adjustmentBlock = new Block(["단위 개수 전 블록"]);
// adjustmentBlock.height = 20;
// adjustmentBlock.difficulty = 11;
// //
// const newBlock = new Block(["asdf"], previousBlock, adjustmentBlock, {
//   DAI: 10,
//   averageGenerationTime: 60 * 1000,
// });
// console.log(newBlock);
// // ---------------------------------------------------------------------------------//
// // let chain = new Chain();
// // chain.addBlock(["정상적인 데이터"]);
// // const newBlock = new Block(["asdf"], chain.lastBlock);
// // chain.add2Chain(newBlock);
// // chain.addBlock(["asdf"]);
// // const newBlock = new Block(["qwer"], chain.lastBlock);
// // chain.add2Chain(newBlock);
// // ----------------------------------------------------------------------------------//
// const chain = new Chain();
// for (let i = 0; i < 300; i++) {
//   chain.addBlock([`test block ${i}`]);
// }
// // console.log(chain.chain);
import P2P from "./p2p";
import express, { Express, Request, Response } from "express";

const app: Express = express();
const ws: P2P = new P2P();

app.use(express.json());
app.get("/chain", (req: Request, res: Response) => {
  res.json(ws.getChain);
});
app.post("/block/mine", (req: Request, res: Response) => {
  // 라우터 block/mine req,res받아온다.
  const { data }: { data: Array<string> } = req.body;
  // data(보낼려는 메세지) 객체는 배열 형태의 문자를 req.body에 넣는다.
  const newBlock: IBlock | null = ws.addBlock(data);
  // P2P의addBlock()에 메세지를 담아서 New Block 으로 보낸다.
  if (newBlock === null) res.send("error data");
  // 만약 NewBlock의 값이 null이면 error코드를 보낸다
  res.json(newBlock);
  // NewBlock을 문자 처리해서 보낸다.
});
app.post("/peer/add", (req: Request, res: Response) => {
  // peer/add 라우터로 req,res 보낸다.
  const { peer }: { peer: string } = req.body;
  // peer은 문자형태로 req.body에 담아 보낸다.
  ws.addToPeer(peer);
  res.end();
});
app.get("/peer", (req: Request, res: Response) => {
  const sockets = ws.getSockets.map(
    (item: any) => item._socket.remoteAddress + ":" + item._socket.remotePort
  );
  res.json(sockets);
});
const ports = [
  [8080, 7545],
  [8081, 7546],
];
const idx = 0;

app.listen(ports[idx][0], () => {
  console.log("server start 8080" + ports[idx][0]);
  ws.listen(ports[idx][1]);
});
