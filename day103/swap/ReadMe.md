# 토큰 스왑

- token swap : 이름 그대로 토큰을 다른 토큰으로 변경
- 보통 이전 토큰을 새로운 토큰으로 교환
- 거래소에서 '스왑 기간', '스왑 지원 거래소', '마이그레이션 지원' 등으로 토큰 스왑 지원을 표기한다.
- 토큰의 업데이트, 돈을 버기 위한 방법

```js
contract EthSwap {
  ERC20 public token;
// 기존에 만든 토큰을 저장하여 사용
  uint public rate = 100;
// 1 Ether == 100토큰
  constructor(ERC20 _token) {
    // ERC20 토큰 생성 시 CA를 받아서 바로 생성할 수 있다.
    token = _token;
    // deployer.deploy('token','CA 전달')
  }
}

```

```js

  function getToken() public view returns (address) {
    // 토큰 받아온다.
    return address(token);
    // 토큰의 CA를 반환한다.
  }
```

```js
function getSwapBalance() public view returns (uint) {
    // 트랜잭션 보낸 계정의 토큰 잔액을 확인한다.
    return token.balanceOf(msg.sender);
  }
```

```js
function getThisAddress() public view returns (address) {
    // 현재 스마트 컨트렉트(EthSwap)의 CA를 반환한다.
    return address(this);
  }
```

```js
 function getMsgSender() public view returns (address) {
    return msg.sender;
  }
// 트랜잭션 만든 사람
  function getTokenOwner() public view returns (address) {
    return token._owner;
  }
//   토큰 배포자를 반환한다. 즉, 토큰에 대한 스마트 컨트렉트 등록자
```

```js
 function buToken() public payable {
    //  Ether로 토큰을 산다.
    uint256 tokenAmount = msg.value * rate;
    //  보낸 Eter => 토큰으로
    require(token.balanceOf(address(this))
    // 현재 컨트렉트에 토큰이 트랜잭션 보낸 계정에 줄 만큰 있는지 확인
    >= tokenAmount);
    token.transfer(msg.sender, tokenAmount);
    // 토큰 보내기
  }
```

```js
 function sellToken(uint256 _amount) public payable {
    // 토큰으로 ether를 산다.
    require(token.balanceOf(msg.sender) >= _amount);
    // 트랜잭션 보낸 계정의 토큰 잔액을 확인
    uint etherAmount = _amount / rate;
    // 토큰을 기준으로 ether를 계산
    require(address(this).balance >= etherAmount);
    // 현재 컨트렉트에 충분한 ether가 있는지 확인
    token.transferFrom(msg.sender, address(this), _amount);
    // 토큰을 트랜잭션 보낸 계정에서 컨트랙트로 전송
    payable(msg.sender).transfer(etherAmount);
    // ether 트랜잭션 보낸 계정에게 전송
  }
```

- swap 스마트 컨트렉트는 토큰의 변경을 위해 사용하기 때문에 거래 관련 내용만 존재
- address(스마트 컨트랙트) << 전달된 스마트 컨트렉트의 CA를 가져온다
<!-- 기존에 블록에 등록된 토큰을 변경할 수 없기 때문에 -->

```json
{
  "name": "DOG NFT",
//   NFT 이름
  "description": "DOG NFT with Pinata",
//   NFT 설명
  "imge": "https://gateway.pinata.cloud/ipfs/QmXHpop5S8iDsJ9KDLgQd112CjbqP1TKTZCT4tQwELvCRG",
//   NFT 이미지 주소
// 주소 + pinata 웹페이지에서의 파일의 CID
// CID == URI
  "attributes": [
    // Levels에서 출력되는 내용
    {
      "trait_type": "Rank",
    //   카테고리 이름
      "value": 1
    //   값
    },{
        "trait_type",
         "value": 1
    }

  ]
}

```
