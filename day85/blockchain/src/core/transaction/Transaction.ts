import UnspentTxOut from "./UnspentTxOut";
// UnspentTxOut.ts파일
import { SHA256 } from "crypto-js";
import TxIn from "./TxIn";
import TxOut from "./TxOut";

export default class Transaction implements ITransaction {
  public txIns: Array<ITxIn>;
  public txOuts: Array<ITxOut>;
  public hash: string;

  constructor(_txIns: Array<ITxIn>, _txOuts: Array<ITxOut>) {
    // hash는 밑에함수로만들꺼라 매개변수안씀
    this.txIns = _txIns;
    this.txOuts = _txOuts;
    this.hash = this.createHash();
  }

  createHash(): string {
    // 처음 서버 시작하자마자 6-29~6-31 찍히는이유가 제네시스블록을 생성하기때문이다.
    console.log("6-29 트랜잭션의 해시 생성");

    let txOutStr: string = "";

    // console.log("txouts: ", this.txOuts.length);
    // [ TxOut { address: 'test123123', amount: 50 } ]
    /// 채굴이니까 배열내의 아이템하나
    console.log("6-30 트랜잭션의 output에 대해서 값들을 전부 문자열로 합침");
    for (let i = 0; i < this.txOuts.length; ++i) {
      const tempTxOut: Array<string | number> = Object.values(this.txOuts[i]);
      console.log("tempTxOut: ", tempTxOut);
      //tempTxOut= [ 'test123123', 50 ]
      // 키와 값인데 값만 가져오면되니까 tester나 10이나 그런 값들 키는없지만 값이여러개니까 배열
      //output 내용의 값들만 가져오자 , 여러개이기 때문에 배열이다.
      for (let j = 0; j < tempTxOut.length; ++j) {
        txOutStr += tempTxOut[j];
      }
    }
    // console.log("txOutStr: ", txOutStr);
    // test12312350
    // const txOutStr: string = this.txOuts.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );
    let txInStr = "";
    // console.log(txIns); 이거왜 콘솔안찍힘?
    console.log("6-31 트랜잭션의 input에 대해서 값들을 전부 문자열로 합침");

    for (let i = 0; i < this.txIns.length; ++i) {
      const tempTxIn: Array<string | number> = Object.values(this.txIns[i]);
      //output 내용의 값들만 가져오자 , 여러개이기 때문에 배열이다.
      for (let j = 0; j < tempTxIn.length; ++j) {
        txInStr += tempTxIn[j];
      }
    }
    console.log("txInStr:", txInStr);
    //1undefined
    return SHA256(txInStr + txOutStr)
      .toString()
      .toUpperCase();
  }

  createUTXO(): Array<IUnspentTxOut> {
    console.log("6-35 트랜잭션의 output을 기준으로 추가될 UTXO를 반환");
    console.log("this.hash: ", this.hash);
    // SHA256암호화 16진수
    //79734765D8F0C1F472D0A6CD630C96F35C93F051CC684F556755EB28269E718D
    // transaction에서 utxo를 생성해서 내보내준다.
    const utxo: Array<IUnspentTxOut> = [];
    for (let i = 0; i < this.txOuts.length; i++) {
      //output기준으로 utxo만드니까 out의 랭스
      utxo.push(
        new UnspentTxOut(
          this.txOuts[i].address,
          this.txOuts[i].amount,
          this.hash,
          // hash는 return SHA256(txInStr + txOutStr)
          //     .toString()
          //     .toUpperCase(); 값
          // }
          i //txOuts의 index
        )
      );
    }
    console.log("utxo: ", utxo);
    // utxo:  [
    //   UnspentTxOut {
    //     address: 'test123123',
    //     amount: 50,
    //     txOutId: '79734765D8F0C1F472D0A6CD630C96F35C93F051CC684F556755EB28269E718D',
    //     txOutIndex: 0
    //   }
    // ]
    return utxo;
  }

  //전체 input ,output 큰 트젝 으로묶음
  static createTx(_receivedTx, _myUtXO: Array<UnspentTxOut>): Transaction {
    console.log("6-23 트랜젝션 생성 함수 시작");
    const { sum, txIns } = TxIn.createTxIns(_receivedTx, _myUtXO);
    const txOuts = TxOut.createTxOuts(sum, _receivedTx);
    console.log("6-28 트랜잭션 생성");

    const tx = new Transaction(txIns, txOuts);
    return tx;
  }
}
