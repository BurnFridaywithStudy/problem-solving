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
  const [n, m] = nm.split(' ').map(Number);
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const dist = Array.from(Array(n), () => Array(m).fill(0));
  const queue = new LinkedList();
  queue.offer({ x: 0, y: 0 });
  dist[0][0] = 1;
  while (!queue.isEmpty()) {
    const { x: nowX, y: nowY } = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= n)
        continue;
      if (ny < 0 || ny >= m)
        continue;
      if (arr[nx][ny] === '0')
        continue;
      if (dist[nx][ny] !== 0)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({ x: nx, y: ny });
    }
  }
  return dist[n - 1][m - 1];
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
