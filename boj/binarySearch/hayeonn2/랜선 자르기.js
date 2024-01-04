let input = require("fs").readFileSync("test.txt").toString().split("\n");

const [K, N] = input[0].split(" ").map(Number);
const lans = input
  .slice(1)
  .map(Number)
  .sort((a, b) => a - b);

let [start, end] = [1, Math.max(...lans)];
let answer = 0;

function solution(lans, target) {
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (const lan of lans) {
      sum += parseInt(lan / mid);
    }

    if (sum < N) {
      end = mid - 1;
    } else {
      answer = Math.max(answer, mid);
      start = mid + 1;
    }
  }

  return answer;
}

console.log(solution(lans, N));
