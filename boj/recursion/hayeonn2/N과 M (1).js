let input = require("fs").readFileSync("/dev/stdin").toString().split("\n");

const [n, m] = input[0].split(" ").map(Number);
const seq = [...Array(m).fill(0)];
const visited = [...Array(n).fill(false)];
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
    if (!visited[i]) {
      seq[k] = i;
      visited[i] = true;
      dfs(k + 1);
      visited[i] = false;
    }
  }
}

dfs(0);

console.log(result);

/**
 * 풀이
 * input값을 받아 배열로 저장하고 조합을 저장할 배열 seq를 0으로 초기화 시킨다.
 * 그리고 방문 여부를 확인하기 위해 visited 배열을 만들어 1~n까지 쓰일 수 있는 숫자와 아닌 숫자를 체크한다.
 * dfs 함수를 하나 만들고 for문을 통해 n 만큼 돌려 방문하지 않은 원소가 있는지 체크한다.
 * 해당 조건문(방문하지 않음)을 만족하면 seq 배열에 해당 인덱스를 저장하고, 방문표시 후 다시 dfs를 호출한다.
 * dfs가 종료되었을 때(k가 m과 같다면) 방문표시를 다시 제거한다.
 */
