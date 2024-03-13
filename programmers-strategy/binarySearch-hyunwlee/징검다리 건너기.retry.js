function solution(stones, k) {
  return paramertricSearch(1, 200000000, 0, stones, k);
}

//  최대 몇 명까지 징검다리를 건널 수 있는지
function paramertricSearch(start, end, curr, stones, target) {
  if (start > end)
    return curr;
  const mid = Math.floor((start + end) / 2);
  if (!countAvailable(stones, mid, target))
    return paramertricSearch(start, mid - 1, curr, stones, target)
  else
    return paramertricSearch(mid + 1, end, mid, stones, target)
}

function countAvailable(stones, expectedValue, target) {
  let jumpDistance = 0;
  for (let i = 0; i < stones.length; ++i) {
    if (stones[i] - expectedValue + 1 <= 0) {
      ++jumpDistance;
      if (jumpDistance === target)
        return false;
      continue;
    }
    jumpDistance = 0;
  }
  return true;
}

console.log(solution([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3));
console.log(solution([2, 4, 1, 2, 1, 5], 3));
// console.log(countAvailable([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 4, 3));
