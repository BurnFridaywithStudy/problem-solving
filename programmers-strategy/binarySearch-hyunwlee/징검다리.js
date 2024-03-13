function solution(distance, rocks, n) {
  const locations = [0, ...rocks.sort((a, b) => (a - b)), distance];
  return parametricSearch(1, 1000000000, 0, locations, n);
}

function parametricSearch(start, end, curr, locations, n) {
  if (start > end)
    return curr;
  const mid = Math.floor((start + end) / 2);
  let pickedRock = 0;
  let caledSum = 1;
  for (let i = 1; i < locations.length; ++i) {
    if (locations[i] - pickedRock >= mid) {
      pickedRock = locations[i];
      ++caledSum;
    }
  }
  if (caledSum > locations.length - n)
    return parametricSearch(mid + 1, end, mid, locations, n);
  if (caledSum === locations.length - n)
    return parametricSearch(mid + 1, end, mid, locations, n);
  if (caledSum < locations.length - n)
    return parametricSearch(start, mid - 1, curr, locations, n);
}

console.log(solution(25, [2, 14, 11, 21, 17], 2));
