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
  const memo = Array(n + 1).fill(0);
  return topDown(n, memo);
}

function topDown(n, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return 0;
  if (n === 1)
    return 1;
  if (n === 2)
    return 2;
  return memo[n] = (topDown(n - 1, memo) + topDown(n - 2, memo)) % 10007;
}
