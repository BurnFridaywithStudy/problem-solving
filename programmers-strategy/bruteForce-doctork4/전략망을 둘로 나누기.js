function solution(n, wires) {
  const answers = [];
  
  const graph = Array.from(Array(n + 1), () => []);
  wires.forEach(([a, b], idx) => {
      graph[a].push(b);
      graph[b].push(a);
  });

  // console.log(graph);
  
  wires.forEach(([a, b]) => {
      const A = getNodes(a, b, n, graph);
      const B = getNodes(b, a, n, graph);
      // console.log("A", A, "B", B);
      const diff = Math.abs(A - B);
      answers.push(diff);
  });
  
  return Math.min(...answers);
}

// 그래프 탐색
function getNodes(start, excluded, n, graph) {
  const visited = Array(n+1).fill(false);
  let count = 1;
  const queue = [start];
  visited[start] = true;
  
  while (queue.length > 0) {
      // console.log(queue)
      const target = queue.shift();        
      
      for (node of graph[target]) {
          if (node !== excluded && !visited[node]) {
              visited[node] = true;
              count += 1;
              queue.push(node);
          }
      }
  }

  return count;
}
// wires중 하나를 제외하고
// A : 앞쪽에서 출발하여 갈 때, 만날 수 있는 모든 노드의 수
// B : 뒤쪽에서 출발하여 갈 때, 만날 수 있는 모든 노드의 수