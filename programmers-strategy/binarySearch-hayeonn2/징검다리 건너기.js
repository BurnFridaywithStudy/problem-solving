// 몇 개가 연속으로 0이 되었는지 돌 개수 체크
function checkStone(stones, mid, k) {
  let zeroStone = 0;

  for (const stone of stones) {
    if (stone - mid <= 0) {
      zeroStone++;
    } else {
      zeroStone = 0;
    }

    if (zeroStone >= k) {
      return true;
    }
  }

  return false;
}

function solution(stones, k) {
  let [start, end] = [1, 200000000];
  let result = 0;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);

    if (checkStone(stones, mid, k)) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return start;
}
