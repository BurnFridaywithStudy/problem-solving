let input = require("fs").readFileSync("test.txt").toString().split("\n");

const [N, C] = input[0].split(" ").map(Number);
const houses = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

// 최대거리
let [start, end] = [1, houses.at(-1) - houses[0]];
let result = 0;

function solution() {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let count = 1;
    let prevHouse = houses[0];

    for (let i = 1; i < N; i++) {
      if (houses[i] - prevHouse >= mid) {
        count++;
        prevHouse = houses[i];
      }
    }

    if (count >= C) {
      result = Math.max(result, mid);
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return result;
}

console.log(solution());
