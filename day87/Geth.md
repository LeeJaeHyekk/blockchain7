# Geth

- 계정 생성을 위해서 go-ehereum 폴더에서 아래 명령어 실행

```sh
make all
```

- geth 명령어만으로 실행시 기본적으로 mainnet에 접근하도록 되어있다.

```sh
Chain ID: 1 (mainnet)
```

# private Ethereum Network

- 개인 이더리움 서버 열어보자
- genesis.json 파일을 만들어서 기본 설정을 입력한다.

```json
{
  "difficulty": "200000",
  "gasLimit": "3100000",
  "alloc": {
    "0xa984DD0ddFf49dC2D164648A5E865F0275B0C6f1": {
      "balance": "100000000"
    }
  },
  "config": {
    "chainId": 50,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0
  }
}
```

- difficulty : 문제 난이도
- gasLimit : 블록당 가스 지출 제한량
- alloc : 제네시스 블록 생성시 지갑에 보상 지급(빈 객체도 상관 없다.)
- config
  - chainId : 블록체인 네트워크 식별 ID
  - homesteadBlock : 이더리움 버전
  - eip는 Ethereum Improvemnt Proposal을 의미라며 기본값은 0이다.
    - 이더리움 핵심 프로토콜 사양 등의 표준을 설명한다.

# geth로 개인 이더리움 네트워크 생성

```sh
# 개인 이더리움 네트워크 생성
geth --datadir myGeth init genesis.json
```

```sh

```

- myGeth 폴더가 생성되고 그 안에 아래와 같이 폴더가 생성된다.

```sh
  ─ geth
  │   ├── LOCK
  │   ├── chaindata : 블록 헤더 내용, 블록 바디의 트랜잭션 내용 파일이 저장
  │   ├── lightchaindata
  │   └── nodekey
  └── keystore : geth가 갖고있는 계정 정보가 저장
```

- 생성된 개인 이더리움 네트워크를 싱행하자

```sh
geth --datadir ~/myGeth
```

# 열려있는 서버에 접근해서 데이터를 뜯어보자

## IPC

- inter-Process Communication
- 프로세스 간에 통신을 말한다.
  - 프로세스는 컴퓨터에서 실행되고 있는 프로그램을 말한다.
- geth로 열어둔 서버에 접근 명령어

```sh
geth attach ~/myGeth/geth.ipc
```

- ipc에서의 명령어들은 javascript 기준의 객체와 같다.

```sh
# eth.getBalance(지갑주소) => 지갑의 돈을 받아 출력한다.
eth.getBalance("0xa984DD0ddFf49dC2D164648A5E865F0275B0C6f1") #100000000
eth.getBlock(0) # 제네시스 블록 가져와서 출력
web3.fromWei(eth.getBalance("0xa984DD0ddFf49dC2D164648A5E865F0275B0C6f1"),'ether')
```

## 이더리움에서 사용하는 코인 단위

- wei : 이더리움의 최소 단위이다.(byte)
- Kwei : 1,000 wei
- Mwei : 1,000,000 wei
- Gwei : 1,000,000,000 wei
- Twei : 1,000,000,000,000 wei
- Pwei : 1,000,000,000,000,000 wei
- Ether : 1,000,000,000,000,000,000 wei

```sh
"noether": "0",
  "wei": "1(이더리움의 최소 단위)",
  "kwei": "1000",
  "Kwei": "1000",
  "babbage": "1000",
  "femtoether": "1000",
  "mwei": "1000000",
  "Mwei": "1000000",
  "lovelace": "1000000",
  "picoether": "1000000",
  "gwei": "1000000000",
  "Gwei": "1000000000",
  "shannon": "1000000000",
  "nanoether": "1000000000",
  "nano": "1000000000",
  "szabo": "1000000000000",
  "microether": "1000000000000",
  "micro": "1000000000000",
  "finney": "1000000000000000",
  "milliether": "1000000000000000",
  "milli": "1000000000000000",
  "ether": "1000000000000000000",
  "kether": "1000000000000000000000",
  "grand": "1000000000000000000000",
  "mether": "1000000000000000000000000",
  "gether": "1000000000000000000000000000",
  "tether": "1000000000000000000000000000000"
```

- IPC로 접근시 JavaScript로 구현된 모듈을 사용하게 되며 그 객체들은 아래와 같다.
  - admin:1.0 : peer의 정보
  - debug:1.0
  - engine:1.0
  - eth:1.0 : 체인 정보
  - ethash:1.0
  - miner:1.0 : 채굴 정보
  - net:1.0
  - rpc:1.0
  - txpool:1.0 : 트랜잭션 풀
  - web3:1.0 : 통신 관련 정보

```sh
eth.accounts #Geth가 갖고있는 계정 배열
miner.setEtherbase(eth.accounts[0]) # 채굴할 때 보상 받을 계정으로 0번째 계정을 설정
eth.coinbase # 현재 채굴 보상을 받는 계정을 확인
miner.start()
miner.stop()
eth.sendTransaction({from:eth.accounts[0],to:eth.accounts[1],value:web3.toWei(1,"ether")})
```

- Generating DAG in progress << 블록을 계산할 때 빠르게 계산하기 위해서 미리 준비한다.