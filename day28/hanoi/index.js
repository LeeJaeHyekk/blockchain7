// 하노이 start & end

function solution(n, start = 1, end = 3) {
  if (n === 1) return [[start, end]];

  return [
    ...solution(n - 1, start, 6 - start - end),
    [start, end],
    ...solution(n - 1, 6 - start - end, end),
  ];
}

//
