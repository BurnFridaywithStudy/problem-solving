const readline = require('readline');
const rl = readline.createInterface({
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
  const [n, ...arr] = input.map(Number);
  const memo = new Array(n + 1);
  const ans = [];
  for (let i = 0; i < n; ++i) {
    ans.push(topDown(arr[i], memo));
  }
  return ans.join('\n');
}

function topDown(n, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return 1;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;
  return memo[n] = topDown(n - 1, memo) + topDown(n - 2, memo) + topDown(n - 3, memo);
}
