# transaction

- 거래 내역, 거래에 대한 최소 단위, 송금과 입금 내역이 함께 있어야 한다.

- UTXO를 사용하는 이유 : 각 거래에 대해서 확실한 기록(log,history)을 남기기 위해서 사용한다.

- 1. miner가 BitCoin을 채굴한다.
  - miner는 50 BTC를 받는다.
    - 트랜젝션이 추가된다.
    - Tx는 Transaction의 약자로 보통 hash를 뜻한다. 트랜젝션을 찾기위한 고유값이다.
    - input : 이전 거래 결과 내역
      - 현재 생성된 트랜잭션은 채굴(마이닝)을 통해서 처음 생성되어 input 내역이 없다.
      - 이런 트랜잭션을 코인베이스 트랜잭션이라고 한다.
    - output : 이번 거래 결과 내역
      - miner가 50 BTC를 받게 되는 내용이 적혀있다.
      - 해당 output은 UnspentTransactionOutput 에 저장된다.
    - UnspentTransactionOutput(UTXO)
      - unspent : 소비되지 않은 + transaction : 트랜잭션 + output : 결과
      - 소비되지 않은 트랜젝션의 결과 => 잔액
      - miner는 50 BTC를 가지고 있다.
      - Tx 는 트랜잭션을 찾기 위한 값이다.
        - 어떤 트랜잭션에서 이 결과가 나왔는가 찾기 위함이다.
    -
- 2. miner 가 tester에게 10 BTC을 보낸다.

  - UTXO에서 address가 miner인 데이터를 input으로 가져온다.
    - output으로 받는 사람(tester)의 10 BTC에 대한 것과 보내는 사람(miner)의 잔금, 40 BTC데 대한 것을 저장한다.

- 3 miner 가 tester에게 2 BTC을 보낸다.

  - UTXO에서 address가 miner인 데이터를 input으로 가져온다.
  - output으로 받는 사람(tester)의 2 BTC에 대한 것과 보내는 사람(miner)의 잔금, 38 BTC데 대한 것을 저장한다.

- 4 tester가 miner에게 11 btc을 보낸다.
  - UTXO에서 tester의 output을 input으로 가져온다.
    - 1번째 output을 10 Btc으로 11 Btc보다 부족하다.
    - 2번째 output을 추가 시 12 Btc으로 11 BTC를 보낼 수 있다.
  - 받는 사람의 11 BTC에 대한 output과 보내는 사람(tester)의 잔금, 1BTC에 대한 output을 내보낸다.
