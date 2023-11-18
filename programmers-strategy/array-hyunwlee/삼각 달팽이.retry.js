export default function solution(n) {
  if (n === 1)
    return [1];
  const arr = Array.from(Array(n), () => Array(n).fill(0));
  let num = 0;
  let i = 0;
  let j = 0;
  while (true) {
    if (limit(n) === num)
      break;
    while (i < n && arr[i][j] === 0) {
      arr[i++][j] = ++num;
    }
    --i;
    ++j;
    while (j < n && arr[i][j] === 0) {
      arr[i][j++] = ++num;
    }
    --i;
    --j;
    --j;
    while (i < n && arr[i][j] === 0) {
      arr[i--][j--] = ++num;
    }
    ++i;
    ++i;
    ++j;
  }
  const ans = [];
  arr.forEach(line => {
    line.forEach(item => {
      if (item !== 0)
        ans.push(item);
    })
  })
  return ans;
}

const limit = (n) => {
  if (n === 1) return 1;
  return n + limit(n - 1);
};

