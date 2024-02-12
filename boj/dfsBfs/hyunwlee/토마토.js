const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const input = [];
rl.on('line', function(line) {
  input.push(line);
}).on('close', function() {
  console.log(solution());
  process.exit();
});

function solution() {
  const [nm, ...arr] = input;
  const [m, n] = nm.split(' ').map(Number);
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const queue = new LinkedList();
  const dist = Array.from(Array(n), () => Array(m).fill(0));
  const map = arr.map((row, idx) => {
    const lines = row.split(' ').map(Number);
    return lines.map((col, jdx) => {
      if (col === 1) {
        queue.offer({ x: idx, y: jdx });
        dist[idx][jdx] = 0;
      }
      return col;
    });
  });
  while (!queue.isEmpty()) {
    const { x: nowX, y: nowY } = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= n)
        continue;
      if (ny < 0 || ny >= m)
        continue;
      if (map[nx][ny] !== 0)
        continue;
      if (dist[nx][ny] !== 0)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({ x: nx, y: ny });
    }
  }
  let ans = 0;
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      if (dist[i][j] === 0 && map[i][j] === 0)
        return -1;
      ans = Math.max(ans, dist[i][j]);
    }
  }
  return ans;
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
