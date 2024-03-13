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
  const n = Number(input[0]);
  const check = Array(n).fill(false);
  const arr = Array(n).fill(0);
  return recurse(0, n, check, arr);
}

function recurse(depth, n, check, arr) {
  if (depth === n) {
    return 1;
  }
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    if (check[i])
      continue;
    check[i] = true;
    arr[depth] = i;
    if (checkValidation(depth, arr))
      ans += recurse(depth + 1, n, check, arr);
    check[i] = false;
  }
  return ans;
}

function checkValidation(depth, arr) {
  for (let i = 0; i < depth; ++i) {
    if (Math.abs(depth - i) === Math.abs(arr[depth] - arr[i]))
      return false;
  }
  return true;
}
