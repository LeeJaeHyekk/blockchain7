import UnspentTxOut from "./UnspentTxOut";
import { SHA256 } from "crypto-js";
import TxIn from "./TxIn";
import TxOut from "./TxOut";

export default class Transaction implements ITransaction {
  public txIns: Array<ITxIn>;
  public txOuts: Array<ITxOut>;
  public hash: string;

  constructor(_txIns: Array<ITxIn>, _txOuts: Array<ITxOut>) {
    this.txIns = _txIns;
    this.txOuts = _txOuts;
    this.hash = this.createHash();
  }

  createHash(): string {
    console.log("6-29 트랜잭션의 해시 생성");
    let txOutStr: string = "";

    console.log("6-30 트랜잭션의 output에 대해서 값들을 전부 문자열로 합침");
    for (let i = 0; i < this.txOuts.length; ++i) {
      const tempTxOut: Array<string | number> = Object.values(this.txOuts[i]);
      // output 내용의 값들만 가져오자, 여러개이기 때문에 배열이다.
      for (let j = 0; j < tempTxOut.length; ++j) {
        txOutStr += tempTxOut[j];
      }
    }
    // const txOutStr: string = this.txOuts.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );

    let txInStr = "";

    console.log("6-31 트랜잭션의 input에 대해서 값들을 전부 문자열로 합침");
    for (let i = 0; i < this.txIns.length; ++i) {
      const tempTxIn: Array<string | number> = Object.values(this.txIns[i]);
      // input 내용의 값들만 가져오자, 여러개이기 때문에 배열이다.
      for (let j = 0; j < tempTxIn.length; ++j) {
        txInStr += tempTxIn[j];
      }
    }
    // const txInStr: string = this.txIns.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );

    return SHA256(txInStr + txOutStr)
      .toString()
      .toUpperCase();
  }

  createUTXO(): Array<IUnspentTxOut> {
    // 배열 형식이다.
    console.log("6-35 트랜잭션의 output을 기준으로 추가될 UTXO를 반환");
    // transaction에서 utxo를 생성해서 내보내준다.
    const utxo: Array<IUnspentTxOut> = [];
    // 배열 배열 형식
    for (let i = 0; i < this.txOuts.length; ++i) {
      // 트랜잭션 배열의 길이를 기준으로 반복시킨다.
      utxo.push(
        // utxo 배열에 새로운 utxo 클래스를 추가한다.
        new UnspentTxOut(
          // utxo 배열은 아웃풋의 주소 , 잔액, 해시와 , 트랜잭션 인덱스를 가진다.
          this.txOuts[i].address,
          this.txOuts[i].amount,
          this.hash,
          i
        )
      );
    }

    return utxo;
  }

  static createTx(_receivedTx, _myUTXO: Array<UnspentTxOut>): Transaction {
    // createTx는 receivedTx(sender, received , amount , signature ) 와 myUTXO()
    console.log("6-23 트랜잭션 생성 함수 시작");
    const { sum, txIns } = TxIn.createTxIns(_receivedTx, _myUTXO);
    // sum(잔액) , txIns(트랜잭션 인풋) 을  클래스 TxIn 만드는데 매개변수로 (_receivedTx,_myUTXO)를 넣어서 해당하는 값으로 만든다.
    const txOuts = TxOut.createTxOuts(sum, _receivedTx);
    // createOuts()에 위에서 나온 값을 넣어서 만든다.
    console.log("6-28 트랜잭션 생성");
    const tx = new Transaction(txIns, txOuts);
    // tx는 새로운 트랜잭션(txIns(인풋) ,txOuts(아웃풋))을 넣어서 만든값을 넣는다.
    return tx;
  }
}
