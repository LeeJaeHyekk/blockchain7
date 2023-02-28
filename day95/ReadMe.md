# Javascript에서 Solidity 컴파일 및 스마트 컨트랙트

```sh
npm i solc web3
```

- 기존에 썼던 방법

```sh
npx solc --bin --abi ./contracts/Test.sol
```

# Geth에서 생성한 지갑 계정 개인키 가져오기

- 필요 라이브러리

```sh
 npm i keythereum
```

```js
const compiled = JSON.parse(solc.compile(data));
const abi = compiled.contracts["Test.sol"].Test;
```
