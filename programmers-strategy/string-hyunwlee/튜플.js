export default function solution(s) {
  const trimedS = s.substring(1, s.length - 1);
  let idx = -1;
  const arrs = [];
  while (++idx < trimedS.length) {
    if (trimedS[idx] === '{') {
      let s = '';
      while (trimedS[++idx] !== '}')
        s += trimedS[idx];
      arrs.push(s.split(',').map(Number));
    }
  }
  const ans = [];
  arrs.sort((a, b) => a.length - b.length);
  arrs.forEach(arr => {
    arr.forEach(item => {
      if (!ans.includes(item)) {
        ans.push(item);
      }
    })
  })
  return ans;
}
