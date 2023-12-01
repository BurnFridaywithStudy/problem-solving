function solution(play_list, listen_time) {
  const totalSongTime = play_list.reduce((cal, curr) => cal + curr, 0);
  if (listen_time >= totalSongTime)
    return play_list.length;

  const queue = new LinkedList();
  play_list.forEach((song, songIdx) => {
    for (let i = 0; i < song; ++i)
      queue.offer(songIdx);
  });

  let max = -Infinity;
  for (let i = 0; i < queue.size; ++i) {
    const set = new Set();
    let node = queue.head;
    let idx = -1;
    while (++idx < listen_time) {
      set.add(node.value);
      node = node.next;
    }
    max = Math.max(max, set.size);
    queue.offer(queue.poll());
  }
  return max;
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

console.log(solution([2, 3, 1, 4], 3));
console.log(solution([1, 2, 3, 4], 5));
console.log(solution([1, 2, 3, 4], 20));
