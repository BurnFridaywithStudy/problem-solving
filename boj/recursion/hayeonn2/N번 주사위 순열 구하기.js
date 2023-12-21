let input = require("fs").readFileSync("test.txt").toString().split("\n");

const m = +input;
const seq = Array(m).fill(0);
let result = "";

function dfs(k) {
  if (k === m) {
    const arr = [];

    for (let i = 0; i < m; i++) {
      arr.push(seq[i]);
    }

    return (result += `${arr.join(" ")}\n`);
  }

  for (let i = 1; i <= 6; i++) {
    seq[k] = i;
    dfs(k + 1);
  }
}

dfs(0);

console.log(result);

/**
 * 풀이
 * n과 m(3)처럼 중복해서 숫자를 뽑는 문제이다.
 * 따라서, 이 문제 또한 방문여부를 검사하지 않고 반복문을 돌려 풀어주면 된다.
 */
