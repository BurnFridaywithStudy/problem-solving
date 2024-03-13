function solution(n, results) {
  const dist = Array.from(Array(n + 1), () => Array(n + 1).fill('?'));
  for (let i = 1; i <= n; ++i)
    dist[i][i] = 0;
  results.forEach(([winner, loser]) => {
    dist[winner][loser] = 1;
    dist[loser][winner] = -1;
  });
  for (let mid = 1; mid <= n; ++mid) {
    for (let i = 1; i <= n; ++i) {
      for (let j = 1; j <= n; ++j) {
        if (dist[i][mid] === 1 && dist[mid][j] === 1)
          dist[i][j] = 1;
        if (dist[i][mid] === -1 && dist[mid][j] === -1)
          dist[i][j] = -1;
      }
    }
  }
  let ans = 0;
  for (let i = 1; i <= n; ++i) {
    if (dist[i].splice(1).every((val) => val !== '?'))
      ++ans;
  }
  return ans;
}

/*
function print(dist) {
  let s = '';
  for (let i = 1; i <= dist.length - 1; ++i) {
    for (let j = 1; j <= dist[0].length - 1; ++j) {
      s += dist[i][j] + ' ';
    }
    s += '\n';
  }
  console.log(s);
}
*/

console.log(solution(5, [[4, 3], [4, 2], [3, 2], [1, 2], [2, 5]]));
