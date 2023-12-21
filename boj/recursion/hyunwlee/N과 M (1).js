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
  recurse(0, arr, check, n, m);
}

function recurse(depth, arr, check, n, m) {
  if (depth === m) {
    console.log(arr.join(' '));
    return;
  }
  for (let i = 1; i <= n; ++i) {
    if (!check[i]) {
      check[i] = true;
      arr[depth] = i;
      recurse(depth + 1, arr, check, n, m)
      check[i] = false;
    }
  }
}
