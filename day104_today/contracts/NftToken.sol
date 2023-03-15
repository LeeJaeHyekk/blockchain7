// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "../node_modules/@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "../node_modules/@openzeppelin/contracts/access/Ownable.sol";
import "../node_modules/@openzeppelin/contracts/utils/Strings.sol";

contract NftToken is ERC721Enumerable, Ownable {
  uint public constant MAX_TOKEN_COUNT = 1000;
  //   NFT의 최대 발행량
  uint public mint_price = 1 ether;
  //   민팅 가격 == 사용자가 NFT를 올릴때마다 1이더씩 받는다.
  string public metadataURI;
  //   NFT의 tokenId 값에 매칭되는 tokenURI의 앞부분
  struct TokenData {
    // 토큰의 데이터
    uint Rank;
    uint Type;
  }
  mapping(uint => TokenData) public TokenDatas;
  //   {tokenId : TokenData} 를
  uint[4][4] public tokenCount;

  //   토큰 데이터에 따른 NFT 토큰 발행량 확인용, [Rank][Type]

  constructor(
    string memory _name,
    string memory _symbol,
    string memory _metadataURI
  ) ERC721(_name, _symbol) {
    metadataURI = _metadataURI;
  }

  function tokenURI(
    // tokenURI 생성
    uint _tokenId
  )
    public
    view
    override
    returns (
      // tokenId를 매개변수로 받음
      string memory
    )
  {
    string memory Rank = Strings.toString(TokenDatas[_tokenId].Rank);
    string memory Type = Strings.toString(TokenDatas[_tokenId].Type);
    // string 라이브러리를 사용해서 string 한다.
    return string(abi.encodePacked(metadataURI, "/", Rank, "/", Type, ".json"));
    // NFT에 대한 데이터를 저장한 URL 주소를 찾아 데이터를 받아올 수 있도록 구현됨
  }

  function mintToken() public payable {
    // NFT 셍성 메서드
    require(msg.value >= mint_price);
    // 생성 시 이더를 받고, 가격을 확인한다. 돈 받고 NFT를 만들어 준다.
    require(MAX_TOKEN_COUNT > ERC721Enumerable.totalSupply());
    // NFT 최대 개수 확인, 현재 1000개 이하로만 생성가능
    uint tokenId = ERC721Enumerable.totalSupply() + 1;
    // NFT 총 수량을 기준으로 ID 생성
    TokenData memory random = getRandomTokenData(msg.sender, tokenId);
    // TokenData == 구조체(자료형) , 토큰 데이터는 무작위 Rank와 Type을 만든다.
    TokenDatas[tokenId] = random;
    // 생성한 토큰 데이터를 ID와 매칭하여 저장
    tokenCount[random.Rank - 1][random.Type - 1] += 1;
    // Rank와 Type을 기준으로 NFT 수량 정리
    payable(Ownable.owner()).transfer(msg.value);
    // 받은 이더 컨트랙트 소유자에게 전달(NFT 토큰 컨트렉트 등록자)
    _mint(msg.sender, tokenId);
    // NFT 생성(민팅)
  }

  function getRandomTokenData(
    address _owner,
    uint _tokenId
  ) private pure returns (TokenData memory) {
    uint randomNum = uint(keccak256(abi.encodePacked(_owner, _tokenId))) % 100;
    TokenData memory data;
    if (randomNum < 5) {
      data.Rank = 4;
      if (randomNum == 1) {
        data.Type = 1;
      } else if (randomNum == 2) {
        data.Type = 2;
      } else if (randomNum == 3) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else if (randomNum < 13) {
      data.Rank = 3;
      if (randomNum < 7) {
        data.Type = 1;
      } else if (randomNum < 9) {
        data.Type = 2;
      } else if (randomNum < 11) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else if (randomNum < 37) {
      data.Rank = 2;
      if (randomNum < 19) {
        data.Type = 1;
      } else if (randomNum < 25) {
        data.Type = 2;
      } else if (randomNum < 31) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    } else {
      data.Rank = 1;
      if (randomNum < 52) {
        data.Type = 1;
      } else if (randomNum < 68) {
        data.Type = 2;
      } else if (randomNum < 84) {
        data.Type = 3;
      } else {
        data.Type = 4;
      }
    }
    return data;
  }

  function setMetadataURI(string memory _uri) public onlyOwner {
    // metadataURI를 변경하는 메서드
    // 컨트렉트 등록자만 수정할 수 있다(owner == msg.sneder)
    // Ownable에 포함된 onlyOwner라는 접근제한자를 사용한다.
    // onlyOwner를 실행하고 문제가 없으면 메서드를 실행하고 문제가 있으면 메서드를 실행하지 않는다.
    metadataURI = _uri;
  }

  function getTokenRank(uint _tokenId) public view returns (uint) {
    return TokenDatas[_tokenId].Rank;
  }

  function getTokenType(uint _tokenId) public view returns (uint) {
    return TokenDatas[_tokenId].Type;
  }

  function getTokenCount() public view returns (uint[4][4] memory) {
    //  [Rank][Type] 구조로 이루어진걸 개수 셈한다.
    return tokenCount;
  }
}
