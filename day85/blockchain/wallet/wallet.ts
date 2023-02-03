import { SHA256, lib } from "crypto-js";
import elliptic from "elliptic";
// 데이터(지갑 계정)을 저장하기 위해서
import fs from "fs";
// 파일시스템
import path from "path";

// 지갑 계정을 저장할 위치
const addressDir: string = path.join(__dirname, "../walletData");

const ec: elliptic.ec = new elliptic.ec("secp256k1");
//타원곡선

//지갑 서버 wallet
class Wallet implements IWallet {
  // IWallet(틀,규칙) interface을 가져다가 Wallet이 이렇게 만들어져있는지 확인
  public address: string;
  public publicKey: string;
  public privateKey: string;
  // 잠글수있는열쇠
  public balance: number;

  //월렛 만들때
  constructor(_privateKey: string = "") {
    console.log("2-3/4-4지갑 생성 시작 4-4는 개인키가잇다");
    //2-3 생성
    // "" 넣어줘야 오류안남
    //밑에 privatekey publickey 순서중요
    // privatekey먼저 생성하고 publickey생성
    this.privateKey = _privateKey || this.getPrivateKey();
    // privatekey잇으면 앞에꺼 없으면 뒤에함수실행
    // false면 뒤애꺼실행
    this.publicKey = this.getPublicKey();
    this.address = this.getAddress();
    // 없으면 새 키를 만들고 있으면 그대로넣는다
    this.balance = 0;

    console.log(
      "2-6/4-7 지갑 주소 이름으로 파일생성하고 그내용으로 개인키 저장"
    );
    // 2-4 파일생성
    !fs.existsSync(addressDir) && fs.mkdirSync(addressDir);
    // walletData확인해서 없으면 추가해줌
    const fileName = path.join(addressDir, this.address);
    // 지갑계정 저장할위치addressDir(walletData)와 , 40글자(this.address)넣어줌

    //파일 어떻게 저장할껀가

    fs.writeFileSync(fileName, this.privateKey);
    //저장할위치는 addressDir(walletData)고 파일이름은 주소 40글자(this.address)넣어줘서 내용은 this.privatekey(개인키)로하겠다
    // sync해줘야 이작업이 끝나야넘어감
  }

  //주소가져오는 함수
  public getAddress(): string {
    console.log("2-5/4-6 공개키로 지갑 주소 생성");
    return this.publicKey.slice(26);
    // 40글자 가져옴 주소 앞에서 26개자름
  }

  //개인키 만드는함수
  public getPrivateKey(): string {
    console.log("2-3-1 개인키가 없으면 생성하자");
    return lib.WordArray.random(32).toString().toUpperCase();
    // 개인키를 랜덤으로 만든다
  }

  // 공개키만드는함수
  public getPublicKey(): string {
    console.log("2-4/4-5 개인키로 공개키 생성");
    return ec
      .keyFromPrivate(this.privateKey) // 이부분 중요 개인키를 이용하여 키페어를 만들겟다
      .getPublic() // 공개키 가져온다
      .encode("hex", true) // 16진수로바꾼다
      .toUpperCase();
  }

  static getList(): Array<string> {
    console.log("3-3 walletData 폴더의 파일 목록을 가져온다.");
    //3-4
    const files: Array<string> = fs.readdirSync(addressDir);
    console.log("files: ", files);
    // readdirSync :경로에있는 모든파일을 다가져옴(이름만==지갑주소)
    return files;
  }

  static getWalletPrivateKey(_address) {
    console.log(
      "4-3/5-5/6-5 / 8-5  지갑주소(파일명) 파일명으로 파일을 불러와서 그 내용의 개인키를 가져온다. 내용이 privatekey"
    );
    //4-4
    // console.log(
    //   fs
    //     .readFileSync(
    //       "C:\\Users\\KGA_18\\Documents\\GitHub\\blockchain2208\\blockchain2208\\230131\\blockchain\\@types\\Block.d.ts"
    //     )
    //     .toString()
    // );
    const filePath = path.join(addressDir, _address);
    // 폴더위치와 지갑주소를 합쳐서 가져옴
    //파일에서 private키(개인키)받아옴 우리가 받아온 경로로 받아옴
    const fileContent = fs.readFileSync(filePath);
    // console.log(fileContent.toString());
    //fileContent자체는 buffer로 가져오는데 tostring으로 하면 알아보기쉽게변함
    // console.log(
    //   Buffer.from(
    //     "0D0CC25972BC4E62B990D84EBFC25EB37CD870A601AF01F1868394D825EA1BB8"
    //   )
    // );
    //<Buffer 30 44 30 43 43 32 35 39 37 32 42 43 34 45 36 32 42 39 39 30 44 38 34 45 42 46 43 32 35 45 42 33 37 43 44 38 37
    //30 41 36 30 31 41 46 30 31 46 31 38 36 ... 14 more bytes>
    //이런식으로나옴
    // 파일내 경로 가져옴
    return fileContent.toString();
    // 개인키 넘겨줌
  }

  static createSign(_data) {
    //_data(req.body)는 공개키, 주소, 받는사람 , 보내는금액
    console.log("5-4/6-4 서명 생성 시작");
    const hash = SHA256(_data.sender.publicKey + _data.received + _data.amount)
      .toString()
      .toUpperCase();
    const privateKey = Wallet.getWalletPrivateKey(_data.sender.address);
    const keyPair = ec.keyFromPrivate(privateKey);
    //개인키로 키페어를 만듬
    console.log("5-6/6-6 서명 반환(return)");
    return keyPair.sign(hash, "hex");
    // 공개키 +받는사람+금액 을 담은 hash값을 개인키로 만든키페어로 사인을 만듬?
  }
}

export default Wallet;
