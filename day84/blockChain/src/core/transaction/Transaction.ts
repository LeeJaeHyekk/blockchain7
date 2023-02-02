import { SHA256 } from "crypto-js";
import UnspentTxOut from "./UnspentTxOut";

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
    let txOutStr = "";
    for (let i = 0; i < this.txOuts.length; ++i) {
      const tempTxOut: Array<string | number> = Object.values(this.txOuts[i]);
      //   output 내용의 값들만 가져오자, 여러개이기 때문에 배열이다.
      console.log("tempTxout", tempTxOut);
      for (let j = 0; j < tempTxOut.length; ++j) {
        txOutStr += tempTxOut[j];
      }
    }
    console.log("txOutStr:", txOutStr);
    // ---hell---
    // const txOutStr: string = this.txOuts.reduce(
    //   (prev, curr) => prev + Object.values(curr).join(""),
    //   ""
    // );
    let txInStr = "";
    for (let i = 0; i < this.txIns.length; ++i) {
      const tempTxIn: Array<string | number> = Object.values(this.txIns[i]);
      console.log("tempTxIn:", tempTxIn);
      //   output 내용의 값들만 가져오자, 여러개이기 때문에 배열이다.
      for (let j = 0; j < tempTxIn.length; ++j) {
        txInStr += tempTxIn[j];
      }
    }
    console.log("txINStr:", txInStr);

    return SHA256(txInStr + txOutStr)
      .toString()
      .toUpperCase();
  }
  createUTXO(): Array<IUnspentTxOut> {
    // transaction에서 uxto를 생성해서 내보내준다.
    const utxo: Array<IUnspentTxOut> = [];
    for (let i = 0; i < this.txOuts.length; ++i) {
      utxo.push(
        new UnspentTxOut(
          this.txOuts[i].address,
          this.txOuts[i].amount,
          this.hash,
          i
        )
      );
    }
    console.log("utxo:", utxo);
    return utxo;
  }
}
