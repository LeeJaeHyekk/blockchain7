function solution(num) {
  let a = num.sort((a, b) => b - a);
  let answer = num[0] * num[1];
  console.log("a", a);

  console.log("answer", answer);
  return;
}
solution([1, 2, -3, 4, -5]);
Math.max