const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n');
const [info, ...rest] = input;
const [N, M, V] = info.split(' ').map(Number); // N : 점의 개수, M : 선의 개수, V : 탐색을 시작할 점의 번호
const connection = rest.map(v => v.split(' ').map(Number));

// console.log(N, M, V);
// console.log(connection);

// 그래프를 만들어줍니다.
const graph = Array.from(Array(N+1), () => []);

// 연결 정보를 바탕으로 인접 리스트 형태로 그래프를 완성합니다.
connection.forEach(v => {
  graph[v[0]].push(v[1]);
  graph[v[1]].push(v[0]);
});

// 작은 정점 번호 순으로 방문해야하기 때문에 그래프를 오름차순 정렬해줍니다.
graph.forEach(el => el.sort((a, b) => a - b));

// BFS와 DFS 2번 연산을 해야하기 때문에 방문배열과 출력배열을 2개씩 만듭니다. 
const arr = [];
const arr2 = [];
const visited = Array(N+1).fill(false);
const visited2 = [...visited];

// 재귀적으로 해결 (=> 스택)
function DFS(start, visited, arr) {
  visited[start] = true;

  for (i of graph[start]) {
    if (!visited[i]) {
      arr.push(i);
      // 스택을 쌓아 하나를 깊게 깊게 파고들어간다.
      DFS(i, visited, arr);
    }
  }
}

// 큐로 해결
function BFS(start, visited, arr) {
  // 시작 지점을 먼저 큐에 넣고 시작한다.
  const queue = [start];
  visited[start] = true;

  // 큐에서 요소를 꺼내고 그것과 인접한 것들을 큐에 넣고 먼저 방문한다.
  while (queue.length > 0) {
    const target = queue.shift();
    arr.push(target);

    for (i of graph[target]) {
      if (!visited[i]) {
        queue.push(i);
        visited[i] = true;
      }
    }
  }
}

DFS(V, visited, arr)
arr.unshift(V)
const answer = arr.join(' ');
console.log(answer);

BFS(V, visited2, arr2);
// console.log(arr2);
const answer2 = arr2.join(' ');
console.log(answer2);
