// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./NftToken.sol";

contract SaleToken {
  NftToken public Token;

  // 배폭된 NFT 토큰 컨트렉트를 정의
  // 거래 코드를 구현

  constructor(address _tokenAddress) {
    Token = NftToken(_tokenAddress);
  }

  struct TokenInfo {
    // 토큰 정보 구조체
    uint tokenId;
    uint Rank;
    uint Type;
    uint price;
    // 가격, 0 일때 판매중이 아닌것
  }
  mapping(uint => uint) public tokenPrices;
  // tokenId =>price, NFT 가격 매핑
  uint[] public SaleTokenList;

  // 판매중인 NFT의 tokenId 목록
  function SalesToken(uint _tokenId, uint _price) public {
    // 판매 등록
    address tokenOwner = Token.ownerOf(_tokenId);
    // NFT의 소유자 찾기
    require(tokenOwner == msg.sender);
    // NFT 소유자가 판매 등록 했는가?
    // owner = 주인  // sender = 사용자
    require(_price > 0);
    // 가격이 0 초과인가?
    require(Token.isApprovedForAll(msg.sender, address(this)));
    // NFT에 대한 권한이 현재 컨트렉트에 있는가?
    // OpenSea를 기준으로 할때 setApprovedForAll 메서드가 이미 있다.
    tokenPrices[_tokenId] = _price;
    // 가격 맵핑
    SaleTokenList.push(_tokenId);
    // 판매 목록에 추가
  }

  function PurchaseToken(uint _tokenId) public payable {
    // 구매
    address tokenOwner = Token.ownerOf(_tokenId);
    // NFT 소유자 찾기
    require(tokenOwner != msg.sender);
    // 판매자가 구매하려고 하는가?
    require(tokenPrices[_tokenId] > 0);
    // 가격 확인, 판매중인가?
    require(tokenPrices[_tokenId] <= msg.value);
    // 가격 확인, 구매자가 충분한 이더를 보냈는가?

    payable(tokenOwner).transfer(msg.value);
    // 현재 컨트렉트가 NFT 소유자에게 구매자로부터 받은 이더 전달
    Token.transferFrom(tokenOwner, msg.sender, _tokenId);
    // NFT 소유자로부터 구매자에게 NFT 전송

    tokenPrices[_tokenId] = 0;
    // 가격 0, 판매중지
    popSaleToken(_tokenId);
    // 판매 목록에서 제외
  }

  function cancelSaleToken(uint _tokenId) public {
    // 판매취소
    address tokenOwner = Token.ownerOf(_tokenId);

    require(tokenOwner == msg.sender);
    require(tokenPrices[_tokenId] > 0);

    tokenPrices[_tokenId] = 0;
    popSaleToken(_tokenId);
  }

  function popSaleToken(uint _tokenId) private returns (bool) {
    for (uint i = 0; i < SaleTokenList.length; i++) {
      if (SaleTokenList[i] == _tokenId) {
        SaleTokenList[i] = SaleTokenList[SaleTokenList.length - 1];
        SaleTokenList.pop();
        return true;
      }
    }
    return false;
  }

  function getSaleTokenList() public view returns (TokenInfo[] memory) {
    // 판매중인 전체 NFT를 가져오기 메서드
    require(SaleTokenList.length > 0);
    // NFT 없는지 확인
    TokenInfo[] memory list = new TokenInfo[](SaleTokenList.length);
    for (uint i = 0; i < SaleTokenList.length; i++) {
      uint tokenId = SaleTokenList[i];
      uint Rank = Token.getTokenRank(tokenId);
      uint Type = Token.getTokenType(tokenId);
      uint price = tokenPrices[tokenId];
      list[i] = TokenInfo(tokenId, Rank, Type, price);
    }
    return list;
  }

  function getOwnerTokens(
    address _tokenOwner
  ) public view returns (TokenInfo[] memory) {
    uint balance = Token.balanceOf(_tokenOwner);
    require(balance > 0);
    TokenInfo[] memory list = new TokenInfo[](balance);
    for (uint i = 0; i < balance; i++) {
      uint tokenId = Token.tokenOfOwnerByIndex(_tokenOwner, i);
      // Owner 주어진 토큰 목록 에서 소유한 토크 ID를 반환합니다.
      uint Rank = Token.getTokenRank(tokenId);
      uint Type = Token.getTokenType(tokenId);
      uint price = tokenPrices[tokenId];
      list[i] = TokenInfo(tokenId, Rank, Type, price);
    }
    return list;
  }
}
