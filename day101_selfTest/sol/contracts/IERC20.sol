// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
  // 코인 총 수량
  function totalSupply() external view returns (uint);

  // 지갑 계정의 잔액 (매개변수 : account)
  function balanceOf(address account) external view returns (uint);

  // 토큰 보내기
  function transfer(address recipient, uint amount) external returns (bool);

  // 권한을 위임받은 토큰을 관리하는 공간
  function allowance(address owner, address spender) external returns (uint);

  // 권한을 위임하는 메서드
  function approve(address spender, uint amount) external returns (bool);

  // 권한을 위임 받은 토큰에 대해 거래(보내기)
  function transferFrom(
    address spender,
    address recipient,
    uint amount
  ) external returns (bool);

  // 거래 시 기록하는 이벤트
  event Transfer(address indexed from, address indexedto, uint amount);
  // 권한 위임 시 기록하는 이벤트
  event Approval(address indexed owner, address indexed spender, uint amount);
}
