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
    }
  }
}
