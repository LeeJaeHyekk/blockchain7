let a = 1;
let b = 2;
function add() {
  a += b;
  //   a는 외부의 값이다. 그런 a를 수정했기 떄문에 순수 함수가 아니다.
}
function add1(a, b) {
  return a + b;
}
// a,b 의 값이 변화가 없을때 순수함수 이다.
let ac = [1111, 22222, 33333, 44444, 55555];
