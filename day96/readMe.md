# truffle 사용법

- 기본설정

```bash
npm init -y
npm i truffle
npx truffle init
```

- npx sequelize init와 같이 폴더 파일이 자동으로 생성
- 폴더와 파일 설명
  - contracts: 스마트 컨트렉트 코드 작성 폴더
  - migrations : 배포 관련 코드 작성폴더
  - test : 테스트 코드 작성 폴더
  - truffle-config : 설정

# Solidity Prettier 설정

```bash
npm  i -D prettier-plugin-solidity
```

단 setting 후에 가능하다

- 컴파일

```bash
npx truffle compile

```

- 배포

```bash
npx truffle migration
```

- 파일 명은 번호
- 1_deploy_Test.js

```js
module.exports = function (deployer) {
  // deployer : truffle 이 제공하는 배포를 위한 객체
  deployer.deploy(test);
};
```

- truffle을 사용해서 확인

```bash
npx truffle console
Test.deployed().then(instance => test = instance)
```

- test.setText("넣고 싶은말")
  test.getText.call()

- Jest 테스트
  - test 폴더 내에 코드 작성
  - 명령어를 입력
  ```bash
  npx truffle test
  ```
- 생성된 폴더
  - build
