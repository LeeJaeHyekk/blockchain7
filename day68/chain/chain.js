const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들꺼다.
  #chain;
  //   아무 데이터, 정보 등등을 체인에 놓지 못하도록 외부에서 접근을 막기위해 private로 설정
  constructor() {
    this.#chain = [];
    const genesis = new Block([`제네시스 블록 ${new Date()}`]);
    console.log(new Date());
    this.#chain.push(genesis);
  }
  get chain() {
    return [...this.#chain];
    // 외부에서 #chain 접근 시 새로운 배열을 만들어서 준다.(반환단다.)
  }
  get lastBlock() {
    return this.#chain[this.#chain.length - 1];
  }
  addBlock(_data) {
    const newBlock = new Block(_data, this.lastBlock);
    // 제네시스 블록만 있을때 체인의 길이는 1
    // - 제네시스 블록의 인덱스는
    // const isValid = Block.isValidBlock(newBlock, this.lastBlock);
    // if (isValid.isError) {
    //   console.error(isValid.msg);
    //   return null;
    // } else {
    //   this.#chain.push(newBlock);
    //   return newBlock;
    // }
    // this.#chain.push(newBlock);
    return this.add2Chain(newBlock);
  }
  // chain = [1,2,3] => 4번 블록을 추가한다.
  // 4번 블록은 3번 블록을 알고 있어야 한다.(previousHash)
  // chain 기준으로 2번 인덱스의 블록 << chain의 길이에서 1을 빼면 마지막 인덱스가 나온다
  // 마지막 인덱스에 해당하는 블록을 가져와서 사용한다.
  add2Chain(_newBlock) {
    const isValid = Block.isValidBlock(_newBlock, this.lastBlock);
    if (isValid.isError) {
      console.error(isValid.msg);
      return null;
    } else {
      this.#chain.push(_newBlock);
      return _newBlock;
    }
  }
}

// const chain = new Chain();
// // console.log(chain.chain);

// const block = new Block(["qwer"], chain.lastBlock);

// chain.addBlock(["adasd"]);
// chain.addBlock(["45646"]);
// chain.addBlock(["678dfg"]);

// chain.add2Chain(block);

// console.log(chain.chain);
// chain.chain.push({ data: "???" });
// console.log(chain.chain);
// const a = [];
//  a => 어떤 위치에 [] 이라는 값을 넣었다. 그 어떤 위치의 이름이 a다
//  어떤 위치는 메모리, 컴퓨터 상에서 어떤 용량
// const b = a;
module.exports = Chain;
