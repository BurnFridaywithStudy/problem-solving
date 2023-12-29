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
  const [nm, ...arr] = input;
  const [n, c] = nm.split(' ').map(Number);
  const sortedArr = arr.map(Number).sort((a, b) => (a - b));
  return parametricSearch(0, 1000000000, 0, sortedArr, c);
}

function parametricSearch(start, end, curr, arr, target) {
  if (start > end) {
    return curr;
  }
  const mid = Math.floor((start + end) / 2);
  let caledSum = 1;
  let pickedHouse = arr[0];
  for (let i = 1; i < arr.length; ++i) {
    if (arr[i] - pickedHouse >= mid) {
      pickedHouse = arr[i];
      ++caledSum;
    }
  }
  if (caledSum < target)
    return parametricSearch(start, mid - 1, curr, arr, target);
  else if (caledSum === target)
    return parametricSearch(mid + 1, end, mid, arr, target);
  else if (caledSum > target)
    return parametricSearch(mid + 1, end, mid, arr, target);
}
