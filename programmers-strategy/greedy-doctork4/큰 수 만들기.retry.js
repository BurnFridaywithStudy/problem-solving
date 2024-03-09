function solution(number, k) {
  const stack = [];
  let count = k;
  for (const num of number) {
    while (count > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      count += -1;
    }
    stack.push(num);
  }

  stack.splice(stack.length - count, count);

  return stack.join('');
}

console.log(solution('1231234', 3)); // "3234"

/**
 * count = 2
 * [1]
 * [9] count = 1
 * [9, 2]
 * [9, 4] count = 2
 * 
 * stack.splice(2-0, 0)
 * splice(변경을 시작할 인덱스, 삭제할 요소 수, 추가할 요소1, 추가할 요소2, ...)
 */