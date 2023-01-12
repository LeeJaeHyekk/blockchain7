const Block = require("../block/block");

class Chain {
  // 체인은 배열로 만들꺼다.
  #chain;
  //   아무 데이터, 정보 등등을 체인에 놓지 못하도록 외부에서 접근을 막기위해 private로 설정
  // 난이도를 통해서 문제(퀴즈)를 풀게 되고 , 문제 해결된 블록을 체인에 추가 하게 된다. << 풀이 과정을 마이닝이라고 한다.
  // 왜 문제 풀이를 하는가? 블록의 생성 시간을 조절하기 위해서
  // 결국 난이도는 블록의 생성 시간을 조절하기 위해서 높아졌다가 낮아졌다가 하게 된다.
  // 난이도 조절에 대한 조건들을 설정하자.
  #DIFFICULTY_ADJUSTMENT_INTERVAL = 10;
  // 난이도 조절을 결정하는 블록의 갯수(난이도 조절 단위 개수)
  // 블록이 10개 생성될 때 마다 난이도를 조절(재정의)한다.
  // 전부 대문자로 변수명을 하는 이유: 얘는 상수이다. 즉 앞으로 정대 변하지 않을 변수
  #BLOCK_GENERATION_INTERVAL = 10;
  // 블록 하나당 생성에 걸리는 시간(블록당 생성시간)
  // 10개는 위에서 설정한 수(#DIFFICULTY_ADJUSTMENT_INTERVAL)
  // 여기는 시간 단위는 없다.
  #TIME_UNIT = 60 * 1000;
  // 시간의 단위 설정
  // 60s *1000 ms => 1m(1분)
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
  get config() {
    // 난이도 제어
    return {
      DAI: this.#DIFFICULTY_ADJUSTMENT_INTERVAL,
      //              개수:  10개
      // 난이도 조절 단위 개수
      averageGenerationTime: this.#BLOCK_GENERATION_INTERVAL * this.#TIME_UNIT,
      //     10분          :                            10   *  60 * 1000
      // 10개 블록 생성 되는 시간
    };
  }
  get adjustmentBlock() {
    const length = this.#chain.length;
    // 현재 체인의 길이
    const interval = length - this.#DIFFICULTY_ADJUSTMENT_INTERVAL;
    // 난이도 조절 단위 개수 전 index
    if (interval < 0) return this.#chain[0];
    // 1 index에 블록이 추가 됬다. => 1 index가 추가 됬기 전에 체인의 길이는 1

    return this.#chain[interval];
    //
  }
  addBlock(_data) {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );
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

const chain = new Chain();
for (let i = 0; i < 32; i++) {
  chain.addBlock([`test block${i}`]);
}
console.log(chain.chain);
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
