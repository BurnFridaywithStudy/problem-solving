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

function solution() {
  const [n, m] = input[0].split(' ').map(Number);
  const check = Array(n + 1).fill(false);
  const arr = Array(m).fill(0);
  recurse(0, 1, arr, check, n, m);
}

function recurse(depth, start, arr, check, n, m) {
  if (depth === m) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = start; i <= n; ++i) {
    arr[depth] = i;
    recurse(depth + 1, i + 1, arr, check, n, m)
  }
}
