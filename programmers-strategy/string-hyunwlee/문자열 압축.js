export default function solution(s) {
  let num = Math.floor(s.length / 2); // 가장 줄일 수 있는 경우
  let ans = s.length;
  while (num > 0) {
    let cnt = Math.floor(s.length / num); // num 몇 개까지 가능?
    const stack = new Stack();
    let n = 0;
    while (cnt > 0) {
      const target = s.substring(n, n + num);
      if (!stack.isEmpty() && stack.peek() === target) {
        stack.pop();
        if (!stack.isEmpty() && typeof stack.peek() === 'number') {
          const val = stack.pop() + 1;
          stack.push(val);
          stack.push(target);
        } else {
          stack.push(2);
          stack.push(target);
        }
      } else {
        stack.push(target);
      }
      --cnt;
      n += num;
    }
    if (s.substring(n, s.length).length !== 0)
      stack.push(s.substring(n, s.length));
    --num;
    ans = Math.min(ans, stack.arr.join('').length);
  }
  return ans;

  // aabbaccc
  // 2a2ba3c
  //
  // ababcdcdababcdcd
  // 2ab2cd2ab2cd
  //
  // aabbaabb
  // 2a2b2a2b
  // 2aabb
  // 22a2b
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

  peek() {
    return this.arr[this.arr.length - 1];
  }

  isEmpty() {
    return this.arr.length === 0;
  }
}
