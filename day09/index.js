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
