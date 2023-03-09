//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./IERC20.sol";

// IERC20을 가져온다.

contract ERC20 is IERC20 {
  // is는 상속받는 옵션 , extends
  string public name;
  string public symbol;
  uint8 public decimals = 18;
  uint public override totalSupply;
  // 인터페이스에서 선언된 함수는 기본적으로 virtual 옵션을 갖는다.
  //   vitrual 옵션이 있는 메서드를 상속받을 경우 override 옵션을 추사해야한다.
  //   상속할때 상속받는 컨트렉트에서 메서드를 다시 작성하여 덮어쓸 경우 상속하는 메서드는 virtual , 상속받는 메서드는 override 옵션을 가져야 한다.
  mapping(address => uint) public balances;
  mapping(address => mapping(address => uint)) public override allowance;

  //   {address :{address : uint}}
  function balanceOf(address account) external view override returns (uint) {
    return balances[account];
  }

  function transfer(
    address recipient,
    uint amount
  ) external override returns (bool) {
    balances[msg.sender] -= amount;
    balances[recipient] += amount;
    emit Transfer(msg.sender, recipient, amount);
    return true;
  }

  function approve(
    address spender,
    uint amount
  ) external override returns (bool) {
    allowance[msg.sender][spender] = amount;
    emit Approval(msg.sender, spender, amount);
    return true;
  }

  // msg.sender, 트랜잭션을 보낸 지갑계정의 토큰을 spender에게 amount만큼 사용할 수 있도록 권한을 위임한다.
  function transferFrom(
    address sender,
    address recipient,
    uint amount
  ) external override returns (bool) {
    require(allowance[sender][msg.sender] >= amount);
    allowance[sender][msg.sender] -= amount;
    balances[sender] -= amount;
    balances[recipient] += amount;
    emit Transfer(sender, recipient, amount);
    return true;
  }

  function mint(uint amount) internal {
    // 토큰 발행 메서드
    balances[msg.sender] += amount;
    // 트랜잭션을 보낸 지갑 계정에 원하는 만큼 토큰 추가
    totalSupply += amount;
    // 총 수량 추가
    emit Transfer(address(0), msg.sender, amount);
    // address(0)은 주소에서의 null을 뜻한다.
  }

  function burn(uint amount) external {
    // 토큰 삭제 메서드, 소각한다고 말한다.
    balances[msg.sender] -= amount;
    //
    totalSupply -= amount;
    emit Transfer(msg.sender, address(0), amount);
  }
}
