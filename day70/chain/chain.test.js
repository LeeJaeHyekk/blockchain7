// npx jest --verbose 치면 전부 나온다.
const Chain = require("./chain");
const Block = require("../block/block");
describe("chain test", () => {
  let chain;
  beforeEach(() => {
    // 체인을 실행하기 전에 실행하는 메서드
    chain = new Chain();
  });
  describe("addBlock", () => {
    it("데이터로 블록 추가", () => {
      // it이 시작하기 전에 위에서 설정된 beforeEach가 실행된다.
      // 여기서의 체인은 새로 생성된 체인이다.
      chain.addBlock(["정상적인 데이터"]);
      console.log(chain.chain); // addBlock으로 정상적인 데이터가 입력되어 chain에 추가된다.
      expect(chain.chain).toHaveLength(2);
    });

    it("데이터로 블록 추가 확인", () => {
      // it이 시작하기 전에 위에서 설정된 beforeEach가 실행됨
      chain.addBlock("잘못된 데이터");
      console.log(chain.chain);
      expect(chain.chain).toHaveLength(1);
    });
  });
  describe("add2Chain", () => {
    it("블록 생성 후 추가 확인", () => {
      const newBlock = new Block(["asdf"], chain.lastBlock);
      chain.add2Chain(newBlock);
      expect(chain.chain).toHaveLength(2);
    });
    it("잘못된 블록 생성 후 추가 확인", () => {
      const newBlock = new Block(["asdf"]);
      chain.add2Chain(newBlock);
      expect(chain.chain).toHaveLength(1);
    });
  });
  describe("last Block check", () => {
    it("마지막 블록 확인", () => {
      chain.addBlock(["asdf"]);
      const newBlock = new Block(["qwer"], chain.lastBlock);
      chain.add2Chain(newBlock);
      expect(chain.lastBlock).toEqual(newBlock);
    });
  });
});
