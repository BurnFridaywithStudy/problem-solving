function solution(n, k) {
  const answer = [];
  const factorialCache = Array(n + 1).fill(0);
  factorial(n, factorialCache);
  const arr = [];
  for (let i = 1; i <= n; ++i)
    arr.push(i);
  --k;
  while (n > 0) {
    let pos = Math.floor(k / (factorialCache[n] / n));
    answer.push(arr[pos]);
    arr.splice(pos, 1);
    k = k % factorialCache[--n];
  }
  return answer;
}

function factorial(n, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return memo[0] = 1;
  if (n === 1)
    return memo[1] = 1;
  return memo[n] = n * factorial(n - 1, memo);
}

console.log(solution(3, 5));
