function solution(n) {
  const memo = Array(n + 1).fill(0);
  memo[0] = 0;
  memo[1] = 1;
  for (let i = 2; i <= n; ++i)
    memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
  return memo[n];
}

console.log(solution(3));
console.log(solution(5));
