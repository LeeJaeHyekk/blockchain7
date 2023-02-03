declare interface ITxOut {
  //transaction의 결과(output)
  address: string;
  amount: number;
}

declare interface ITxIn {
  //transaction에서 사용되는 잔액(input) 이전거래 결과내역
  // txout의 id와 index가 들어가는이유?
  // utxo에서 가져오는게아님?
  txOutId: string; // transaction의 hash
  // 이전결과값이 input으로오니까
  // 다른 트젝의 output의 id
  // 이게 속한 transaction의 hash
  txOutIndex: number; // transacion의 몇번째 output
  signature?: string;
  // ?는 있으면 string인데 없을수있다임 없으면 undefinded
  // signature: string | undefined;
  //undefined가 아닌 null이면 빈칸일시 빨간줄이 뜬다.
  // - undefined는 값이 정의되지 않은 빈값
  // - null은 값이 비어있다고 정의된 값
  // | 는 비트연산자 중 or를 뜻한다.
  // - 연산에 있어서 2진수로 바꿔서 연산한다.
  // - 1011101 | 11011011
  // - 01011101 | 11011011=> 결과 11011111 값이 나온다
  // - 12341 || 124124 << 둘 중 하나가 참이면 전체가 참이다.
  // 어따 쓰느냐?
  // - 게임에서 상태이상을 따질 때 기절, 출혈 ,감전 , 화상 ,마비,
  // 공중뜸 , 중독 , ... 이있을때 기절은 1 , 출혈은 10 , 감전은 1000,
  // 화상은 1000, ....
  // -000110<< 출혈과 감전 각자리수마다 true false가 있다고봐야함
  // - 감전 걸린 상태(000100) | 출혈이 추가(000010)=> 000110,
  // 감전과 출혈이 걸렸다.
}

declare interface ITransaction {
  // 예를들어 TX0001의 트젝하나에 input output여러개라서
  txIns: Array<ITxIn>;
  // 여러개니까 배열
  txOuts: Array<ITxOut>;
  hash: string; // TxHash || TxID  라고도부름 트랜잭션마다의 명 큰 트잭ex tx0001
  //
}

declare interface IUnspentTxOut {
  address: string;
  amount: number;
  /////누가 얼마갖고있다.
  txOutId: string; // transaction의 hash 트잭 아이디라고봐도됨
  txOutIndex: number; // transacion의 몇번째 output
  // 이건 어떤 트랜젝션에서 나왔다
  // out의 id와 index를 알아야 정확하게 가져올수있다
  //예를들어 TX0001에서 두개있으면 어떤건지 알아야하니 id와 index둘다필요
}
