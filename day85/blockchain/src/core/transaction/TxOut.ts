// tsconfig.json에서 설정해놔서 type가져와서 쓸수있음
import Wallet from "@core/wallet";
export default class TxOut implements ITxOut {
  public address: string;
  public amount: number;

  constructor(_address: string, _amount: number) {
    this.address = _address;
    this.amount = _amount;
  }

  static createTxOuts(sum: number, _receivedTx): Array<TxOut> {
    console.log("6-25 txOuts(output) 생성");

    //in에서 목록과 총얼마
    // _receivedTx 얼마누구한테 보낼지
    const { sender, received, amount } = _receivedTx;
    // 보내는사람 받는사람 얼마보낼지
    const senderAddress = Wallet.getAddress(sender);
    //sender누가보냈는지 주소만들어놈

    const receivedTxOut = new TxOut(received, amount);
    console.log("6-26 8-21 잔액을 다 썼으면 반환");

    if (sum - amount === 0) return [receivedTxOut];
    console.log("6-27 8-22  잔액이 남았으면 되돌려준다");
    // 0이면 잔액표시할필요없어서 받는사람만 내보내주면됨

    //sum :input으로 받을돈과 amount우리가 보낼돈 남은금액이 있을지 없을지 확인
    const senderTxOut = new TxOut(senderAddress, sum - amount);
    // 보낸사람에대해서 주소와 남은금액을 내보내라 잔액이 0이아니면
    return [receivedTxOut, senderTxOut];
    //잔금이없다는얘기?? 여기 러턴값 ?
  }
}
