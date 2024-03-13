function solution(distance, rocks, n) {
  // 맨 처음과 끝을 추가해준다.
  rocks.push(0);
  rocks.push(distance);
  // 바위 위치 오름차순 정렬
  rocks.sort((a, b) => a - b);

  // 이분탐색의 대상 => 바위 사이의 최소 간격
  let answer = 0;
  let start = 0;
  let end = distance;
  
  while (start <= end) {
    let removeCount = 0;
    let prev = 0;
    const mid = Math.floor((start + end) / 2);
    // 순회하면서 mid로 설정한 최소간격을 유지하면서 바위를 하나씩 빼봄 
    for (let i = 1; i < rocks.length; i++) {
      // 최소간격을 유지하면 count를 하나 올려주고
      if (rocks[i] - prev <= mid) removeCount += 1;
      // 유지하지 못하면 prev(포인터)값을 이동시켜줌
      else prev = rocks[i];
    }
    // 그렇게 집계한 카운터가 n보다 작거나 같다면 충족하는 mid(최소간격)이라는 뜻 => 최소간격을 더 늘려서 탐색 
    if (removeCount <= n) {
      start = mid + 1;
      // 최소간격들 중 최대값을 구해야함으로 answer값을 업데이트 (기존값과 새로 충족하는 값간 최대값으로 업데이트)
      answer = Math.max(start, answer);
    }
    // 더 많이 바위를 제거해야 최소간격이 유지된다면 최소간격의 폭을 줄여야함 
    if (removeCount > n) end = mid - 1;
  }

  return answer
}