import { WebSocket, WebSocketServer } from "ws";
import Chain from "@core/chain/chain";

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

  connectSocket(socket: WebSocket): void {
    // 소켓을 연결한다.
    this.sockets.push(socket);
    // 연결된 소켓을 소켓 목록에 추가한다.(peer 목록에 추가)
    // -후에 어디랑 연결됐는지 확인할 때 등 사용한다.
    socket.on("message", (_data: string) => {
      // message 이벤트가 발생하면 로그로 남긴다.
      console.log(_data.toString());
    });
    socket.send(`
        ▂▂▂▂▂▂╭━╮▂▂▂▂▂▂▂
        ▂▂▂▂▂▂┣━┫▂▂▂▂▂▂▂
        ▂▂▂▂▂▂┃╭┃▂▂▂▂▂▂▂
         ▂▂▂▂ ╭━┫┈┣━╮▂▂▂▂▂
            ▂▂╭━┃╭┃╭┃╭┃━╮▂▂▂
          ▂▂╭┃╯┃╯┃╯┃╭┃▂▂▂
        ▂▂▂▏┃┈┃┈┃┈┃┈┃▂▂▂
        ▂▂▂╰╮▂▂▂▂▂▂╭╯▂▂▂

    `);
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

  addToPeer(peer: string): void {
    // 소켓을 생성하고 연결한다.
    const socket: WebSocket = new WebSocket(peer);
    //  상대 소켓 서버 주소를 받아서 연결을 시도한다.
    socket.on("open", () => {
      // 연결 성공 시 open 이벤트가 발생한다.
      console.log("Open");
      this.connectSocket(socket);
      // 연결에 성공하면 소켓에 추가한다.
    });
  }
}

export default P2P;
