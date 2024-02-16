const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');

const [info, ...rest] = input;
const [M, N] = info.split(' ').map(Number);

const graph = rest.map(el => el.split(' ').map(Number));
// console.log(graph);

// 익지 않은 개수 Count
// let count = M * N;

// 며칠만에 익는지 기록해둬야함
const visited = Array.from(Array(N), () => Array(M).fill(0));
// console.log(visited);
const queue = [];

// 그래프에서 1인 것을 queue에 추가
graph.forEach((row, x) => row.forEach((v, y) => {
    if (v === 1) {
      queue.push([x, y]);
    }
  })
);
// console.log(queue);
let queueIdx = 0;

function BFS () {
  while (queueIdx !== queue.length) {
    const target = queue[queueIdx];
    const [cx, cy] = target;

    for (direction of ([[0, -1], [0, 1], [1, 0], [-1, 0]])) {
      const [dx, dy] = direction;
      const [nx, ny] = [cx+dx, cy+dy];

      if (nx >= 0 && nx < N && ny >= 0 && ny < M && graph[nx][ny] === 0) {
        queue.push([nx, ny]);
        graph[nx][ny] = 1;
        visited[nx][ny] = visited[cx][cy] + 1;
      }
    }
    queueIdx += 1;
  }
}

BFS();
// console.log(visited);
// console.log(graph);

function getAnswer(graph, visited) {
  for (let i = 0; i < N; i++) {
    for (let j = 0; j < M; j++) {
      if (graph[i][j] === 0) return -1;
    }
  }

  let maxValue = 0;
  for (let i = 0; i < visited.length; i++) {
    for (let j = 0; j < visited[0].length; j++) {
      if (maxValue < visited[i][j]) maxValue = visited[i][j];
    }
  }

  return maxValue;
}

console.log(getAnswer(graph, visited));

/**
 * 익지않은 것들은 익은 것들의 영향을 받아 익게 된다.
 * 상하좌우만 인접으로 간주
 * 대각선은 영향을 주지 못함
 * 
 * 1은 익은 토마토
 * 0은 안 익은 토마토
 * -1은 토마토가 들어있지 않은 칸
 * 
 * 모두 익지 못하는 상황(진출할 수 없는 경우) => 상하좌우가 모두 0이나 1이 아닌 경우
 * 
 * 모든 토마토가 익은 상황 
 * - 모든 토마토가 0이 아닌 상황
 */