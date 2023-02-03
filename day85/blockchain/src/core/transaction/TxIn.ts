export default class TxIn implements ITxIn {
  public txOutId: string;
  public txOutIndex: number;
  public signature?: string;

  constructor(_txOutId: string, _txOutIndex: number, _signature?: string) {
    this.txOutId = _txOutId;
    this.txOutIndex = _txOutIndex;
    this.signature = _signature;
  }

  static createTxIns(_receivedTx, _myUtXO: Array<IUnspentTxOut>) {
    // 보내는 사람의 UTXO를 기준으로 input(txIns)를 만든다.
    // input목록 만들어주는작업
    // 누가누구에게 얼마보냈는지의 데이터와 내 utxo를 가져옴
    console.log("6-24 8-19 txIns(input) 생성 시작");
    let sum: number = 0;
    let txIns: Array<TxIn> = [];

    for (let i = 0; i < _myUtXO.length; ++i) {
      // 내 utxo를 기준으로
      const { txOutId, txOutIndex, amount } = _myUtXO[i];
      //내꺼 utxo에서 첫번째꺼 가져다가 input으로 넣기위한작업
      const txIn = new TxIn(txOutId, txOutIndex, _receivedTx.signature);
      // txIn을 생성하고
      // 그걸로 input을 만듬

      txIns.push(txIn);
      // txIns(input)에 넣어주고
      //txIns는 input목록자체
      sum += amount;
      // sum(총합)에 input의 잔액 더해주고
      //sum은 utxo에서 가져온돈
      // 예를들어 sum이 50 amount가 25인 예시 25개보낼때
      // amount는 보내는돈 sum은 transacion input에 넣어둔돈 비교
      if (sum >= _receivedTx.amount) break;
      // 총합이 보낼 금액보다 크면 멈춘다.
      // 보내야하는돈이 작으면 break가 안걸리니까 다음껏도 갖고옴 보내는돈 맞추기위해
      // utxo에서 뽑아온돈이 더큰가 작으면 한번더 크면 멈춤
      // 많으면 멈추고 모자르면 계속돌고
    }
    return { sum, txIns };

    // 나중에 쓰려고 내보내줌
  }
}
