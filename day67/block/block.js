const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader {
  #version;
  #merkleRoot;
  #timestamp;
  #difficulty;
  #nonce;
  #height;
  constructor(_data, _previousBlock) {
    this.#version = "1.0.0";
    this.#merkleRoot = _data
      ? merkle("sha256").sync(_data).root()
      : "0".repeat(64);
    this.setTimestamp();
    //Date << 클래스 , now << static 정의돈 메서드
    // 이후에 체인에 블록을 추가하는 당시의 시점으로 블록 생성 시간을 정의하기 위해서 메서드를 만들었다.
    this.#difficulty = 0;
    this.#nonce = 0;
    this.#height = _previousBlock ? _previousBlock.height + 1 : 0;
  }
  get version() {
    return this.#version;
  }
  get merkleRoot() {
    return this.#merkleRoot;
  }
  get timestamp() {
    return this.#timestamp;
  }
  get difficulty() {
    return this.#difficulty;
  }
  get nonce() {
    return this.#nonce;
  }
  get height() {
    return this.#height;
  }

  setTimestamp() {
    this.#timestamp = Date.now();
  }
}
class Block extends BlockHeader {
  #previousHash;
  #hash;
  #data;

  constructor(_data, _previousBlock) {
    // 1-2
    super(_data);
    // super는 부모 클래스의 constuctor를 호출한다.
    this.#previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    this.#hash =
      _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    this.#data = _data;
  }
  get previousHash() {
    return this.#previousHash;
  }
  get hash() {
    return this.#hash;
  }
  get data() {
    return this.#data;
  }
  static createHash(_block) {
    // const keys = Object.keys(_block);
    // // object 클래스에서 keys 메서드를 사용하여 매개변수로 전달한 객체의 key 들을 가져온다.
    // console.log(keys);
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string
    _block.setTimestamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.
    // for (let i = 0; i < keys.length; i++) {
    //   console.log(_block[keys[i]]);
    //   tempStr += _block[keys[i]];
    // }
    tempStr += _block.version;
    tempStr += _block.merkleRoot;
    tempStr += _block.timestamp;
    tempStr += _block.height;
    tempStr += _block.difficulty;
    tempStr += _block.nonce;
    tempStr += _block.previousHash;
    // hash는 현재 만들고 있는 키라서 추가하지 않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체한다.
    return SHA256(tempStr).toString().toUpperCase();
  }
}
const temp = new Block(["a"]);
// 1-1

Block.createHash(temp);

module.exports = Block;

// key[keys[i]]
