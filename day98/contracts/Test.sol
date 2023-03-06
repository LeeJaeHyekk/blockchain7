// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

contract Test {
  int num;
  string text;
  int[] numArr;
  string[] textArr;
  address public owner;
  mapping(string => uint) public balance;

  constructor(string memory _text) {
    num = 1;
    text = "testing";
    owner = msg.sender;
    text = _text;
  }
}
