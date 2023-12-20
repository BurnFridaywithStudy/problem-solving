let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const seq = [...Array(m).fill(0)];
const visited = [...Array(n).fill(false)];

let result = "";

function dfs(k, idx) {
  if (k === m) {
    const arr = [];

    for (let i = 0; i < m; i++) {
      arr.push(seq[i]);
    }
    return (result += `${arr.join(" ")}\n`);
  }

  for (let i = idx; i <= n; i++) {
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1, i);
      visited[i] = false;
    }
  }
}

dfs(0, 1);

console.log(result);

/**
 * 풀이
 * (1)과 다른점은 중복하는 배열을 빼는것이다.
 * 즉 [1,2]와 [2,1]을 같은 것으로 보고 제거해줘야한다.
 * 따라서 dfs 내의 for문에서 시작점을 1이 아닌 idx로 시작해주면 시작점으로부터 반복문을 시작하기 때문에 중복하는 배열을 검사하지 않게 된다.
 */
