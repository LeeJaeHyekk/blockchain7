import merkle from "merkle";
import { SHA256 } from "crypto-js";
import hexToBinary from "hex-to-binary";

class BlockHeader implements IBlockHeader {
  // implements는 interface를 기준으로 타입을 확인한다.
  // class의 프로퍼티의 타입을 선언해주는 것이 아닌 정상적으로 타입이 정의되었나 확인한다.
  version: string;
  merkleRoot: string;
  timestamp: number;
  height: number;
  difficulty: number;
  nonce: number;

  constructor(_data: Array<string>, _previousBlock?: IBlock) {
    this.version = "1.0.0";
    // 문자(string)
    const merkleRoot: TResult<string, string> =
      // 에러, 답  2가지가 있으며 에러와 답 둘다 string 형식으로 만들어져 있다.
      this.createMerkleRoot(_data);
    //
    if (merkleRoot.isError === true) {
      // 확실하게 확인하면 msg 또는 value를 구분할 수 있다.
      this.merkleRoot = "";
      console.error(merkleRoot.msg);
    } else if (merkleRoot.isError === false) {
      this.merkleRoot = merkleRoot.value;
    }

    this.setTimestamp();
    this.height = _previousBlock ? _previousBlock.height + 1 : 0;
    this.difficulty = 0;
    this.nonce = 0;
  }

  setTimestamp(): void {
    // return 없으므로 void
    this.timestamp = Date.now();
  }

  createMerkleRoot(_data: Array<string>): TResult<string, string> {
    if (!Array.isArray(_data) || !_data.length) {
      return { isError: true, msg: "data가 배열이 아니거나 빈 배열" };
    }
    return { isError: false, value: merkle("sha256").sync(_data).root() };
  }

  getDifficulty({
    previousDifficulty,
    adjustmentDifficulty,
    adjustmentTimestamp,
    DAI,
    averageGenerationTime,
  }: {
    // previousDifficulty: number;
    // adjustmentDifficulty: number;
    // adjustmentTimestamp: number;
    // DAI: number;
    // averageGenerationTime: number;
    [keys: string]: number;
    // string 타입의 키에 대해서 값은 number 타입을 가진다.
  }): void {
    if (this.height < DAI) {
      this.difficulty = 0;
    } else if (this.height < DAI * 2) {
      this.difficulty = 1;
    } else if (this.height % DAI !== 0) {
      this.difficulty = previousDifficulty;
    } else {
      const timeToken: number = this.timestamp - adjustmentTimestamp;

      if (timeToken < averageGenerationTime * 0.9) {
        this.difficulty = adjustmentDifficulty + 1;
      } else if (timeToken > averageGenerationTime * 1.1) {
        this.difficulty = adjustmentDifficulty - 1;
      } else {
        this.difficulty = adjustmentDifficulty;
      }
    }
  }
}

class Block extends BlockHeader implements IBlock {
  previousHash: string;
  hash: string;
  data: Array<string>;

  constructor(
    _data: Array<string>,
    _previousBlock?: IBlock,
    _adjustmentBlock?: IBlock,
    _config?: IConfig
  ) {
    super(_data, _previousBlock);
    // 초기 constructur()에 data, previousBlock 매개변수로 넘겨서 돌림
    this.previousHash = _previousBlock ? _previousBlock.hash : "0".repeat(64);
    // 프리비어스 해시(이전 해시) = 있으면 전 해시를 가져오고 , 없으면  0을 64개 채운다
    if (this.merkleRoot) {
      // 머클루트가 있으면
      if (_adjustmentBlock && _config) {
        //
        this.getDifficulty({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }

      this.hash = Block.createHash(this);

      if (_adjustmentBlock && _config) {
        this.updateBlock({
          previousDifficulty: _previousBlock.difficulty,
          adjustmentDifficulty: _adjustmentBlock.difficulty,
          adjustmentTimestamp: _adjustmentBlock.timestamp,
          DAI: _config.DAI,
          averageGenerationTime: _config.averageGenerationTime,
        });
      }
    } else {
      this.hash = "";
    }

    this.data = _data;
    // console.log(this);
  }

  static createHash(_block: IBlock): string {
    let tempStr = "";
    const keys = Object.keys(_block);
    for (let i = 0; i < keys.length; i++) {
      if (keys[i] === "hash" || keys[i] === "data") {
        continue;
      }
      tempStr += _block[keys[i]];
    }

    return SHA256(tempStr).toString().toUpperCase();
  }

  updateBlock(difficultyOptions: { [keys: string]: number }): void {
    // [키(문자): 값(숫자)] 나머지 싹다 집어 넣는다.
    let hashBinary = hexToBinary(this.hash);
    // 해쉬바이너리에
    while (!hashBinary.startsWith("0".repeat(this.difficulty))) {
      this.nonce += 1;
      this.setTimestamp();
      this.getDifficulty(difficultyOptions);
      this.hash = Block.createHash(this);
      hashBinary = hexToBinary(this.hash);
    }
    // console.log(hashBinary);
    // console.log(hashBinary.slice(0, this.difficulty));
  }

  static isValidBlock(
    _newBlock: IBlock,
    _previousBlock: IBlock
  ): TResult<IBlock, string> {
    // TResult == merkleRoot( Error /result) 중 result 인데
    // <> 제네릭은 ~가 올꺼 같을때 임시로 정해주는건데 답일지 틀리지 모르니까 아예 식을 때려 넣는다?
    if (_newBlock.height !== _previousBlock.height + 1) {
      return { isError: true, msg: "높이가 다르다." };
    }
    if (_newBlock.previousHash !== _previousBlock.hash) {
      return {
        isError: true,
        msg: "이전 블록의 hash와 새로운 블록의 이전 hash가 다르다.",
      };
    }
    if (_newBlock.hash !== Block.createHash(_newBlock)) {
      return { isError: true, msg: "hash 생성 중 오류 발생" };
    }
    return { isError: false, value: _newBlock };
  }
}

export default Block;
