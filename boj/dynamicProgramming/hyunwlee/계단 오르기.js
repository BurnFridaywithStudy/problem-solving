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
  const [n, ...arr] = input.map(Number);
  const memo = Array(n + 1).fill(0);
  memo[1] = arr[0];
  memo[2] = arr[0] + arr[1];
  memo[3] = Math.max(arr[0], arr[1]) + arr[2];
  return topDown(n, memo, arr);
}

// d[n] = d[n - 1] + d[n - 3];
// d[n] = d[n - 2];
function topDown(n, memo, arr) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return 0;
  return memo[n] = Math.max(
    (arr[n - 2] + topDown(n - 3, memo, arr)),
    topDown(n - 2, memo, arr)
  ) + arr[n - 1];
}
