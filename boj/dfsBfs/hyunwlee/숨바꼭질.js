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
  const [subin, younger] = input[0].split(' ').map(Number);
  const dist = Array(100001).fill(-1);
  const queue = new LinkedList();
  dist[subin] = 0;
  queue.offer(subin);
  while (!queue.isEmpty()) {
    const now = queue.poll();
    if (now === younger)
      return dist[now];
    let next = now * 2;
    if (0 <= next && next <= 100000) {
      if (dist[next] === -1) {
        dist[next] = dist[now] + 1;
        queue.offer(next);
      }
    }
    next = now + 1;
    if (0 <= next && next <= 100000) {
      if (dist[next] === -1) {
        dist[next] = dist[now] + 1;
        queue.offer(next);
      }
    }
    next = now - 1;
    if (0 <= next && next <= 100000) {
      if (dist[next] === -1) {
        dist[next] = dist[now] + 1;
        queue.offer(next);
      }
    }
  }
  return dist[younger];
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
