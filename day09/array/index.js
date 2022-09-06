// 재귀함수란 자기 자신을 호출하는 함수다.
// 거의 쓸일 없지만 기억은 해두자.

function factorial(num) {
  if (num == 1) return 1;

  console.log(
    "현재 숫자 : " + num + "/ 곱셈 : " + num + "*" + factorial(num - 1)
  );
  return num * factorial(num - 1);
  // factorial 함수가 factorial 함수를 호출했다, return에서
}
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
// 피보나치 1,1,2,3,5,8,13,21,...
// 하노이의 탑
// 조건 : 봉이 3개 첫번째 봉에서 3번째 봉까지 이동을 시킨다,블럭을
// 블럭은 한번에 하나만 옮길수 있다.
//  순서는 기존에 쌓여있는 순서와 같게
// 작은 블럭은 큰 블럭 아래에 넣을 수 없다.
//
