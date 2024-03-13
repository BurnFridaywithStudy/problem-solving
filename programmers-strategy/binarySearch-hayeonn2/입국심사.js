function solution(n, times) {
  // end: 최대 심사 시간
  let [start, end] = [1, Math.max(...times) * n];
  let result = end;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    let sum = 0;

    for (const time of times) {
      sum += parseInt(mid / time);

      if (sum >= n) {
        result = Math.min(mid, result);
      }
    }

    if (sum >= n) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return result;
}
