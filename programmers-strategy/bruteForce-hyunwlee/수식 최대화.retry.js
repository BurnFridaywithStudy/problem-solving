let max = null;
function solution(expression) {
  max = -Infinity;
  const OPERATION = ['+', '-', '*']
  const check = Array(OPERATION.length).fill(false);
  const arr = Array(OPERATION.length).fill(0);
  // * + -
  // 0 1 2
  // 0 2 1
  // 1 0 2
  // 1 2 0
  // 2 0 1
  // 2 1 0
  recurse(0, OPERATION, check, arr, expression);
  return max;
}

function recurse(depth, OPERATION, check, arr, expression) {
  if (depth === OPERATION.length) {
    let operatationQueue = new LinkedList();
    let noneOperationQueue = new LinkedList();
    let temp = '';
    expression.split('').forEach((ch, idx) => {
      if (idx === expression.length - 1) {
        temp += ch;
        noneOperationQueue.offer(Number(temp));
        return;
      }
      if (ch === '+' || ch === '-' || ch === '*') {
        operatationQueue.offer(ch);
        noneOperationQueue.offer(Number(temp));
        temp = '';
      } else {
        temp += ch;
      }
    });
    max = Math.max(max, calMoney(operatationQueue, noneOperationQueue, OPERATION, arr));
    return;
  }
  for (let i = 0; i < OPERATION.length; ++i) {
    if (!check[i]) {
      check[i] = true;
      arr[depth] = i;
      recurse(depth + 1, OPERATION, check, arr, expression);
      check[i] = false;
    }
  }
}

function calMoney(operatationQueue, noneOperationQueue, OPERATION, arr) {
  let answer = 0;
  let tempOperQueue = new LinkedList();
  let tempNoneOperQueue = new LinkedList();
  arr.forEach(num => {
    const target = OPERATION[num];
    while (!operatationQueue.isEmpty()) {
      if (target === operatationQueue.head.value) {
        const first = noneOperationQueue.poll();
        if (target === '+') {
          answer = first + noneOperationQueue.poll();
          operatationQueue.poll();
        } else if (target === '-') {
          answer = first - noneOperationQueue.poll();
          operatationQueue.poll();
        } else if (target === '*') {
          answer = first * noneOperationQueue.poll();
          operatationQueue.poll();
        }
        tempNoneOperQueue.offer(answer);
        while (!operatationQueue.isEmpty()) {
          const polledValue = operatationQueue.poll();
          tempOperQueue.offer(polledValue);
        }
        while (!noneOperationQueue.isEmpty()) {
          const polledValue = noneOperationQueue.poll();
          tempNoneOperQueue.offer(polledValue);
        }
        operatationQueue = new LinkedList();
        noneOperationQueue = new LinkedList();
        while (!tempOperQueue.isEmpty()) {
          const polledValue = tempOperQueue.poll();
          operatationQueue.offer(polledValue);
        }
        while (!tempNoneOperQueue.isEmpty()) {
          const polledValue = tempNoneOperQueue.poll();
          noneOperationQueue.offer(polledValue);
        }
        tempOperQueue = new LinkedList();
        tempNoneOperQueue = new LinkedList();
      } else {
        tempOperQueue.offer(operatationQueue.poll());
        tempNoneOperQueue.offer(noneOperationQueue.poll());
      }
    }
    while (!operatationQueue.isEmpty()) {
      const polledValue = operatationQueue.poll();
      tempOperQueue.offer(polledValue);
    }
    while (!noneOperationQueue.isEmpty()) {
      const polledValue = noneOperationQueue.poll();
      tempNoneOperQueue.offer(polledValue);
    }
    while (!tempOperQueue.isEmpty()) {
      const polledValue = tempOperQueue.poll();
      operatationQueue.offer(polledValue);
    }
    while (!tempNoneOperQueue.isEmpty()) {
      const polledValue = tempNoneOperQueue.poll();
      noneOperationQueue.offer(polledValue);
    }
    tempOperQueue = new LinkedList();
    tempNoneOperQueue = new LinkedList();
  });
  return Math.abs(answer);
}

function showQueue(queue) {
  let node = queue.head;
  while (node) {
    console.log(node.value);
    node = node.next;
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

console.log(solution("100-200*300-500+20"));
console.log(solution("50*6-3*2"));
