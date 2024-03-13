let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const woodLens = input[1].split(" ").map(Number);
let [start, end] = [1, Math.max(...woodLens)];
let result = 0;

function solution(woodLens, target) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (const length of woodLens) {
      if (length > mid) sum += length - mid;
    }

    if (sum >= m) {
      start = mid + 1;
      result = Math.max(result, mid);
    } else {
      end = mid - 1;
    }
  }

  return result;
}

console.log(solution(woodLens, m));
