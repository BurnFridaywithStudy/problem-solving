export default function solution(n) {
  let s = '';
  while (n > 0) {
    s = s + Math.floor(n % 3);
    n = Math.floor(n / 3);
  }
  let idx = -1;
  while (++idx < s.length && s[idx] === '0')
    ;
  s = s.substring(idx, s.length);
  let ans = 0;
  idx = -1;
  while (++idx < s.length) {
    const test = Number(s[idx]);
    ans = ans * 3 + test;
  }
  return ans;
}

//solution(99999998);
/*
solution(99999998);
정수형으로 변경해서 00을 없애려고 했음.
Number(22121021111022200) => 8byte 넘어선다. Number overflow 
따라서, 정수형으로 변경하면 안된다.
export default function solution(n) {
  let s = '';
  while (n > 0) {
    s = s + Math.floor(n % 3);
    n = Math.floor(n / 3);
  }
  const num = Number(s); 
  console.log(num);
  let idx = -1;
  let ans = 0;
  while (++idx < String(num).length) {
    const test = Number((String(num)[idx]));
    ans = ans * 3 + test;
  }
  return ans;
}
*/
