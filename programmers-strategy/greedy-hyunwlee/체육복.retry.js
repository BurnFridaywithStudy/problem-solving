function solution(n, lost, reserve) {
  let answer = n;
  let realLost = lost.filter((l) => !reserve.includes(l))
  let realReserve = reserve.filter((r) => !lost.includes(r));
  answer -= realLost.length;
  realLost.sort((a, b) => a - b);
  realLost.forEach((l) => {
    if (realReserve.length === 0)
      return;
    if (realReserve.includes(l - 1)) {
      realReserve = realReserve.filter(r => r !== l - 1);
      ++answer;
    } else if (realReserve.includes(l + 1)) {
      realReserve = realReserve.filter(r => r !== l + 1);
      ++answer;
    }
  });
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
console.log(solution(5, [2, 4], [3]));
console.log(solution(3, [3], [1]));
