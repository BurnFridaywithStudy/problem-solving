function solution(N, number) {
  const MAX_DEPTH = 8;
  const memo = Array.from(new Array(MAX_DEPTH + 1), () => new Set());
  if (N == number)
    return 1;
  memo.forEach((set, idx) => {
    if (idx === 0)
      return;
    set.add(Number(String(N).repeat(idx)));
  });
  //  ex) 2개로 표현할 수 있는 d[2], 3개로 표현할 수 있는 d[3]
  //  d[5] =
  //  [
  //    d[1] + d[4], O(N^2),
  //    d[1] - d[4], O(N^2),
  //    d[1] * d[4], O(N^2),
  //    d[1] / d[4], O(N^2),
  //
  //    d[2] + d[3], O(N^2),
  //    d[2] - d[3], O(N^2),
  //    d[2] * d[3], O(N^2),
  //    d[2] / d[3], O(N^2)
  //  ];
  for (let i = 1; i <= 8; ++i) {
    for (let j = 1; j < i; ++j) {
      for (let first of memo[j]) {
        for (let second of memo[i - j]) {
          memo[i].add(first + second);
          memo[i].add(first - second);
          memo[i].add(first * second);
          memo[i].add(first / second);
        }
      }
    }
    if (memo[i].has(number))
      return i;
  }
  return -1;
}
console.log(solution(5, 12));
console.log(solution(2, 11));
