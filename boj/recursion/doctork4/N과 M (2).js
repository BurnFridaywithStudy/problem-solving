const fs = require('fs');

// local vscode 
const input = fs.readFileSync('input.txt').toString(); 
// 백준 제출용 
// const input = fs.readFileSync('/dev/stdin').toString(); 
const inputArr = input.split(' ').map(Number);
const [N, M] = inputArr;

const visited = Array(N+1).fill().map(v => false);
const depth = [];

function dfs(level, s) {
  if (level === M) {
    console.log(depth.join(' '));
    return;
  }
  
  for (let i = s; i <= N; i++) {
    if (visited[i]) continue;
    depth.push(i);
    visited[i] = true;
    // 재귀
    dfs(level + 1, i+1);
    // 초기화
    depth.pop();
    visited[i] = false;
  }
}

dfs(0, 1);