const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
let input = fs.readFileSync(path).toString().trim().split('\n');
const N = +input.shift();

// 퀸을 배치할 열을 저장하는 배열
// N * N 에서 퀸은 당연히 모두 다른 열과 다른 행에 배치되어야한다. 
// DFS는 둘 중 하나만을 기준으로 탐색해도 괜찮다.

const row = Array(N).fill(0);

let count = 0;

// 퀸을 놓을 수 있는지 확인하는 함수
function isPossible(x) {
  console.log(row);

  for (let i = 0; i < x; i++) {
    if (row[x] === row[i] ||  Math.abs(row[x] - row[i])=== x - i) {
      return false;
    }
  }

  return true;
}

// DFS
function dfs(x) {
  // x가 N이면 N개의 퀸을 놓았다는 뜻
  if (x === N) {
    count++;
    return;
  }

  for (let i = 0; i < N; i++) {
    row[x] = i;
    if (isPossible(x)) {
      dfs(x + 1);
    }
  }
}

dfs(0);

console.log(count);