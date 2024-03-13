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
  const [n, m] = input[0].split(' ').map(Number);
  const trees = input[1].split(' ').map(Number);
  return parametricSearch(1, 2000000000, trees, 0, m);
}

function parametricSearch(start, end, trees, curr, target) {
  if (start > end)
    return curr;
  const mid = Math.floor((start + end) / 2);
  const caledSum = trees.reduce((previous, current) => {
    if (current - mid > 0) {
      return previous + current - mid;
    }
    return previous;
  }, 0);
  if (caledSum < target) {
    return parametricSearch(start, mid - 1, trees, curr, target);
  } else if (caledSum === target) {
    return parametricSearch(mid + 1, end, trees, mid, target);
  } else if (caledSum > target) {
    return parametricSearch(mid + 1, end, trees, mid, target);
  }
}
