function* what() {
  // function* 은 generator 선언문 이다
  // generator는  yield를 사용해서 함수를 중간에 멈추는 함수
  try {
    // try는 코드를 실행하되, 문제가 있을시 catch로 전달한다.
    // 문제가 발생할지도 모르는 코드를  사용시 사용한다.
    // 서버에 요청시에 가장 많이 사용한다.
    for (let i = 0; i < 10; ++i) {
      console.log(i);
      yield i;
    }
    // 함수 호출시 여기서 멈춘다.
    // 재호출시 여기서 시작한다.
    return true;
  } catch (err) {
    // try 코드 실행시에 문제가 발생 시 해당 문제를 err 매개변수로 받아 실행한다.
    console.log(err);
  }
}
let generator = what();
generator.next();
//while (!generator.done) {
// done 프로퍼티는 generator가 끝났는가?
// generator.next();
//   next 메서드는 코드를 실행한다. (단, yield에서 멈춘다.)
//    }
