export default class txIn implements ITxIn {
  public txOutId: string;
  public txOutIndex: number;
  public signature?: string;
  constructor(_txOutId: string, _txOutIndex: number, _signature?: string) {
    this.txOutId = _txOutId;
    this.txOutIndex = _txOutIndex;
    this.signature = _signature;
  }

  static createTxIns(_receivedTx, _myUTXO: Array<IUnspentTxOut>) {
    let sum: number = 0;
    let txIn: Array<txIn> = [];

    for (let i = 0; i < _myUTXO.length; ++i) {
      const { txOutId, txOutIndex, amount } = _myUTXO[i];
      const txIn = new TxIn(txOutId, txOutIndex, _receivedTx.signature);

      txIn.push(txIn);
      sum += amount;
      if (sum >= _receivedTx.amount) break;
    }
    return { sum, txIn };
  }
}
