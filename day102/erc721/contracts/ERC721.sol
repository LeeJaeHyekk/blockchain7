//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./IERC721.sol";
import "./IERC721Metadata.sol";

contract ERC721 is IERC721, IERC721Metadata {
  string public override name;
  string public override symbol;
  mapping(address => uint) private _balances;
  mapping(uint => address) private _owners;
  mapping(uint => address) private _tokenApprovals;
  mapping(address => mapping(address => bool)) private _operatorApprovals;

  constructor(string memory _name, string memory _symbol) {
    name = _name;
    symbol = _symbol;
  }

  function balanceOf(address _owner) public view override returns (uint) {
    // balanceOf는 파마미터로 넘어온 주소가 보유하고 있는 토큰을 조회하게 해주는 함수
    require(_owner != address(0), "ERC721: address zero is not a valid owner");
    // require(확인할 조건, false 시 로그)
    return _balances[_owner];
    //
  }

  //   소유자의 토큰 총 개수

  function ownerOf(uint _tokenId) public view override returns (address) {
    address owner = _owners[_tokenId];
    require(owner != address(0), "ERC721: invaild tokenId");
    return owner;
  }

  //   토큰의 소유자
  function transferFrom(
    address _from,
    address _to,
    uint _tokenId
  ) external override {
    require(_isApproveOrOwner(_from, _tokenId));
    require(_from != _to);
    _beforeTokenTransfer(_from, _to, _tokenId);
    _balances[_from] -= 1;
    _balances[_to] += 1;
    _owners[_tokenId] = _to;
    emit Transfer(_from, _to, _tokenId);
  }

  function approve(address _to, uint _tokenId) external override {
    address owner = _owners[_tokenId];
    require(_to != owner, "ERC721: approval to current owner");
    require(
      msg.sender == owner || isApprovedForAll(owner, msg.sender),
      "ERC721: approve caller is not owner or approved for all"
    );
    _tokenApprovals[_tokenId] = _to;
    emit Approval(owner, _to, _tokenId);
  }

  function setApprovalForAll(
    address _operator,
    bool _approved
  ) external override {
    require(msg.sender != _operator, "ERC721: approve to caller");
    _operatorApprovals[msg.sender][_operator] = _approved;
    emit ApprovalForAll(msg.sender, _operator, _approved);
  }

  function getApproved(uint _tokenId) public view override returns (address) {
    require(_owners[_tokenId] != address(0), "ERC721: invalid tokenId");
    return _tokenApprovals[_tokenId];
  }

  function isApprovedForAll(
    address _owner,
    address _operator
  ) public view override returns (bool) {
    return _operatorApprovals[_owner][_operator];
  }

  function _isApproveOrOwner(
    address _spender,
    uint _tokenId
  ) private view returns (bool) {
    address owner = _owners[_tokenId];
    return (_spender == owner ||
      isApprovedForAll(owner, _spender) ||
      getApproved(_tokenId) == _spender);
  }

  function tokenURI(
    uint tokenId
  ) external view virtual override returns (string memory) {}

  function _mint(address _to, uint _tokenId) public {
    require(_to != address(0));
    address owner = _owners[_tokenId];
    require(owner == address(0));
    _beforeTokenTransfer(address(0), _to, _tokenId);
    _balances[_to] += 1;
    _owners[_tokenId] = _to;
    emit Transfer(address(0), _to, _tokenId);
  }

  function _beforeTokenTransfer(
    address _from,
    address _to,
    uint _tokenId
  ) internal virtual {}
}
