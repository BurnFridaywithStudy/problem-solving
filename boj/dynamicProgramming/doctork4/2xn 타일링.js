const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');
const n = Number(input[0]);

function solution(n) {
  const arr = [0, 1, 2];
  if (n <= 2) return arr[n];
  for (let i = 3; i <= n; i++) {
    const target = arr[i-1] + arr[i-2];
    arr.push(target % 10007);
  }

  return arr[n];
}

console.log(solution(n));

/**
 * 점화식이 뭘까...?
 * 패턴을 읽어보니 대충 이전 항 2개의 값을 더한 값 같다!
 * 
 * n = 1
 * ans = 1
 * 
 * n = 2
 * ans = 2
 * 
 * n = 3
 * ans = 3
 * 
 * n = 4
 * ans = 5
 * 
 */