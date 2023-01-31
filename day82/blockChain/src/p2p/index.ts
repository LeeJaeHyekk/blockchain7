import { WebSocket, WebSocketServer } from "ws";
import Chain from "@core/chain/chain";

// const TYPE ={
//   Block
// }

enum MessageType {
  // enum: 배열과 비슷한 순서가 있는 데이터이다
  //  - 열거형 이라고 한다.
  //  - 위의 코드와 같은 역할을 한다
  //  - 변수에 정의할 값을 미리 정의했다고 생각하자
  // MessageType <- 왜 정의했느냐? <- 어떤 메세지를 주고 받았는지 확인하기 위해서 타입으로 설정했다.
  lastBlock = 0,
  // 마지막 블록을 달라고 하고 준다.
  allBlock = 1,
  // 전체 체인 달라고 하고 준다.
  addBlock = 2,
  // 블록이 추가 됐다고 알려주고 뭐가 추가 됐는지 알려준다.
}
// 오타 같은 오류를 줄이기 위해서 사용한다.

interface IMessage {
  //  주고 받을 메세지에 대한 타입
  type: MessageType;
  // 어떤 메세지를 주고 받았는지 확인
  payload: any;
  //  메세지에 담긴 데이터
}

class P2P extends Chain {
  // chain을 상속받는 이유 : 현재 p2p 서버에 기존의 체인을 상속함으로써 블록추가 등에 있어서 편함
  private sockets: Array<WebSocket>; // 연결된 peer의 목록
  constructor() {
    super();
    this.sockets = [];
  }

  get getSockets(): Array<WebSocket> {
    // 소캣을 추가하면  실행 sockets실행(Array<WebSocket>)
    return [...this.sockets];
  }

  connectSocket(socket: WebSocket, type?: MessageType): void {
    // 소켓을 연결한다.
    this.sockets.push(socket);
    // 연결된 소켓을 소켓 목록에 추가한다.(peer 목록에 추가)
    // -후에 어디랑 연결됐는지 확인할 때 등 사용한다.
    socket.on("message", (_data: string) => {
      // message 이벤트가 발생하면 로그로 남긴다.
      console.log(_data.toString());
      const data = JSON.parse(_data.toString());
      // 받은 메세지를 객체로 파싱
      switch (data.type) {
        // 어떤 요청이 왔는가 type으로 확인
        case MessageType.lastBlock: {
          // 마지막 블록 달라고 했으니까 .
          const message: IMessage = {
            type: MessageType.allBlock,
            payload: [this.lastBlock],
            // 마지막 블록을 payload에 담아서
          };
          socket.send(JSON.stringify(message));
          // 보내자
          break;
        }
        case MessageType.allBlock: {
          const [newBlock]: [IBlock] = data.payload;
          const isValid: IBlock | null = this.add2Chain(newBlock);
          if (isValid === null) break;
          // isValid가 null이 아니다 => 체인에 블록이 정상적으로 추가 됐다.
          // 체인에 블록이 정상적으로 추가되지 않았을때 전체 체인을 보내서 확인해보자.
          const message: IMessage = {
            type: MessageType.addBlock,
            payload: this.getChain,
          };
          socket.send(JSON.stringify(message));
          break;
        }
        case MessageType.addBlock: {
          const isValidChain = this.isValidChain(data.payload);
          if (isValidChain.isError === true) break;
          this.replaceChain(data.payload);
          const isValid = this.isValidChain(data.payload);
          if (isValid.isError === true) break;
          // 나랑 연결된 피어들에게 데이터 바뀜 알림
          const message: IMessage = {
            type: MessageType.addBlock,
            payload: data.payload,
          };
          this.sockets.forEach((item) => {
            item.send(JSON.stringify(message));
          });
          break;
        }
      }
    });
    const message: IMessage = {
      // 처음 연결시 요청을 보내자, 마지막 블럭 주세요
      type: type | MessageType.lastBlock,
      payload: type ? this.getChain : [],
    };
    socket.send(JSON.stringify(message));
    // `
    // ────────▄█▀▄
    // ──────▄██▀▀▀▀▄
    // ────▄███▀▀▀▀▀▀▀▄
    // ──▄████▀▀▀▀▀▀▀▀▀▀▄
    // ▄█████▀▀▀▀▀▀▀▀▀▀▀▀▀▄
    // `
    // 방금 연결한 소켓 서버에 message 이벤트를 보낸다.
  }
  listen(port: number): void {
    // 현재 로컬에 서버를 생성, 배포한다.
    const server: WebSocketServer = new WebSocket.Server({ port });
    // 서버를 생성한다.
    //
    // 가나슈(Ganache) 라는 개인(로컬)용 블록체인이 있다
    // 이 가나슈의 초기 port 설정이 7545이다.
    server.on("connection", (socket: WebSocket) => {
      // 서버에 연결이 들어왔을때
      console.log("socket start");
      this.connectSocket(socket);
      //   socket을 추가한다.
    });
  }
  // HTTP: 통신쪽 .. 소켓 들어가기 전
  addToPeer(peer: string): void {
    // 소켓을 생성하고 연결한다.
    const socket: WebSocket = new WebSocket(peer);
    //  상대 소켓 서버 주소를 받아서 연결을 시도한다.
    socket.on("open", () => {
      // 연결 성공 시 open 이벤트가 발생한다.
      console.log("Open");
      this.connectSocket(socket, MessageType.addBlock);
      // 연결에 성공하면 소켓에 추가한다.
    });
  }
}

export default P2P;
