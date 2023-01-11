const Block = require("./block");
const merkle = require("merkle");
describe("Block test", () => {
  // it("merkle test", () => {
  //   const data = ["a", "b", "c"];
  //   const block = new Block(data);
  //   const merkleRoot = merkle("sha256").sync(data).root();
  //   expect(block.merkleRoot).toBe(merkleRoot);
  // });
  // it("hash test", () => {
  //   const data = ["a", "b", "c"];
  //   const block1 = new Block(data); // 블록 1이 1번 블록이고
  //   const block2 = new Block(data, block1); // block2 가 2번 블록이다. 즉 block1, block2로 연결되있다.
  //   const hash = Block.createHash(block2);
  //   expect(block2.hash).toBe(hash);
  // });
  describe("data가 배열이 아닐때", () => {
    const data = "a";
    const block = new Block(data);
    it("merkleRoot가 비어있는가?", () => {
      expect(block.merkleRoot).toBe("");
    });
    it("hash가 비어있는가?", () => {
      expect(block.hash).toBe("");
    });
  });
  describe("data가 배열일때", () => {
    const data = ["a"];
    const block = new Block(data);

    it("merkleRoot가 비어있는가?", () => {
      const merkleRoot = merkle("sha256").sync(data).root();
      expect(block.merkleRoot).toBe(merkleRoot);
    });
    it("hash와 merkleRoot의 길이가 64인가?", () => {
      expect(block.merkleRoot).toHaveLength(64);
      expect(block.hash).toHaveLength(64);
      // toHaveLength << 길이 확인
    });
  });
});
