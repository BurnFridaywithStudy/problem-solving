function solution(n, computers) {
  const check = Array(n).fill(false);
  let answer = 0;
  for (let i = 0; i < n; ++i) {
    if (!check[i]) {
      bfs(i, computers, check);
      ++answer;
    }
  }
  return answer;
}

function bfs(start, computers, check) {
  const queue = new LinkedList();
  queue.offer(start);
  check[start] = true;
  while (!queue.isEmpty()) {
    const now = queue.poll();
    for (let next = 0; next < computers.length; ++next) {
      if (now === next)
        continue;
      if (computers[now][next] !== 1)
        continue;
      if (check[next])
        continue;
      check[next] = true;
      queue.offer(next);
    }
  }
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

console.log(solution(3, [[1, 1, 0], [1, 1, 0], [0, 0, 1]]));
console.log(solution(3, [[1, 1, 0], [1, 1, 1], [0, 1, 1]]));
