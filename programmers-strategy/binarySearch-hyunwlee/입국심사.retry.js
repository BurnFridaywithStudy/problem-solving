function solution(n, times) {
  return parametricSearch(1, 1000000000 * n, 0, times, n);
}

function parametricSearch(start, end, curr, times, target) {
  if (start > end) {
    return curr;
  }
  const mid = Math.floor((start + end) / 2);
  const [caledSum, isFit] = checkIsFit(times, mid);
  if (caledSum < target) {
    return parametricSearch(mid + 1, end, curr, times, target);
  } else if (caledSum === target && isFit) {
    return mid;
  } else if (caledSum === target && !isFit) {
    return parametricSearch(start, mid - 1, mid, times, target);
  } else if (caledSum > target) {
    return parametricSearch(start, mid - 1, mid, times, target);
  }
}

function checkIsFit(times, expectedValue) {
  let isFit = false;
  let sum = 0;
  for (let i = 0; i < times.length; ++i) {
    sum += Math.floor(expectedValue / times[i]);
    if (expectedValue % times[i] === 0)
      isFit = true;
  }
  return [sum, isFit];
}

console.log(solution(6, [7, 10]));
console.log(solution(59, [1, 1]));
