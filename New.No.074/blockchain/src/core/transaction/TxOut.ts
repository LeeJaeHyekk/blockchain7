import Wallet from "@core/wallet";

export default class TxOut implements ITxOut {
  public address: string;
  public amount: number;

  constructor(_address: string, _amount: number) {
    this.address = _address;
    this.amount = _amount;
  }

  static createTxOuts(sum: number, _receivedTx): Array<TxOut> {
    console.log(" 6-25 txOuts(output) 생성");

    const { sender, received, amount } = _receivedTx;
    const senderAddress = Wallet.getAddress(sender);

    const receivedTxOut = new TxOut(received, amount);
    console.log(" 6-26 잔약을 다 썼으면 반환");

    if (sum - amount === 0) return [receivedTxOut];
    console.log(" 6-27 잔액이 남았으면 되돌려준다.");

    const senderTxOut = new TxOut(senderAddress, sum - amount);
    return [receivedTxOut, senderTxOut];
  }
}
