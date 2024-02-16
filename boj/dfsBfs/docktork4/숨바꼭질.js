const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split(' ');

const [N, K] = input.map(Number); // N : 출발위치, K : 도착위치
// console.log(N, K);

const visited = Array(200_001).fill(0);

function BFS(start, end, visited) {
  const queue = [start];
  visited[start] = 1;

  while (queue.length > 0) {
    const current = queue.shift();
    if (current === end) return visited[end]-1;
    
    for (steps of [current - 1, current + 1, current * 2]) {
      if (steps >= 0 && steps <= 200_000 && visited[steps] === 0) {
        queue.push(steps);
        visited[steps] = visited[current] + 1;
      }
    }
  }

  return -1;
}

console.log(BFS(N, K, visited));