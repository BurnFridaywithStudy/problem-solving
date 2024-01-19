const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().split('\n');

const N = Number(input[0]);
const arr = input[1].split(' ').map(Number);

function solution(arr) {
  const dp = Array(N).fill(0);

  // 1번째 항부터 자신보다 큰 값이 왼쪽에 (앞선 인덱스에) 존재하는지
  for (let i = 0; i < N; i++) {
    dp[i] = 1;
    for (let j = 0; j <= i; j++) {
      if (arr[j] > arr[i] && dp[i] < dp[j]+1) {
        dp[i] = dp[j] + 1;
      }
    }
  }
  // return dp;
  return Math.max(...dp);
}
    
console.log(solution(arr));
// function solution(arr) {
//   const dp = Array(N).fill(0);
//   dp[0] = 1;

//   for (let i = 1; i < N; i++) {
//     dp[i] = arr[i] <= arr[i-1] ? dp[i-1] + 1 : 1;
//   }
//   return dp;
  // return Math.max(...dp);
// }
    
// 1차 풀이
/**
 * 감소하는 부분
 * 30 -> 10
 * 20 -> 20 -> 10
 * 
 */