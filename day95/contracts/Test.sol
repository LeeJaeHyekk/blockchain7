// SPDX-License-Identifier:MIT
pragma solidity ^0.8.15;

contract Test {
  string text;

  constructor() {
    text = "Hi Block7";
  }

  function getText() public view returns (string memory) {
    return text;
  }

  function setText(string memory _value) public {
    text = _value;
  }
}
// [],[] 숫자를 입력받고 , switch 문으로 사칙연산을 떄려야 되는데...
