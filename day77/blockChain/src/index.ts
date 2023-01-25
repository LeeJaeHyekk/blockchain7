import Block from "@core/block/block";
import Chain from "@core/chain/chain";
//
const genesis = new Block(["첫 블록"]);
console.log("genesis", genesis);
//
const second = new Block(["두번째 블록"], genesis);
console.log("sec", second);
//
const previousBlock = new Block(["이전 블록"]);
previousBlock.height = 29;
previousBlock.difficulty = 10;
//
const adjustmentBlock = new Block(["단위 개수 전 블록"]);
adjustmentBlock.height = 20;
adjustmentBlock.difficulty = 11;
//
const newBlock = new Block(["asdf"], previousBlock, adjustmentBlock, {
  DAI: 10,
  averageGenerationTime: 60 * 1000,
});
console.log(newBlock);
// ---------------------------------------------------------------------------------//
// let chain = new Chain();
// chain.addBlock(["정상적인 데이터"]);
// const newBlock = new Block(["asdf"], chain.lastBlock);
// chain.add2Chain(newBlock);
// chain.addBlock(["asdf"]);
// const newBlock = new Block(["qwer"], chain.lastBlock);
// chain.add2Chain(newBlock);
// ----------------------------------------------------------------------------------//
const chain = new Chain();
for (let i = 0; i < 200; i++) {
  chain.addBlock([`test block ${i}`]);
}
console.log(chain.chain);
