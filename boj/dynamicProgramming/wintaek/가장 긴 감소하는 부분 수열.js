let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const count = Number(input[0]);
const inputNumber = input[1].split(" ").map(Number);

function solution(count, inputNumber) {
  let dp = [];
  for (let i = 0; i < count; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      if (inputNumber[i] < inputNumber[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }
  return Math.max(...dp);
}

console.log(solution(count, inputNumber));
