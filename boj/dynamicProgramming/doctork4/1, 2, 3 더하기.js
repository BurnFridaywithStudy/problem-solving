const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n').map(Number);
const units = input.shift();

// memoization
// function solution(n) {
//   const memo = [0, 1, 2, 4];
//   return cal(n, memo);
// }

// function cal(n, memo) {
//   if (memo[n]) return memo[n];
  
//   if (n > 3) {
//     const value = cal(n-1, memo) + cal(n-2, memo) + cal(n-3, memo);
//     memo[n] = value;
//     return value
//   }
// }

// tabulation
function solution(n) {
  const table = [0, 1, 2, 4];
  if (table[n]) return table[n];

  for (let i = 4; i <= n; i++) {
    const v = table[i-1] + table[i-2] + table[i-3];
    table.push(v);
  }

  return table[n];
}

input.forEach(n => console.log(solution(n)));

/**
 * 1을 1,2,3으로 표현하는 법 1
 * 1
 * 
 * 2를 1,2,3으로 표현하는 법 => 2
 * 1+1
 * 2
 * 
 * 3을 1,2,3으로 표현하는 법 => (2를 표현하고 1을 더하는 가짓수) 4 (2 +2)
 * 1+2 
 * 2+1 
 * 1+1+1
 * 3
 * 
 * 4를 1,2,3으로 표현하는법 => (3을 표현하고 1을 더하는 가짓수) 7개 (4 +3) = sol1 + sol2 + sol3
 * 1+1+1+1
 * 1+1+2
 * 1+2+1
 * 2+1+1
 * 1+3
 * 3+1
 * 
 * 5를 1,2,3으로 표현하는법 => 13개 (7 +6) sol4+ sol3(4) + sol2(2)
 * 1+1+1+1
 * 1+1+1+2
 * 1+1+2+1
 * 1+2+1+1
 * 2+1+1+1
 * 1+2+2
 * 2+1+2
 * 2+2+1
 * 1+1+3
 * 1+3+1
 * 3+1+1
 * 2+3
 * 3+2
 */