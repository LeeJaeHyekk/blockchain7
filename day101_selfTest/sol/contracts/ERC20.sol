// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "./IERC20.sol";

contract ERC20 is IERC20 {
  string public name;
  string public symbol;
  uint8 public decimals = 18;
}
