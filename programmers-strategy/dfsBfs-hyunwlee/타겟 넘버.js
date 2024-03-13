function solution(numbers, target) {
  return recurse(0, numbers, 0, target, '');
}

function recurse(depth, numbers, current, target, path) {
  if (depth === numbers.length) {
    if (current === target)
      return 1;
    return 0;
  }

  let ans = 0;
  ans += recurse(depth + 1, numbers, current + numbers[depth], target, path + ', -' + numbers[depth]);
  ans += recurse(depth + 1, numbers, current - numbers[depth], target, path + ', +' + numbers[depth]);
  return ans;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
