//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./ERC721.sol";

contract ERC721Enumberable is ERC721 {
  uint[] private _allTokens;
  mapping(address => mapping(uint => uint)) private _ownedTokens;
  mapping(uint => uint) private _ownedTokensIndex;

  constructor(
    string memory _name,
    string memory _symbol
  ) ERC721(_name, _symbol) {}

  function mint(address _to) public {
    _mint(_to, _allTokens.length);
  }

  function totalSupply() public view returns (uint) {
    return _allTokens.length;
  }

  function _beforeTokenTransfer(
    address _from,
    address _to,
    uint _tokenId
  ) internal override {
    if (_from == address(0)) {
      _allTokens.push(_allTokens.length);
      // latestToken iD = 0;
    } else {
      // balance Of() == 가지고 있는 토큰수를 반환합니다.
      uint latestTokenIndex = ERC721.balanceOf(_from) - 1; // 코인수 -1 을 last인덱스로 설정
      uint tokenIndex = _ownedTokensIndex[_tokenId]; // 토큰인덱스는 보낸사람(토큰아이디의 값)으로 설정
      if (tokenIndex != latestTokenIndex) {
        // 만약 토큰 인덱스하고 마지막토큰 인덱스하고 같지 않다면(보낼려는 값이 마지막값이 아니라면)

        uint latestTokenId = _ownedTokens[_from][latestTokenIndex]; // 객체 형식이라 키와 값으로 이루어져있으며, {키= "from/to",값 = "lastIndex값"}
        _ownedTokens[_from][tokenIndex] = latestTokenId; // latestTokenId == owner1 이 가지고 있는 토큰 총량
        _ownedTokensIndex[latestTokenId] = tokenIndex; // 토큰의 인덱스는 ownedTokenIndex의 마지막값
      }
      delete _ownedTokens[_from][latestTokenIndex];
      delete _ownedTokensIndex[_tokenId]; // tokenid =3
    }
    uint length = ERC721.balanceOf(_to);
    _ownedTokens[_to][length] = _tokenId;
    _ownedTokensIndex[_tokenId] = length;
  }

  function tokenByIndex(uint _index) public view returns (uint) {
    require(_index < _allTokens.length);
    return _allTokens[_index];
  }

  function tokenOfOwnerByIndex(
    address _owner,
    uint _index
  ) public view returns (uint) {
    require(_index < balanceOf(_owner));
    return _ownedTokens[_owner][_index];
  }
}
