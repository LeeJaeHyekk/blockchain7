// 테스트 함수들을 실행하는데 묶어서 실행할 수 있다.
// describe : 테스트의 묶음(그룹을 지어줄 수 있다고 보면 된다.)
const createMerkle = require("./merkleTree");
const LibMerkle = require("./merkleTree");
const data = [
  "sadfasdf",
  "adfasdf234",
  "4rgdfc3f",
  "fvfdfte33",
  "45645457fdgr",
];
describe("테스트들의 묶음 단위 내용", () => {
  // 모음 내의  각각의 테스들을 작성해 준다.
  // 테스트 단위
  it("테스트의 내용", () => {
    console.log("나 처음써봄");
  });
  it("테스트의 내용 2번", () => {
    // expect 함수로 비교 함수들을 사용할 수 있게 해준다.
    // expect의 매개변수로 비교할 값을 넣어주고
    // expect().toBe()의 toBe()매개변수로 앞의 값과 비교할 값을 넣어준다.
    // 단순히 데이터비교 A와 B를 넣었다고 하면 A === B

    expect(createMerkle.data).toBe(LibMerkle.data);
    console.log("나 처음써봄");
  });

  it("테스트의 내용 3번", () => {
    expect("secondBlock").toBe("secondBlock");
    console.log("나 처음써봄");
  });
});
