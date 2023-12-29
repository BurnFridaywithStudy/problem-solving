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
  const n = Number(input[0]);
  const arr = Array(n).fill(0);
  recurse(0, arr, n);
  console.log(ans);
}

function recurse(depth, arr, cnt) {
  if (depth === cnt) {
    ans += arr.join(' ') + '\n';
    return;
  }
  for (let i = 1; i <= 6; ++i) {
    arr[depth] = i;
    recurse(depth + 1, arr, cnt)
  }
}
