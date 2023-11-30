export default function solution(s) {
  const stack = new Stack();
  s.split('').forEach(ch => {
    if (!stack.isEmpty() && stack.peek() === ch) {
      stack.pop();
      return;
    }
    stack.push(ch);
  })
  if (!stack.isEmpty())
    return 0;
  return 1;
}

class Stack {
  constructor() {
    this.arr = [];
  }

  pop() {
    return this.arr.pop();
  }

  push(value) {
    this.arr.push(value);
  }

  isEmpty() {
    return this.arr.length === 0;
  }

  peek() {
    return this.arr[this.arr.length - 1];
  }
}

