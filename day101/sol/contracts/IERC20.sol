//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

interface IERC20 {
  // 이더리움의 표준토큰
  function totalSupply() external view returns (uint);

  // 토큰(코인)의 총 수량
  function balanceOf(address account) external view returns (uint);

  // 지갑 계정의 잔액(토큰)
  function transfer(address recipient, uint amount) external returns (bool);

  // 토큰(코인) 보내기
  function allowance(address owner, address spender) external returns (uint);

  // 권한을 위임 받은 토큰을 관리하는 데이터 공간
  function approve(address spender, uint amount) external returns (bool);

  //  권한을 위임하는 메서드
  // 메서드로 토큰에 대해 권한을 부여받은 지갑 계정(spender)가 위임받은 토큰을 다른 계정에 보낼때 사용
  function transferFrom(
    address spender,
    address recipient,
    uint amount
  ) external returns (bool);

  //   권한을 위임 받은 토큰에 대해 거래()

  event Transfer(address indexed from, address indexed to, uint amount);
  //   거래시 기록하는 이벤트
  event Approval(address indexed owner, address indexed spender, uint amount);
  //   권한 위림 시 기록하는 이벤트
}
