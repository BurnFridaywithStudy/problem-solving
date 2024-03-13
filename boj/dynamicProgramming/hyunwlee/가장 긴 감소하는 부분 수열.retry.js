const readline = require('readline');
rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  console.log(solution());
  process.exit();
});

function solution() {
  const n = Number(input[0]);
  if (n === 1)
    return 1;
  const arr = [0, ...input[1].split(' ').map(Number)];
  const memo = Array(n + 1).fill(0);
  memo[1] = 1;
  // topDown(n, memo, arr);
  bottomUp(n, memo, arr);
  // console.log(memo);
  memo.sort((a, b) => (b - a));
  return memo[0];
}

function bottomUp(n, memo, arr) {
  for (let i = 2; i <= n; ++i) {
    memo[i] = 1;
    for (let j = 1; j < i; ++j) {
      if (arr[i] < arr[j] && memo[i] < memo[j] + 1) // memo[j] + 1 보다 커질 수 없다.
        memo[i] = memo[j] + 1;
    }
  }
}

// FAIL
// https://www.acmicpc.net/board/view/44969
// IDEA
// 특정 지점에서 가장 긴 감소하는 수열의 길이 = 
// 특정 지점보다 작은 지점에서의 가장 긴 감소하는 수열의 길이 + 1
// 4
// 2 1 2 1
function topDown(n, memo, arr) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return 0;
  if (n === 1)
    return memo[n] = 1;
  if (arr[n] < arr[n - 1])
    memo[n] = topDown(n - 1, memo, arr) + 1;
  else
    memo[n] = topDown(n - 1, memo, arr);
  return memo[n];
}
