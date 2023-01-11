const merkle = require("merkle");
const SHA256 = require("crypto-js").SHA256;

class BlockHeader {
  version;
  merkleRoot;
  timestamp;
  difficulty;
  nonce;
  height;
  // private 키로 정의(생성)할 경우 키들이 객체에서 보이지 않는다.
  // 후에 통싱할 때 다른 처리를 하려 했으나 쉽게 가기 위해서 private를 취소하겠다.
  constructor(_data, _previousBlock) {
    this.version = "1.0.0";
    // 버전
    const merkleRoot = this.createMerkleRoot(_data);
    //  머클루트 생성 매서드 호출
    if (merkleRoot.isError) {
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else {
      console.log("merkle.value", merkleRoot.value);

      this.merkleRoot = merkleRoot.value;
      console.log("merkle", this.merkleRoot);
    }

    // this.merkleRoot = _data
    //   ? merkle("sha256").sync(_data).root()
    //   : "0".repeat(64);
    this.setTimestamp();
    //Date << 클래스 , now << static 정의돈 메서드
    // 이후에 체인에 블록을 추가하는 당시의 시점으로 블록 생성 시간을 정의하기 위해서 메서드를 만들었다.
    this.difficulty = 0;
    this.nonce = 0;
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
  }

  setTimestamp() {
    this.timestamp = Date.now();
  }
  createMerkleRoot(_data) {
    if (!Array.isArray(_data) || !_data.length) {
      // Array.isArray는 매개변수가 배열인지 확인한다.
      return { isError: true, msg: "data가 배열이 아님" };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }
}

class Block extends BlockHeader {
  previousHash;
  hash;
  data;

  constructor(_data, _previousBlock) {
    // 1-2
    super(_data, _previousBlock);
    // super는 부모 클래스의 constuctor를 호출한다.
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    // this.hash =
    //   _data && _previousBlock ? Block.createHash(this) : "0".repeat(64);
    if (this.merkleRoot) {
      // merkleRoot가 있음 << 정상적인 배열로 데이터가 입력(전달) 되었다.
      this.hash = Block.createHash(this);
    } else {
      // merkleRoot 가 없음 << 배열이 아닌 데이터가 입력(전달)되었다.
      this.hash = "";
      // 이후 오류 발생 여부 확인용
    }
    this.data = _data;
  }

  static createHash(_block) {
    // const keys = Object.keys(_block);
    // // object 클래스에서 keys 메서드를 사용하여 매개변수로 전달한 객체의 key 들을 가져온다.
    // console.log(keys);
    let tempStr = "";
    // 블록의 정보를 임시로 합칠 string
    // _block.setTimestamp();
    // 이 과정이 끝나면 체인에 연결하게 된다.
    // for (let i = 0; i < keys.length; i++) {
    //   console.log(_block[keys[i]]);
    //   tempStr += _block[keys[i]];
    // }
    // tempStr += _block.version;
    // tempStr += _block.merkleRoot;
    // tempStr += _block.timestamp;
    // tempStr += _block.height;
    // tempStr += _block.difficulty;
    // tempStr += _block.nonce;
    // tempStr += _block.previousHash;

    // hash는 현재 만들고 있는 키라서 추가하지 않는다.
    // data는 merkleRoot로 합쳐져 있기 때문에 merkleRoot로 대체한다.
    const keys = Object.keys(_block);
    // Object.keys => 객체의 키들을 배열로 가져온다.(반환한다.)

    for (let i = 0; i < keys.length; i++) {
      console.log("key", keys);
      if (keys[i] === "hash" || keys[i] === "data") {
        console.log("key", keys);
        continue;
        // for , while 같은 반복문에서 아래의 코드를 실행하지 않고 위로 올라간다.
        // i 가 0 일떄 continue 시 아래의 코드를 실행하지 않고 위로 올라가 i++ 부터 실행하게 된다. | 건너뛴다.
      }
      tempStr += _block[keys[i]];
    }
    return SHA256(tempStr).toString().toUpperCase();
  }
  static isValidBlock(_newBlock, _previousBlock) {
    //  생성된 블록이 정상인지 확이해 보자
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다." };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전블록의 해시와 새로운 블록의 이전 hash가 다르다.",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "해시 생성중 오류발생" };
    }
    return { isError: false, value: _newBlock };
  }
}
const temp = new Block(["a"]);
// 1-1

// Block.createHash(temp);

module.exports = Block;

// key[keys[i]]
