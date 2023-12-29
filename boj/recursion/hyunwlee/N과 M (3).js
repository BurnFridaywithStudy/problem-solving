const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];
rl.on("line", function(line) {
  input.push(line);
}).on("close", function() {
  solution();
  process.exit();
});

let ans = '';
function solution() {
  const [n, m] = input[0].split(' ').map(Number);
  const check = Array(n + 1).fill(false);
  const arr = Array(m).fill(0);
  recurse(0, arr, check, n, m);
  console.log(ans);
}

function recurse(depth, arr, check, n, m) {
  if (depth === m) {
    ans += arr.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= n; ++i) {
    arr[depth] = i;
    recurse(depth + 1, arr, check, n, m)
  }
}
