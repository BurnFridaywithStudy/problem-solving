const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin').toString();
const input = fs.readFileSync('input.txt').toString();
const inputArr = input.split(' ').map(Number);
const [N, M] = inputArr;

// const visited = Array(N+1).fill().map(v => false);
const depth = Array(M).fill('');
const answer = [];
// console.log(inputArr);
// console.log(visited);
// console.log(depth);

function dfs(level) {
  if (level === M) {
    answer.push(depth.join(' ')+'\n');
    return;
  }

  for (let i = 1; i <= N; i++) {
    // if (visited[i]) continue;
    // visited[i] = true;
    depth[level] = i;
    dfs(level + 1);
    // visited[i] = false;
  }
}

dfs(0);
console.log(answer.join(''));