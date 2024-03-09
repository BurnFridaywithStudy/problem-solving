function solution(n) {
  const arr = Array.from({ length: n }, (_, index) => Array(index + 1).fill(0));
  let answer = [];
  let count = 0;
  let currentX = -1;
  let currentY = 0;

  while (n > 0) {
    for (let i = 0; i < n; i++) {
      currentX++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 1; i++) {
      currentY++;
      count++;
      arr[currentX][currentY] = count;
    }
    for (let i = 0; i < n - 2; i++) {
      currentX--;
      currentY--;
      count++;
      arr[currentX][currentY] = count;
    }
    n -= 3;
  }

  for (let i = 0; i < arr.length; i++) {
    answer = [...answer, ...arr[i]];
  }

  return answer;
}

/**
 * 풀이
 * 배열을 하나 만든다.
 * 세 부분으로 나눠서 해당 위치 값을 저장한다.
 * 위 -> 아래로 내려가는 대각선
 * 왼 -> 오로 이동
 * 아래 -> 위 내려가는 대각선
 * 이 세가지 작업을 n이 0보다 클 경우까지 반복해준다.
 */
