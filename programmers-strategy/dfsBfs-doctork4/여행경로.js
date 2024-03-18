function solution(tickets) {
  const n = tickets.length + 1; // 방문해야하는 공항 수
  const graph = {};
  
  tickets.forEach(([dep, arr]) => {
    if (!graph[dep]) graph[dep] = [];
   if (!graph[arr]) graph[arr] = [];
    graph[dep].push(arr);
    graph[dep].sort();
  });
  
  const answer = [];
  const visited = new Set();
  function dfs(current, route) {
      if (route.length === n) {
          answer.push([...route]);
          return;
      }
      
      for (let i = 0; i < graph[current].length; i++) {
          const des = graph[current][i];
          const ticket = `${current}#${des}`;
          if (!visited.has(ticket) || 
              (i >= 1
               && ticket === `${current}#${graph[current][i-1]}`)
             ) {
              visited.add(ticket);
              route.push(des)
              dfs(des, route);
              route.pop()
              visited.delete(ticket);
          }
      }
  }
  
  dfs("ICN", ["ICN"]);
  return answer[0];
}

const result = solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL","SFO"]]);
console.log(result);

// function solution(tickets) {
//   let answer = [];
//   const cities= {};

//   tickets.forEach(([dep, arr]) => {
//       if (!cities[dep]) cities[dep] = [arr];
//       else cities[dep].push(arr);
//   });

//   Object.keys(cities).forEach(el => {
//       cities[el].sort();
//   });
//   console.log(cities);

//   function dfs(start) {
//       const queue = [start];
//       while (true) {
//           console.log(queue, "queue")
//           const target = queue.at(-1);
//           console.log(cities[target], "cities[target]");

//           if (!cities[target] || cities[target].length === 0) {
//               break;
//           }
//           const arr = cities[target].shift();
//           queue.push(arr);
//       }   
//       return queue;
//   }
//   answer = dfs("ICN");
//   return answer;
// }


/**
 *     놓쳤던 부분
    - 무조건 알파벳 순이 아니다.
    - 경로를 만들고 알파벳이 뒤인 것 vs 티켓을 다 못쓰고 알파벳이 앞인 것중에서는 당연히 전자가 되어야한다. 
 * 
 */