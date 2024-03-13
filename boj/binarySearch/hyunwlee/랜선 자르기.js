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
})

function solution() {
  const [nm, ...arr] = input;
  const [n, m] = nm.split(' ').map(Number);
  return parametricSearch(1, 2147483647, 0, arr.map(Number), m);
}

function parametricSearch(start, end, curr, arr, target) {
  if (start > end)
    return curr;
  const mid = Math.floor((start + end) / 2);
  const caledSum = arr.reduce((previous, current) => {
    return previous + Math.floor(current / mid);
  }, 0);
  if (caledSum < target) {
    return parametricSearch(start, mid - 1, curr, arr, target);
  } else if (caledSum === target) {
    return parametricSearch(mid + 1, end, mid, arr, target);
  } else if (caledSum > target) {
    return parametricSearch(mid + 1, end, mid, arr, target);
  }
}
