mkdir 폴더명
npm init -y
npm i truffle
npm i -D prettier-plugin-solidity
npx truffle init

# Interface 구현

- totalSupply() : 토큰의 총 수량 반환
- balanceIf() : 지갑 계정(account)의 잔액 반환
- transfer(recipient, amount) : 수령인(recipient)에게 n(amount)개의 토큰을 보낸다. 트랜잭션 발생
- allowance(owner, spender) : 현재 지갑 계정(owner)이 다른 누구(다른 지갑 계정 | CA)(spender)에게 얼마의 토큰에 대한 권한을 줬는지 반환
- approve(spender, amount) : allowance에서 확인할 수 있는 권한 위임을 실행하는 메서드, 누구(spender)에게 얼마(amount)만큼의 토큰에 대한 권한을 위임
- transferFrom(spender, recipient, amount) : 위임 받은 지갑계정(spender)이 누구(recipient)에게 얼마(amount)만큼의 토큰을 보낸다.
- Transfer(from, to, amount) : 누가(from) 누구(to) 에게 얼마 만큼의 토큰을 보냈는지 기록
- Approval : 누가(owner) 누구(spender)에게 얼마만큼 토큰 권한위임했는지 기록

### interface의 원칙

## 추가 설명

- 메서드 옵션
  - external : 해당 스마트 컨트렉트 내부에서 호출하지 못하고 외부에만 호출 하도록 설정
  - internal : 해당 스마트 컨트렉트 외부에서 호출하지 못하고 내부에서만 호출할수 있도록 설정
    - external 과 internal은 가시성이라고 부르고 외부에서 보이는지, 내부에서 보이는지를 설정
  - view : 해당 스마트 컨트렉트 변수(데이터)를 사용할 수 있지만 수정하지 못하도록 설정
  - pure : 해당 스마트 컨트렉트의 변수(데이터)를 사용할수도 수정할수도 없도록 설정
    - view와 pure는 외부에서 호출 시 gas를 소모하지 않는다.
- event 옵션

  - indexed: 이벤트를 받아올 시 검색 또는 필터링 할 수 있도록 설정
    - mySQL에서의 index와 같다.

- 익명함수
  - 받은 트랜잭션 내에 data가 없을때 실행된다. => 토큰을 보내는 트랜잭션일때, 오류 트랜잭션일 때
    - sendTransaction({from:from,to:to,value:value}) << Ether 보낼때
    - sendTransaction({from:from,data:data}) << 스마트 컨트랙트 실행 때
    - fallback() : 기존의 익명함수, value의 유무와 관계 없이 실행된다.
    - receive() : 추가된 익명함수, value가 있을때 실행된다.
