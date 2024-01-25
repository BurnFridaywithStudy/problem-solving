function solution(m, n, puddles) {
  const board = Array.from(Array(n + 1), () => Array(m + 1).fill(0));
  for (const [x, y] of puddles)
    board[y][x] = "X";
  board[1][1] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      if (i === 1 && j === 1)
        continue;
      if (board[i][j] === "X")
        continue;
      board[i][j] =
        (
          (
            board[i - 1][j] === "X" ?
              0 : board[i - 1][j]) +
          (
            board[i][j - 1] === "X" ?
              0 : board[i][j - 1]
          )
        )
        % 1000000007;
    }
  }
  return board[n][m];
}

/*
 * 장애물에 의한 edge line을 해결 못한 코드.
function solution(m, n, puddles) {
  const MOD = 1000000007;
  const memo = Array.from(Array(n), () => Array(m).fill(false));
  const puddlesMap = Array.from(Array(n), () => Array(m).fill(false));
  puddles.forEach(([y, x]) => {
    puddlesMap[x - 1][y - 1] = true;
  });
  memo[0][0] = 1;
  for (let i = 0; i < n; ++i) {
    if (!puddlesMap[i][0])
      memo[i][0] = 1;
  }
  for (let j = 0; j < m; ++j) {
    if (!puddlesMap[0][j])
      memo[0][j] = 1;
  }
  for (let i = 1; i < n; ++i) {
    for (let j = 1; j < m; ++j) {
      if (!puddlesMap[i][j])
        memo[i][j] = (memo[i - 1][j] + memo[i][j - 1]) % MOD;
    }
  }
  return memo[n - 1][m - 1] % MOD;
}
*/

/*
 * FAIL
 * 최단경로를 도출하는 것이 아니라
 * 최단경로의 개수를 도출하는 문제
function solution(m, n, puddles) {
  const MOD = 1000000007;
  const dist = Array.from(Array(n), () => Array(m).fill(-1));
  const dx = [1, 0];
  const dy = [0, 1];
  puddles.forEach(([y, x]) => {
    dist[x - 1][y - 1] = -1;
  });
  const queue = new LinkedList();
  queue.offer({ x: 0, y: 0 });
  dist[0][0] = 1;
  while (!queue.isEmpty()) {
    const { x: nowX, y: nowY } = queue.poll();
    for (let i = 0; i < 2; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx >= n)
        continue;
      if (ny >= m)
        continue;
      if (dist[nx][ny] !== -1)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({ x: nx, y: ny });
    }
  }
  return (dist[n - 1][m - 1] - 2) % MOD;
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  offer(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    ++this.size;
  }

  poll() {
    const polledValue = this.head.value;
    this.head = this.head.next;
    if (!this.head)
      this.tail = null;
    --this.size;
    return polledValue;
  }

  isEmpty() {
    return this.size === 0;
  }
}
*/

console.log(solution(4, 3, [[2, 2]]));
