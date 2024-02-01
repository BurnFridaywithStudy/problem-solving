function solution(n, vertex) {
  const lists = Array.from(Array(n + 1), () => []);
  vertex.forEach(([from, to]) => {
    lists[from].push(to);
    lists[to].push(from);
  });
  const dist = Array(n + 1).fill(-1);
  const sortedLists = lists.map(list => list.sort((a, b) => a - b));
  const queue = new LinkedList();
  queue.offer(1);
  dist[1] = 0;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    sortedLists[now].forEach(next => {
      if (dist[next] === -1) {
        dist[next] = dist[now] + 1;
        queue.offer(next);
      }
    });
  }
  const max = Math.max(...dist);
  return dist.reduce((cal, cur) => {
    if (cur === max)
      return cal + 1;
    return cal;
  }, 0);
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

console.log(solution(6, [[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]));
