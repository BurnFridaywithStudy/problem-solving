export default function solution(places) {
  const ans = [];
  places.forEach(place => {
    const maps = place.map(item => item.split(''));
    const pArray = [];
    maps.forEach((line, idx) => {
      line.forEach((item, jdx) => {
        if (item === 'P') {
          pArray.push({ x: idx, y: jdx });
        }
      })
    })
    for (let i = 0; i < pArray.length; ++i) {
      const { x, y } = pArray[i];
      const dist = bfs(x, y, maps);
      for (let j = i; j < pArray.length; ++j) {
        const { x: anotherX, y: anotherY } = pArray[j];
        if (dist[anotherX][anotherY] >= 1 && dist[anotherX][anotherY] <= 2) {
          ans.push(0);
          return;
        }
      }
    }
    ans.push(1);
  })
  return ans;
}

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];

function bfs(startX, startY, maps) {
  const queue = new LinkedList();
  const dist = Array.from(Array(5), () => Array(5).fill(-1));
  queue.offer({ x: startX, y: startY });
  dist[startX][startY] = 0;
  while (!queue.isEmpty()) {
    const { x: nowX, y: nowY } = queue.poll();
    for (let j = 0; j < 4; ++j) {
      const nx = nowX + dx[j];
      const ny = nowY + dy[j];
      if (nx < 0 || nx >= 5) continue;
      if (ny < 0 || ny >= 5) continue;
      if (dist[nx][ny] !== -1) continue;
      if (maps[nx][ny] === 'X') continue;
      queue.offer({ x: nx, y: ny });
      dist[nx][ny] = dist[nowX][nowY] + 1;
    }
  }
  return dist;
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
