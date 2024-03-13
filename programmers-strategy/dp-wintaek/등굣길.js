// m 열의 개수, n 행의 개수
function solution(m, n, puddles) {
  const board = Array(n + 1)
    .fill()
    .map((e) => new Array(m + 1).fill(0));

  for (const [x, y] of puddles) {
    board[y][x] = "X";
  }

  board[1][1] = 1;

  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1) continue;
      if (board[i][j] !== "X") {
        board[i][j] = ((board[i - 1][j] === "X" ? 0 : board[i - 1][j]) + (board[i][j - 1] === "X" ? 0 : board[i][j - 1])) % 1000000007;
      }
    }
  }

  return board[n][m];
}
