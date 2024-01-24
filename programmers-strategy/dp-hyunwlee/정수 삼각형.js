function solution(triangle) {
  const memo = Array.from(Array(triangle.length), () => Array(triangle.length).fill(0));
  memo[0][0] = triangle[0][0];
  for (let i = 1; i < triangle.length; ++i) {
    memo[i][0] = memo[i - 1][0] + triangle[i][0];
    memo[i][i] = memo[i - 1][i - 1] + triangle[i][i];
  }
  for (let i = 1; i < triangle.length; ++i) {
    for (let j = 1; j < triangle[i].length - 1; ++j) {
      memo[i][j] = Math.max(memo[i - 1][j - 1], memo[i - 1][j]) + triangle[i][j];
    }
  }
  // topDown(triangle.length - 1, triangle.length - 1, memo, triangle)
  let ans = 0;
  for (let i = 0; i < triangle.length; ++i) {
    ans = Math.max(ans, memo[triangle.length - 1][i]);
  }
  return ans;
}

// 7
// 3 8
// 8 1 0
// 2 7 4 4
// 4 5 2 6 5

// 테두리 초기화가 먼저 이뤄져야 함
// topDown => bottomUp 더 낫다.
function topDown(i, j, memo, triangle) {
  if (memo[i][j] > 0)
    return memo[i][j];
  if (i === 0)
    return memo[0][0] = triangle[0][0];
  if (i === j)
    return memo[i][j] = memo[i - 1][j] + triangle[i][j];
  if (j === 0)
    return memo[i][0] = memo[i - 1][0] + triangle[i][0];
  return memo[i][j] =
    //  Math.max(memo[i - 1][j], memo[i - 1][j + 1]) + triangle[i][j];
    Math.max(
      topDown(i - 1, j - 1, memo, triangle),
      topDown(i - 1, j, memo, triangle)
    ) + triangle[i][j];
}

console.log(solution(
  [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]
));
