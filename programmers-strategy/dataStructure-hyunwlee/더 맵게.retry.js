function solution(scoville, k) {
  const pq = new PriorityQueue((a, b) => a < b);
  for (let i = 0; i < scoville.length; ++i) {
    pq.offer(scoville[i]);
  }
  let cnt = 0;
  while (pq.peek() < k) {
    if (pq.size() === 1)
      return -1;
    const first = pq.poll();
    const second = pq.poll();
    pq.offer(calScovile(first, second));
    ++cnt;
  }
  return cnt;
  /*
  while (!pq.isEmtpy()) {
    const first = pq.poll();
    if (!pq.isEmpty()) {
      const second = pq.poll();
      const newThing = calScovile(first, second);
      ++cnt;
    if (newThing >= k)
      break;
     pq.offer(newThing);
    } else {
      break;
    }
  }
  if (cnt === scoville.length)
    return -1;
  return cnt === 0 ? -1 : cnt;
  */
}

const calScovile = (first, second) => first + second * 2;

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
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }
}


console.log('--7--');
console.log(solution([1, 2, 3, 9, 10, 12], 7));
console.log('--14--');
console.log(solution([1, 2, 3, 9, 10, 12], 14));
console.log('--21--');
console.log(solution([1, 2, 3, 9, 10, 12], 21));
console.log('--28--');
console.log(solution([1, 2, 3, 9, 10, 12], 28));
console.log('--35--');
console.log(solution([1, 2, 3, 9, 10, 12], 35));
console.log('--42--');
console.log(solution([1, 2, 3, 9, 10, 12], 42));
console.log('--49--');
console.log(solution([1, 2, 3, 9, 10, 12], 49));
console.log('--56--');
console.log(solution([1, 2, 3, 9, 10, 12], 56));
console.log('--63--');
console.log(solution([1, 2, 3, 9, 10, 12], 63));
console.log('--126--');
console.log(solution([1, 2, 3, 9, 10, 12], 126));
console.log('--252--');
console.log(solution([1, 2, 3, 9, 10, 12], 252));
