function solution(jobs) {
  jobs.sort((a, b) => (a[0] - b[0]));
  const pq = new PriorityQueue((a, b) => (a[1] < b[1]));
  let answer = 0;
  let endTime = 0;
  let jobIdx = 0;

  while (jobIdx < jobs.length || !pq.isEmpty()) {
    if (jobIdx < jobs.length && jobs[jobIdx][0] <= endTime) {
      pq.offer(jobs[jobIdx++]);
      continue;
    }
    if (!pq.isEmpty()) {
      const [arrival, burst] = pq.poll();
      const waitingTime = endTime - arrival + burst;
      endTime += burst;
      answer += waitingTime;
    } else {
      endTime = jobs[jobIdx][0];
    }
  }
  return Math.floor(answer / jobs.length);
}
const top = 0;
const parent = i => ((i + 1) >>> 1) - 1;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;

class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this._heap = [];
    this._comparator = comparator;
  }

  size() {
    return this._heap.length;
  }

  isEmpty() {
    return this.size() == 0;
  }

  peek() {
    return this._heap[top];
  }

  _greater(i, j) {
    return this._comparator(this._heap[i], this._heap[j]);
  }

  _swap(i, j) {
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }

  offer(...values) {
    values.forEach(value => {
      this._heap.push(value);
      this._siftUp();
    });
    return this.size();
  }

  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }

  poll() {
    const poppedValue = this.peek();
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop();
    this._siftDown();
    return poppedValue;
  }

  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node)))
        ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}

console.log(solution([[0, 3], [1, 9], [2, 6]]));
console.log(solution([[0, 10], [4, 10], [5, 11], [15, 2]]));
console.log(solution([[0, 3], [1, 9], [4, 6]]));
