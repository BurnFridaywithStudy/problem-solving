let ans = null;
let cnt = null;
function solution(word) {
  ans = 0;
  cnt = 0;
  recurse(0, word, '');
  return ans;
}


function recurse(depth, target, s) {
  if (s === target) {
    ans = cnt;
    return;
  }
  if (depth === 6) {
    return;
  }
  ++cnt;
  recurse(depth + 1, target, s + 'A');
  recurse(depth + 1, target, s + 'E');
  recurse(depth + 1, target, s + 'I');
  recurse(depth + 1, target, s + 'O');
  recurse(depth + 1, target, s + 'U');
}

console.log(solution('AAAAE'));
console.log(solution('AAAE'));
console.log(solution('I'));
console.log(solution('EIO'));
