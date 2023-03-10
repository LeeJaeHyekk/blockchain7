# ERC20 토큰을 라이브러리로 가져오기

```js
contract B7Token is ERC20 {
    // 상속하고
  constructor(
    string memory _name,
    string memory _symbol,
    uint256 _amount
  ) ERC20(_name, _symbol) {
    // erc20 의 contractor를 호출한다.
    // javascript에서의 super와 같다.
    _mint(msg.sneder, _amount * 10 ** 18);
  }}
```
