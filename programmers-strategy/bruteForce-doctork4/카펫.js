function solution(brown, yellow) {
  const arr = []
  const area = brown + yellow;
  
  for (let i = 3; i <= area; i++) {
    const quotient = area / i;
    if (Number.isInteger(quotient) && area % i === 0 && quotient >= 3) {
      if (area - (2 * i) - (2 * quotient) + 4 === yellow && (2 * i) + (2 * quotient) - 4 === brown) {
        arr.push(i);
      }
    }
  }
  arr.length === 1 ? arr.push(arr[0]) : arr.sort((a,b) => b - a);
  return arr
}
// b + y = [ width * height ] => area
// yellow = wh -2w -2h + 4
// 1 이상 => 가로 / 세로 최소 3 이상
// brown = 2w + 2(h-2) = 2w + 2h -4