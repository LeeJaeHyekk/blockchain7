# EVM

- ethereum virtual machine
- 스마트 컨트랙트를 실행하기 위한 가상 컴퓨터
- 블록체인 네트워크 노드에 포함
- 노드 끼리의 합의에 사용
- ByteCode 실행에 사용

# Solidty

- 스마트 컨트랙트 프로그래밍 언어
- 컴파일 하여 ByteCode를 생성
- ByteCode는 트랜잭션의 data로 저장되 사용

```json
{
  "difficulty": "200000",
  "gasLimit": "3100000",
  "alloc": {},
  "config": {
    "chainId": 55555555,
    "homesteadBlock": 0,
    "eip150Block": 0,
    "eip155Block": 0,
    "eip158Block": 0,
    "byzantiumBlock": 0,
    "constantinopleBlock": 0
  }
}
```

<!-- --------------------------------json 초기 설정 새로운 파일을 만듬---------------------------------- -->

```json
geth --datadir newGeth init newGenesis.json
```

<!-- --------------------------------json 초기 설정 새로운 파일을 만듬---------------------------------- -->

<!-- --------------------------------genesis 생성------------------------------------------------------- -->

- 추가된 2 옵션은 스마트 컨트랙트를 위한 옵션
- 합의 방법이 달라지면서 필요하게됨
<!-- --------------------------------genesis 생성------------------------------------------------------- -->

<!------------------------------------블록 서버 열기---------------------------------------------------- -->

```json
geth --datadir ~/newGeth --http --http.addr "0.0.0.0" --http.port 8888 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 55555555 --ws --ws.port 7777 --ws.origins "*" --nodiscover
```

<!-- nodiscover : 남이 내 노드를 못찾게 한다. -->
<!------------------------------------블록 서버 열기---------------------------------------------------- -->

- === maxpeers 0

# 계정 생성

```sh
# clif , personal
# personal : unlockAccount
# personal : newAccount
# sendTransaction : eth send Transaction과 같다.
geth --datadir ~/newGeth account new

Public address of the key:   0x98bA9C7A1730D47540778e9b4F7CaF435E71c82F
```

# Geth 실행 시 unlock

```sh
echo 1 >> ~/newGeth/password
```

- echo << cmd, bash , powershell에서 사용하는 console.log
- ">>" : 해당 파일에 출력 값을 저장

```json
geth --datadir ~/newGeth --http --http.port 8888 --http.corsdomain "*" --http.api "admin,miner,txpool,web3,personal,eth,net" --allow-insecure-unlock --syncmode full --networkid 55555555 --ws --ws.port 7777 --ws.origins "*" --nodiscover --unlock "0,1" --password ./newGeth/password
```

```json
new geth
0x8901d9595A2A871aD64f101243d55BBc360b8329

```

```sh
npm i -D prettier-plugin-solidity
```

```json
{
  "prettier.documentSelectors": ["**/*.sol"]
}
```

- setting.json에 해당 내용을 추가

# Solidity

```solidity
// SPDX-License-Identifier:MIT
// 라이센스 표기 << 어떤 라이센스 사용하는가? 필요함

pragma solidity ^0.8.15;

// 솔리디티 버전 설정, 크립토 좀비 0.5.15

contract Test {
  // contract : 자바스크립트 에서의 class와 같다.
  string text;

  constructor() {
    text = "Hi Block7";
  }

  function getText() public view returns (string memory) {
    // public : 외부에서 사용 가능한 데이터
    // view : 읽기 전용 데이터 처리
    // returns : 반환하는 데이터
    // memory : 함수 내에서만 변수 사용, 데이터를 외부에 저장하지 않음(지역 변수처리(없어도됨))
    return text;
  }

  function setText(string memory _value) public {
    text = _value;
  }
}
```

# 컴파일

```sh
npm i solc
npm solc --bin --abi ./test.sol
```

- solc : Solidity Compiler
- --bin : binary, transaction에 저장되는 실제 ByteCode
  - Solidity 등 우리가 작성한 코드를 EVM에서 실행할 수 있는 ByteCode로 변환(컴파일 한다.)
  - 해당 ByteCode는 트랜잭션에 저장
  - 해당 코드를 Receipt 내의 ContractAddress로 찾음
  - EVM이 알아서 코드를 실행
- --abi : Application Binary Interface, 스마트 컴트랙트 내의 함수와 매개변수 등을 json 형식으로 표기
  - abi는 데이터의 정확한 매칭(인코딩)을 위해서 사용
  - 어떤어떤 데이터(변수, 함수 , 메서드 프로퍼티)가 있는지 미리 정해두고 맞춘다.

```js
data = "0x12312312113";
// solc로 생성된 bin 파일 내의 모든 데이터
txObj = { from: eth.accounts[0], data, gas: 1000000 };
```

2. 트랜잭션 보내기

```sh
eth.sendTransaction(txObj)
```

3. 트랜잭션 확인하기

```sh
# 마이닝을 ㅎ
eth.getTransaction("0x")
# 마이닝을 안했을때는 null로 나옴(영수증)
eth.getTransactionReceipt("0x")

- getTransactionReceipt의 결과
  - getTransaction
```

- contranctAddress : CA
  - CA : 스마트 컨트랙트에 대한 주소
  - EOA : Externally Owned Account, 지갑 주소, 메타마스크/Geth 내의 지갑들을 뜻한다.
  - CA/EOA 둘 다 계정으로 분류된다.

4. 컨트랙트 생성(연결)

```js
contract = eth.contract([
  { inputs: [], stateMutability: "nonpayable", type: "constructor" },
  {
    inputs: [],
    name: "getText",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "string", name: "_value", type: "string" }],
    name: "setText",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
]);
```

- 매개변수로 abi로 추출된 데이터를 입력한다.

5. 컨트랙트에 CA 연결

```sh
instance = contract.at("0x1e9faa7bc99119464e43c0f17975c3548dda9e4f")
```

- at 메서드를 호출하며 ContractAddress를 매개변수로 전달
- 앞으로 스마트 컨트랙트 실행 시 instance 변수를 사용

6. 컨트랙트 실행하여 확인

```sh
instance.getText.call()
```

- Solidity에서 작성해둔 getText 메서드를 호출

7. set 메서드 호출

```sh
instance.setText("why so serious",{from:eth.accounts[0]})
# 값을 보낼때 마다 비용을 지불해야함
```

- 첫 매개변수로 값을 보내고 두번째 매개변수로 트랜잭션의 내용을 전달.
- 데이터가 바뀌었기 떄문에 채굴을 통해서 블록을 생성하여 적용

# EVM은 무료일까?

- 유료이기 때문에 Gas가 필요
- Evm 은 왜 유료일까? 잦은 변경을 막기 위해서, 남의 컴퓨터 쓰는데 무료로 쓸수 있을까?
- 이더리움 블록체인 네트워크에 노드(peer)가 하나일까?
  - 해킹이 참 쉬워진다.
