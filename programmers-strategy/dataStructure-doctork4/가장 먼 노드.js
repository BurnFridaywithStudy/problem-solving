function solution(n, edge) {
  // 2차원 배열로 옮기기
  const arr = Array.from(Array(n), () => []);
  
  for (node of edge) {
      const [a, b] = node;
      arr[a-1].push(b-1);
      arr[b-1].push(a-1);
  }
  // return arr
  
  // BFS
  const queue = [0];
  const visited = [1];
  
  while (queue.length > 0) {
      const cur = queue.shift();
      
      for (const next of arr[cur]) {
          if (!visited[next]) {
              visited[next] = visited[cur] + 1;
              queue.push(next)
          }
      }
  }
  
  const max = Math.max(...visited);
  
  return visited.filter(el => el === max).length;
}