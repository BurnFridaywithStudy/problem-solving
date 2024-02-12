function solution(maps) {
  const dx = [0, 0, -1, 1];
  const dy = [-1, 1, 0, 0];
  const dist = Array.from(Array(maps.length), () => Array(maps[0].length).fill(0));
  const queue = new LinkedList();
  queue.offer({ x: 0, y: 0 });
  dist[0][0] = 1;
  while (!queue.isEmpty()) {
    const { x: nowX, y: nowY } = queue.poll();
    for (let i = 0; i < 4; ++i) {
      const nx = nowX + dx[i];
      const ny = nowY + dy[i];
      if (nx < 0 || nx >= maps.length)
        continue;
      if (ny < 0 || ny >= maps[0].length)
        continue;
      if (maps[nx][ny] === 0)
        continue;
      if (dist[nx][ny] !== 0)
        continue;
      dist[nx][ny] = dist[nowX][nowY] + 1;
      queue.offer({ x: nx, y: ny });
    }
  }
  const answer = dist[maps.length - 1][maps[0].length - 1];
  if (answer === 0)
    return -1;
  return answer;
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

console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 1], [0, 0, 0, 0, 1]]));
console.log(solution([[1, 0, 1, 1, 1], [1, 0, 1, 0, 1], [1, 0, 1, 1, 1], [1, 1, 1, 0, 0], [0, 0, 0, 0, 1]]));
