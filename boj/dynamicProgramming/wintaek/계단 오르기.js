// count = 6 (계단의갯수) , ...input[10,20,15,25,10,20](계단)
let [count, ...input] = require("fs").readFileSync("example.txt").toString().trim().split("\n");
count = Number(count);
input = input.map(Number);

function solution() {
  const dp = Array(input.length).fill(0);
  dp[0] = input[0];
  dp[1] = input[0] + input[1];
  dp[2] = Math.max(input[0], input[1]) + input[2];

  // 0,1,2 번째 계단은 초기값이 설정되어있으므로 3부터 i는 3부터 시작
  for (let i = 3; i < count; i++) {
    dp[i] = Math.max(dp[i - 2] + input[i], dp[i - 3] + input[i - 1] + input[i]);
  }
  return dp[count - 1];
}

console.log(solution());
