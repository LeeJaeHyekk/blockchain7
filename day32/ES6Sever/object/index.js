//  module.export ={} <<ESS
// export {} << ES6

function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
const object = {
  sum,
  multiply,
  testNum: 1,
  testNum2: 2,
};

const { testNum, testNum2 } = object;
// 구조분해 할당
// 객채 내의 프로퍼티를 변수로 초기화 한다.
console.log(testNum, testNum2);

export default object;
export function minus(a, b) {
  return a - b;
}
// export || export default
// export는 {} 안으로 들어간다.
// export default는 외부로 내보낼때 이거 하나를 보낸다.
