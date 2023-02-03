import Transaction from "@core/transaction/Transaction";
import UnspentTxOut from "@core/transaction/UnspentTxOut";
import { SHA256 } from "crypto-js";
import elliptic from "elliptic";

const ec = new elliptic.ec("secp256k1");

type TSignature = elliptic.ec.Signature;

//블록체인 서버wallet
class Wallet {
  public publicKey: string;
  public address: string;
  public balance: number;
  public signature: TSignature;
  // default는 public public빼도 public으로 들어감

  constructor(
    _sender: string,
    _signature: TSignature,
    _utxos: Array<IUnspentTxOut>
  ) {
    console.log("6-16 지갑 객체 생성 시작");
    this.publicKey = _sender;
    this.address = Wallet.getAddress(this.publicKey);
    this.balance = Wallet.getBalance(this.address, _utxos);
    //static이라 this로 못씀 그냥
    this.signature = _signature;
  }

  static getAddress(_publicKey: string): string {
    console.log("6-17 지갑 주소 가져오기");

    return _publicKey.slice(26);
  }

  static getBalance(_address: string, _utxos: Array<IUnspentTxOut>) {
    // 잔액 계산
    console.log("6-18 지갑 잔액 가져오기");

    return _utxos
      .filter((item) => item.address === _address)
      .reduce((prev, curr) => prev + curr.amount, 0);

    // let temp = 0;
    // for (let i = 0; i < _utxos.length; ++i) {
    //   if (_utxos[i].address === _address) temp += _utxos[i].amount;
    // }
    // return temp;
  }

  static verify(_receivedTx: {
    sender: string;
    received: string;
    amount: number;
    signature: TSignature;
  }): TResult<undefined, string> {
    console.log("5-11/6-13 8-11 서명 확인");

    const { sender, received, amount, signature } = _receivedTx;
    const hash = SHA256(sender + received + amount)
      //hash는 보내는사람:sender여기서는 공개키 +받는사람+보내는금액?
      //여기서 address가 publickey임
      .toString()
      .toUpperCase();
    const keyPair = ec.keyFromPublic(sender, "hex");
    //공개키로 키페어만듬
    const isValid = keyPair.verify(hash, signature);
    if (!isValid) return { isError: true, msg: "서명오류" };
    return { isError: false, value: undefined };
    //내보내줄게딱히없어서 undefined
    // declare type TValue<T> = {
    //   isError: false;
    //   value: T;
    // };
    // 이부분에서 value T때문에 undefined안넣어주면암됨
  }
  static sendTransaction(
    //
    // _receivedTx가 req.body임
    _receivedTx: {
      sender: string;
      received: string;
      amount: number;
      signature: TSignature;
    },
    _utxos: Array<IUnspentTxOut>
  ) {
    console.log("6-12 8-10 트랜잭션 추가 함수 실행");
    const isValid = Wallet.verify(_receivedTx);
    console.log("6-14 8-14 서명 문제 있으면 끝");

    if (isValid.isError === true) return isValid;
    8;
    // 지갑을 새로생성
    console.log("6-15 8-13 지갑 객체 생성");
    const wallet = new this(_receivedTx.sender, _receivedTx.signature, _utxos);
    // 지갑 새로생성하는이유? 이거 세개만 들어가는이유?
    console.log("6-19 잔액과 보낼 금액 확인");
    if (wallet.balance < _receivedTx.amount) {
      //wallet.balance가 내잔액 recevedTx.amount가 보내줄돈
      return { isError: true, msg: "잔액부족" };
    }
    console.log("6-20 8-15 보내는 사람의 utxo 목록 가져오기");
    const myUtXO = UnspentTxOut.getMyUTXO(wallet.address, _utxos);
    // 보낸사람의 wallet.address:주소와 맞는 utxo만 가져온다: myUtXO
    console.log("6-22  8-17 트랜젝션 생성 함수 호출");
    //여기서부터

    const tx = Transaction.createTx(_receivedTx, myUtXO);
    return { isError: false, value: tx };
  }
}

export default Wallet;
