declare interface ITxOut {
  // transaction의 결과(output)
  address: string;
  amount: number;
}

declare interface ITxIn {
  // transaton에서 사용되는 잔액(input)
  txOutId: string; // transaction의 hash값
  txOutIndex: number; // transaction의 몇번쨰 output
  signature?: string; // signature:string | undefined
  //   undefined는 값이 정의도지 않는 빈값
  //   null은 값이 비어있다고 정의된 값
  //   | 는 비트연산자 중 or를 뜻한다.
  //   - 연산에 있어서 2진수로 바꿔서 연산한다.
  //   - 게임에서 상태이상을 따질때
}
declare interface ITransaction {
  txIns: Array<ITxIn>;
  txOuts: Array<ITxOut>;
  hash: string; //   TxHash || TxID
}
declare interface IUnspentTxOut {
  address: string;
  amount: number;
  txOutId: string; // transaction hash
  txOutIndex: number;
}
