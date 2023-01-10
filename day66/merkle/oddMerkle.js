const SHA256 = require("crypto-js").SHA256;
const merkle = require("merkle");
const data = [1, 2, 3];
const merkleRoot = merkle("sha256").sync(data).root();

const firstTree = [];
for (let i = 0; i < data.length; i++) {
  firstTree.push(SHA256(data[i].toString()).toString().toUpperCase());
}
const secondTree = [];
for (let i = 0; i < firstTree.length; i += 2) {
  let temp = ""; //이름 그대로 임시값을 준다.
  if (i + 1 == firstTree.length) {
    // (홀수 개)이며 다음 아이템(인덱스)이 없을때
    temp = firstTree[i];
    // 기존의 아이템을 그대로 사용한다.
  } else {
    // 다음 아이템(인덱스)이 있을 때
    temp = SHA256(firstTree[i] + firstTree[i + 1])
      .toString()
      .toUpperCase();
  }
  secondTree.push(temp);
}
const oddThirdRoot = SHA256(secondTree[0] + secondTree[1])
  .toString()
  .toUpperCase();

// ------------------------------------------------------------------------//

const createMerkleRoot = (_data) => {
  if (!Array.isArray(_data)) return { isError: true, msg: "너 배열 아님" };
  //   isArray: Array(배열 객체)의 메서드로 배열인지 아닌지를 판단한다.
  //   배열 이라면 true 준다.(반환 한다. return 한다.)
  //   return을 객체로 내보내는 이유 : 블록 생성 후 해당 블록이 정상적인 블록인지 확인하기 위해서 객체로 내보낸다. isError를 통해서 생성도중 문제가 발생 했는지 파악
  //   jest에서 사용하는 것이 아닌 블록 생성에서 사용한다.
  let merkleArr = _data.map((item) => SHA256(item).toString().toUpperCase());
  // 조건 : 머클루트 한개의 값이 나올때까지
  // merkleArr 배열의 길이가 1이 될때까지 반복
  while (merkleArr.length > 1) {
    const tempArr = [];
    for (let i = 0; i < merkleArr.length; i += 2) {
      if (i + 1 === merkleArr.length) {
        //
        tempArr.push(merkleArr[i]);
      } else {
        tempArr.push(
          SHA256(merkleArr[i] + merkleArr[i + 1])
            .toString()
            .toUpperCase()
        );
      }
    }
    merkleArr = tempArr;
  }
  return { isError: false, value: merkleArr[0] };
};

const libMerkle = (_data) => {
  // 암호화 방식은 sha256이고 매개변수로 전달받은 배열을 트리구조로 만들어 주고 root 값을 가져오자.
  const merkleRoot = merkle("sha256").sync(_data).root();
  return merkleRoot;
};

module.exports = { oddMerkleRoot: merkleRoot, oddThirdRoot };
