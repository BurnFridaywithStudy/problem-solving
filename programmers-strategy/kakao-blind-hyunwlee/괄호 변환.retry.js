function solution(p) {
  if (p === "") return "";
  let u, v;
  let cnt = 0;

  for (let i = 0; i < p.length; ++i) {
    if (p[i] === '(')
      ++cnt;
    else
      --cnt;
    if (cnt === 0) {
      u = p.slice(0, i + 1);
      v = p.slice(i + 1);
      break;
    }
  }

  if (!checkValidation(u)) {
    let str = "";
    str += `(${solution(v)})`;
    for (let i = 1; i < u.length - 1; ++i) {
      if (u[i] === '(')
        str += ")";
      else
        str += "(";
    }
    return str;
  }
  return u + solution(v);
}

function checkValidation(str) {
  const stack = new Stack();
  str.split('').forEach(ch => {
    if (ch === '(') {
      stack.push(ch);
    } else {
      if (!stack.isEmpty() && stack.peek() === '(') {
        if (ch === ')')
          stack.pop();
        else
          stack.push(ch);
      } else {
        stack.push(ch);
      }
    }
  });
  return stack.isEmpty();
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
    return this.arr[this.arr.length - 1];
  }
  size() {
    return this.arr.length;
  }
  isEmpty() {
    return this.size() === 0;
  }
}

console.log(solution("(()())()"));
console.log(solution(")("));
console.log(solution("()))((()"));
