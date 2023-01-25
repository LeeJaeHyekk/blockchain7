declare interface IBlockHeader {
  version: string;
  merkleRoot: string;
  timestamp: number;
  height: number;
  difficulty: number;
  nonce: number;
}
declare interface IBlock extends IBlockHeader {
  previousHash: string;
  hash: string;
  data: Array<string>;
}
//---------------------- IBlock -------------------------------------------
// 테스트를 위해서
declare interface IConfig {
  DAI: number;
  averageGenerationTime: number;
}
