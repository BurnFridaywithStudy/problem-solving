function solution(number, k) {
  const stack = new Stack();

  number.split('').forEach(num => {
    while (k > 0 && stack.peek() < num) {
      stack.pop();
      --k;
    }
    stack.push(num);
  });
  stack.arr.splice(stack.arr.length - k, k);
  return stack.arr.join("");
}

class Stack {
  constructor() {
    this.arr = [];
  }

  push(value) {
    this.arr.push(value);
  }

  pop() {
    return this.arr.pop();
  }

  peek() {
    return this.arr[this.size() - 1];
  }

  size() {
    return this.arr.length;
  }

  isEmpty() {
    return this.size() === 0;
  }
}

/* [시간 초과 + Stack Overflow]
let max = null;
function solution(number, k) {
  const check = Array(number.length - k).fill(false);
  max = -Infinity;
  recurse(0, 0, number.length, number.length - k, '', check, number)
  return String(max);
}

function recurse(depth, start, n, m, str, check, number) {
  if (depth === m) {
    max = Math.max(max, Number(str));
    return;
  }
  for (let i = start; i < n; ++i) {
    if (!check[i]) {
      check[i] = true;
      recurse(depth + 1, i + 1, n, m, str + number[i], check, number);
      check[i] = false;
    }
  }
}
*/

/*
console.log(solution("1924", 2));
console.log(solution("1231234", 3));
console.log(solution("4177252841", 4));
console.log(solution("720378", 2));
console.log(solution("999", 1));
*/

console.log(solution("928857", 3)); //988
console.log(solution("99991", 3)); // 99
console.log(solution("10001", 3)); // 11
