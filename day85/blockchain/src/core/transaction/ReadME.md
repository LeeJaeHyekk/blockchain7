# Transaction

- 거래 내역 , 거래에 대한 최소 단위, 보내는 내역과 받는 내역이 함께 있어야한다.

input 채굴했을때는 블록체인이 주는거라 서명이없다
트랜잭션은 서명 verify가 된상태이후 발생한다

- UTXO를 사용하는 이유 : 각 거래에 대해서 확실한기록(log, history)을 남기기 위해서 사용한다.

- 그림을 보면서 이해해보자

1. miner가 BitCoin을 채굴했다

   -miner는 50 BTC를 받는다

   - 트랜잭션이 추가된다.
   - Tx는 Transaction의 약자로 보통 hash를 뜻한다. 트랜잭션을 찾기 위한 고유값이다.
   - input : 이전 거래 결과 내역
   - 현재 생성된 트랜잭션은 채굴(마이닝)을 통해서 처음 생성되어 input 내역이 없다.
   - 이런 트랜잭션을 코인베이스 트랜잭션(기존거래내역이없는것)(마이닝을 통해서 얻는건 이전거래내역이없다)이라고 한다.
   - output : 이번 거래 결과 내역
   - miner가 50 BTC를 받게되는 내용이 적혀있다.
   - 해당 output은 UnspentTransactionOutput에 저장된다
     - UnspentTransactionOutput(UTXO)
     - unspent : 소비되지 않은 + transaction : 트랜잭션 + output : 결과
     - 소비되지 않은 트랜잭션의 결과 => 잔액
     - miner는 50 BTC를 가지고 있다 .
     - TX 는 트랜잭션을 찾기 위한 값이다(어떤결과가 어디있는가).
     - 어떤 트랜잭션에서 이 결과가 나왔는가 찾기 위함이다.

2. miner가 tester에게 10 BTC를 보낸다.

- 트랜잭션이 생기자마자 블록만드는게아님 다른저장공간에 담아둠
- UTXO(사용되지않은 output이 다들어감(peer들의 잔금이 계속누적))에서 address가 miner인 데이터를 input으로 가져온다.
- 받는 사람(tester)의 10 BTC에 대한 output과
  보내는 사람 (miner)의 잔금, 40 BTC에 대한 output을 내보낸다

3. miner가 tester에게 2 BTC를 보낸다.

UTXO에서 input으로 가져다쓰면 UTXO에서 사라짐

- 트랜잭션이 생기자마자 블록만드는게아님 다른저장공간에 담아둠
- UTXO(사용되지않은 output이 다들어감(peer들의 잔금이 계속누적))에서 address가 miner인 데이터를 input으로 가져온다.
- 받는 사람(tester)의 2 BTC에 대한 output과
  보내는 사람 (miner)의 잔금, 38 BTC에 대한 output을 내보낸다

Tx뒤에 hash(input과 output으로 만듬)값이 들어감

4. tester가 miner에게 11BTC를 보낸다

- UTXO에서 tester의 output을 input으로 가져온다.
- 1번째 output은 10BTC으로 11 BTC 보다 부족하다
  (하나하나 가져와서 모자른지 안모자른지 확인함)
- 2번째 output을 추가시 12BTC로 11BTC을 보낼수있다
- 받는사람(miner)의 11BTC에 대한 output과 보내는사람 (tester)의 잔금, 1 BTC에 대한 output을 내보낸다.

- 위의 설명과 같이 트랜잭션의 결과(output)을 추가했다가 다음 트랜잭션에서 input으로 가져다 사용하는 방법으로 거래가 이루어진다.
