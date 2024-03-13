const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');

const N = Number(input[0]);

function solution(n) {
  const arr = Array(n+1).fill(0);
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i-1] + 1;
    
    if (i % 3 === 0) {
      arr[i] = Math.min(arr[i/3] + 1, arr[i]);
    } 
    
    if (i % 2 === 0) {
      arr[i] = Math.min(arr[i/2] + 1, arr[i]);
    }
  }
  
  return arr[n];
}

console.log(solution(N));


// function solution (n) {
//   const memo = [0, 0, 1, 1];
//   return cal(n, memo); 
// }

// function cal(n, memo) {
//   if (memo[n] !== undefined) return memo[n];
  
//   memo[n] = cal(n-1, memo) + 1;

//   if (n % 3 === 0) {
//     memo[n] = Math.min(cal(Math.floor(n / 3), memo) + 1, memo[n]);
//   } 
  
//   if (n % 2 === 0) {
//     memo[n] = Math.min(cal(Math.floor(n / 2), memo) + 1, memo[n]);
//   }
  
//   return memo[n];
  
// }

/**
 * 재귀적인 풀이법을 사용하였으나 StackSize Exceeded 런타임 에러가 났음
 * 
 * 어쩔 수 없이 검색을 통해 찾아본 풀이를 적용하였음
 * 바텀업 방식에 대해 익숙해질 수 있었던 문제
 * 
 */