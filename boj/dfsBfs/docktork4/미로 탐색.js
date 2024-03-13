const fs = require('fs');
const path = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(path).toString().trim().split('\n');
const [info, ...rest] = input;

const [N, M] = info.split(' ').map(Number); // N개의 줄, M개의 정수
const graph = rest.map(v => v.split('').map(Number));
// console.log(graph);

const visited = Array.from(Array(N), () => Array(M).fill(0));
// console.log(visited);

function BFS(sx, sy, ex, ey) {
  const queue = [[sx, sy]];
  visited[sx][sy] = 1;

  while (queue.length > 0) {
    // console.log(queue);
    const target = queue.shift();
    const [cx, cy] = target;
    if (cx === ex & cy === ey) return visited[ex][ey];

    for (direction of [[-1, 0], [1, 0], [0, -1], [0, 1]]) {
      const [dx, dy] = direction;
      const [nx, ny] = [cx + dx, cy + dy];
      if (0 <= nx && nx < N && 0 <= ny && ny < M && graph[nx][ny] === 1 && visited[nx][ny] === 0) {
        queue.push([nx, ny]);
        visited[nx][ny] = visited[cx][cy] + 1;
      } 
    }
  }
}
// console.log(graph[0].length - 1, graph.length - 1);
console.log(BFS(0, 0, graph.length-1, graph[0].length-1));
// console.log(visited);
// console.log(visited[N-1][M-1]);
/**
 *
graph 
[
  [ 1, 0, 1, 1, 1, 1 ],
  [ 1, 0, 1, 0, 1, 0 ],
  [ 1, 0, 1, 0, 1, 1 ],
  [ 1, 1, 1, 0, 1, 1 ]
] 

visited
[
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ],
  [ 0, 0, 0, 0, 0, 0 ]
]

갈 수 있는 방향
- 상하좌우 & 1

 * 
 */


