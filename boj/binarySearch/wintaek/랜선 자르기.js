const input = require("fs").readFileSync("example.txt").toString().split("\n");

const [K, N] = input.shift().split(" ");
const lines = input.map(Number).sort((a, b) => a - b); // 정렬

const target = +N;

let left = 0;
let right = lines[lines.length - 1];
let answer = Number.MIN_SAFE_INTEGER;

while (left <= right) {
  let mid = Math.floor((left + right) / 2);
  let lineNum = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

  if (lineNum >= target) {
    if (mid > answer) answer = mid;
    left = mid + 1;
  } else {
    right = mid - 1;
  }
}

console.log(answer);
