function solution(maps) {
  const N = maps.length;
  const M = maps[0].length;
  
  const visited = Array.from(Array(N), () => Array(M).fill(0));
  
  return BFS(N, M, maps, visited);
}

function BFS (N, M, maps, visited) {
  const queue = [[0, 0]];
  visited[0][0] = 1;
  
  while (queue.length > 0) {
      const current = queue.shift();
      const [cx, cy] = current;
      if (cx === N-1 && cy === M-1) return visited[N-1][M-1];
      
      for (direction of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          const [dx, dy] = direction;
          const [nx, ny] = [cx + dx, cy + dy];
          
          if (nx >= 0 && nx < N && ny >= 0 && ny < M && maps[nx][ny] === 1 && visited[nx][ny] === 0) {
              queue.push([nx, ny]);
              visited[nx][ny] = visited[cx][cy] + 1;
          }
          
      }
  }
  
  return -1;
}