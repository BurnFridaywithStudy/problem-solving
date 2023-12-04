let ans = null;

function solution(num) {
  ans = -1;
  if (num === 1)
    return 0;
  recurse(0, num);
  return ans;
}

function recurse(depth, num) {
  if (num === 1) {
    ans = depth;
    return;
  }
  if (depth >= 500) {
    return;
  }
  if (num % 2 === 0)
    recurse(depth + 1, num / 2);
  else
    recurse(depth + 1, num * 3 + 1);
}

console.log(solution(6));
console.log(solution(16));
console.log(solution(626331));
