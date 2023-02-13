# web3

    - Wold Wide Web의 세대중 하나이다.

## Web1

- html을 이용한 정적 웹페이지
- DB가 없이 파일에 데이터를 저장 => 데이터를 수정하기 힘들었다.
- 읽기 전용 웹이였다.

## Web2

- Wold Wide Web의 2세대
- 데이터를 일괄적으로 검색 , 분류가 가능 => 위키 백과
- 사용자의 입력에 따라 웹피에지가 변화 => 사용자가 데이터를 수정하기 용이 했다.
- API 통신 사용

## Web3

- 3D 그래픽, 탈중앙화(블록체인) 등
- 사용자의 검색 / 분석을 통해 컨텐츠를 생성 / 공유 / 연결
- 중간자를 통해 공개 || 비공개로 사용할 수 있어서 신뢰할 수 없는 데이터를 제공 => 개인정보를 더 안전하게 저장 가능 => 읽고 쓰고 실행하는 웹
  => 현재 나오고, 발전하고 있는 모든 기술을 포함한다 => 개념이 애매하다

# Metamask in Javascript

- Web3 라이브러리를 사용하기 전에 메타마스트에서 기본적으로 제공해주는 객체부터 사용해 보자

  - 블록체인 네트워크는 가냐슈 사용

- 아래의 etherum 객체는 어디까지나 메타마스크 확장 프로그램에 연결된다.
- 메타마스크 객체
- 이전까지의 axios 등을 사용한 요청 방식

  ```mermaid
  flowchart
  A[browser]
  B[blockchain network]
  A-->B
  ```

- ethereum 객체 사용시 요청 방식

  ```mermaid
  flowchart
  A[browser]
  B[blockchain network]
  C[MetaMask]
  A-->B-->C
  ```

이벤트 등록

```js
ethereum.on("connect", (connectInfo) => {
  console.log(connectInfo);
});
```

- connect : 연결 됬을때 실행

```js
ethereum.on("conncet",handler:function(connectInfo:{chainId:string;}):void)
```

- disconnect : 연결이 끊겼을때

```js
ethereum.on("conncet",handler:(error:ProviderRpcError)=> void)
interface ProciderRpcError extends Error{
  code: number;
  data?:unkouwn;
}
```

- accountsChanged : 계정 변경되었을 때

```js
ethereum.on("accountsChanged", handler:(accounts:Array<string>) => void)

```

- chainChanged : 블록체인 네트워크(체인) 변경되었을 때

```js
ethereum.on("chainChanged",handler:(chainId:string)=> void)
```

- 메타마스크의 잔액 요청

```JS
ethereum.on()
ethereum.request({
  method:"eth_getBalance",
  params:["0x144B210CFD706A992726D58dB87075391f4Ab10a"],
})
```

- eth_getBalance
  - 잔액조회
  ```js
  const args = {
    method: "eth_getBalance",
    params: ["지갑 주소"],
  };
  ```
- eth_chainId

  - 체인 아이디 조회

  ```js
  const args = {
    method: "eth_chinId",
  };
  ```

- eth_requestAccounts
  - 메타 마스크확장 프로그램의 계정 조회
  - 보안 정책 상의 문제로 현재 선택한 계정 주소만을 가져온다.
  ```js
  const args = {
    method: "eth_requestAccounts",
  };
  ```
