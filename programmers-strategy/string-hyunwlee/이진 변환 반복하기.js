let ans = null;

export default function solution(s) {
  ans = [0, 0];
  recurse(0, s, 0);
  return ans;
}

function recurse(depth, s, sum) {
  if (s === '1') {
    ans[0] = depth;
    ans[1] = sum;
    return;
  }
  const excpectedZeroCount = countExceptZeroDigit(s);
  recurse(depth + 1, converToStringTypeBinary(excpectedZeroCount), sum + s.length - excpectedZeroCount);
}

function countExceptZeroDigit(s) {
  let i = -1;
  let result = '';
  while (++i < s.length) {
    if (s[i] !== '0')
      result += s[i];
  }
  return result.length;
}

function converToStringTypeBinary(num) {
  let s = '';
  while (num > 0) {
    s = Math.floor(num % 2) + s;
    num = Math.floor(num / 2);
  }
  return s;
}
