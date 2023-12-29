let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const seq = [...Array(m).fill(0)];
let result = "";

function dfs(k) {
  if (k === m) {
    const arr = [];

    for (let i = 0; i < m; i++) {
      arr.push(seq[i]);
    }
    return (result += `${arr.join(" ")}\n`);
  }
  for (let i = 1; i <= n; i++) {
    seq[k] = i;
    dfs(k + 1);
  }
}

dfs(0);

console.log(result);

/**
 * 풀이
 * (1), (2)와 다른점은 나 자신의 수도 포함해서 배열에 넣는것이다.
 * 이땐 방문여부를 확인하지 않고 반복문을 돌려주면 된다.
 */
