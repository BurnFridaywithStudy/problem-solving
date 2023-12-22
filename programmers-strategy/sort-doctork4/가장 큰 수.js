function solution(numbers) {
  const m = numbers.length;
  const visited = Array(m).fill().map(v => false);
  let arr = Array(m).fill(' ');
  let combinations = [];
  
  function dfs(level) {
    if (level === m) {
      // console.log(arr);
      combinations.push(arr.reduce((acc, curr) =>  acc + curr, ""));
      return;
    }

    for (let i = 0; i < m; i++) {
      if (visited[i]) continue;
      visited[i] = true;
      arr[level] = numbers[i];
      dfs(level + 1);
      visited[i] = false;
    }
  }

  dfs(0);
  // console.log(combinations)
  combinations = combinations.map(Number).sort((a, b) => b - a);
  return combinations[0].toString();
}