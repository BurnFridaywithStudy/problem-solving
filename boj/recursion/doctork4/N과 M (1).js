/**
 * 자연수 N과 M이 주어졌을 때, 아래 조건을 만족하는 길이가 M인 수열을 모두 구하는 프로그램을 작성하시오.
  > 1부터 N까지 자연수 중에서 중복 없이 M개를 고른 수열
 */

// 사전 순으로 출력해야함

const fs = require('fs');
let input = fs.readFileSync('input.txt').toString(); // local vscode 구동 코드
// let input = fs.readFileSync('/dev/stdin').toString(); // 백준 제출용 코드
const arr = input.split(' ').map(i => i = Number(i));
const [N, M] = arr;

const visited = Array(N+1).fill().map(v => false);
const depth = Array(M).fill('');
// console.log(depth);
dfs(0);

function dfs (level) {
  // level이 M이 되면서 depth에 있는 값들을 합해서 출력
  if (level === M) {
    console.log(depth.join(' '));
    return;
  }

  for (let i = 1; i <= N; i++) {
    if (visited[i]) continue;

    visited[i] = true;
    depth[level] = i;
    dfs(level + 1);
    visited[i] = false;
  }
}
