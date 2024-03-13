function solution(progresses, speeds) {
  const ans = [];
  const queue = new LinkedList();
  progresses.forEach((progress, idx) => {
    queue.offer(countDelay(progress, speeds[idx]));
  });
  while (!queue.isEmpty()) {
    let endCnt = 1;
    const polledValue = queue.poll();
    while (!queue.isEmpty() && polledValue >= queue.peek()) {
      ++endCnt;
      queue.poll();
    }
    ans.push(endCnt);
  }
  return ans;
}

function countDelay(progress, speed) {
  let rest = 100 - progress;
  let delay = 0;
  while (rest > 0) {
    ++delay;
    rest -= speed;
  }
  return delay;
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

  peek() {
    return this.head.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}

console.log(solution([93, 30, 55], [1, 30, 5]));
console.log(solution([95, 90, 99, 99, 80, 99], [1, 1, 1, 1, 1, 1]));

// 93: 94 95 96 97 98 99 100        => 7
// 30: 60 90 100                    => 3
// 55: 60 65 70 75 80 85 90 95 100  => 9
//
// 95: 96 97 98 99 100  => 5
// 90: 91 92 93 94 95 96 97 98 99 100 => 10
// 99: 100 => 1
// 99: 100 => 1
// 80: 81 82 83 84 85 86 87 88 89 90
//     91 92 93 94 95 96 97 98 99 100 => 20
// 99: 100 => 1
