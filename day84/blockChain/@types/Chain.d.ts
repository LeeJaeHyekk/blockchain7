declare interface IChain {
  // 함수도 인터페이스에 포함시킨다.
  getChain: Array<IBlock>;
  lastBlock: IBlock;
  config: IConfig;
  adjustmentBlock: IBlock;
  addBlock(_data: Array<ITransaction>): IBlock | null;
  add2Chain(_newBlock: IBlock): IBlock | null;
}
declare interface IConfig {
  DAI: number;
  averageGenerationTime: number;
}
