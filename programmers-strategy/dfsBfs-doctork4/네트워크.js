function solution(n, computers) {
  let answer = 0;   
  const visited = Array(n).fill(false);
  
  function dfs(index, visited) {
      visited[index] = true;

      for (let i = 0; i < computers[index].length; i++) {
          if (computers[index][i] === 1 && !visited[i]) dfs(i, visited);
      }
  }
  
  for (let i = 0; i < n; i++) {
      if (!visited[i]) { 
          dfs(i, visited);
          answer += 1;
      }
  }
  
  return answer;
}


/**
 * 
const graph = [];

for (let i = 0; i < computers.length; i++) {
  const computer = computers[i];
  const arr = []
  computer.forEach((el, idx) => {
    if (el == 1 && idx !== i) arr.push(idx+1);
  })
  graph.push(arr);
}
console.log(graph);
*/