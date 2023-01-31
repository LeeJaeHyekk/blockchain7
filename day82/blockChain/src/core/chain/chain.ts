import Block from "@core/block/block";

class Chain implements IChain {
  // 객체 선언을 implements로 하는거다
  private chain: Array<IBlock>;
  private DIFFICULTY_ADJUSTMENT_INTERVAL: number = 10;
  private BLOCK_GENERATION_INTERVAL: number = 1;
  private TIME_UNIT: number = 60 * 1000;

  // 보기 편하려고 private로 변경, 보통 다른언어에서는 private라고 적는다.
  // private는 해당 클래스 내에서만 쓸수 있기 때문에 interface를 따로 사용하지 못한다.
  // private는 상속도 안된다.
  constructor() {
    this.chain = [];
    const genesis: IBlock = new Block([`제네시스 블록 ${new Date()}`]);
    this.chain.push(genesis);
  }

  get getChain(): Array<IBlock> {
    return [...this.chain];
  }

  get lastBlock(): IBlock {
    return this.chain[this.chain.length - 1];
  }

  get config(): IConfig {
    return {
      DAI: this.DIFFICULTY_ADJUSTMENT_INTERVAL,
      averageGenerationTime: this.BLOCK_GENERATION_INTERVAL * this.TIME_UNIT,
    };
  }

  get adjustmentBlock() {
    const length = this.chain.length;

    const interval = length - this.DIFFICULTY_ADJUSTMENT_INTERVAL;

    if (interval < 0) return this.chain[0];
    return this.chain[interval];
  }

  addBlock(_data: Array<string>): IBlock | null {
    const newBlock = new Block(
      _data,
      this.lastBlock,
      this.adjustmentBlock,
      this.config
    );
    return this.add2Chain(newBlock);
  }

  add2Chain(_newBlock: IBlock): IBlock {
    const isValid: TResult<IBlock, string> = Block.isValidBlock(
      _newBlock,
      this.lastBlock
    );
    if (isValid.isError) {
      console.error(isValid.msg);
      return null;
    } else {
      console.log(_newBlock);
      this.chain.push(_newBlock);
      return _newBlock;
    }
  }
  isValidChain(_chain: Array<IBlock>): TResult<undefined, string> {
    // 다른 서버에서 체인 받았을때 정상적인 체인인지 확인한다.
    for (let i = 1; i < _chain.length; ++i) {
      const nowBlock = _chain[i];
      const previousBlock = _chain[i - 1];
      const isValid = Block.isValidBlock(nowBlock, previousBlock);
      if (isValid.isError == true) return isValid;
    }
    return { isError: false, value: undefined };
  }
  replaceChain(_chain: Array<IBlock>): TResult<undefined, string> {
    const newLastBlock = _chain[_chain.length - 1];
    const lastBlock = this.lastBlock;
    if (newLastBlock.height === 0 && lastBlock.height !== 0) {
      return { isError: true, msg: "받은 블록이 제네시스 블록이다." };
    }
    if (newLastBlock.height < lastBlock.height) {
      return { isError: true, msg: "내 체인이 더 길다" };
    }
    if (newLastBlock.hash == lastBlock.hash) {
      return { isError: true, msg: "동기화 완료" };
    }

    this.chain = _chain;
    return { isError: false, value: undefined };
  }
}

export default Chain;
