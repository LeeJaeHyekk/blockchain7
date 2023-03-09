//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./ERC20.sol";

contract GoodiToken is ERC20 {
  address public owner;
  uint public ethCanBuy = 100;

  // 내 토큰의 화폐가치

  constructor(string memory _name, string memory _symbol, uint256 _amount) {
    owner = msg.sender;
    name = _name;
    symbol = _symbol;

    mint(_amount * 10 ** decimals);
  }

  receive() external payable {
    // 익명 함수이다.
    require(msg.value != 0);
    // 트랜잭션에 value가 없으면 멈춘다.
    uint amount = msg.value * ethCanBuy;
    // ether를 기준으로, 토큰으로 변환한다.
    require(balances[owner] >= amount);
    //  발행자의 지갑 계정에서 트랜잭션 보낸 지갑 계정에 토큰을 보낸다.
    balances[owner] -= amount;
    balances[msg.sender] += amount;
    if (msg.sender == owner) {
      // 만약 발행자가 트랜잭션을 보냈다면 토큰을 추가로 발행한다.
      mint(amount);
    }
    emit Transfer(owner, msg.sender, amount);
  }
}
