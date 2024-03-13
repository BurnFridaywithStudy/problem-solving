function solution(triangle) {
  // 가장 아래층부터 시작하여 위로 올라가며 최대 경로 합을 계산
  for (let i = triangle.length - 2; 0 <= i; i--) {
    // 각 행의 열에 대해 계산
    for (let j = 0; j < triangle[i].length; j++) {
      // 현재 위치에서의 값에 바로 아래 행에서의 두 경로 중 최대값을 더해줌
      triangle[i][j] += Math.max(triangle[i + 1][j], triangle[i + 1][j + 1]);
    }
  }
  // 최종적으로 맨 꼭대기의 값이 최대 경로 합이 됨
  return triangle[0][0];
}

// 주어진 삼각형 배열에 대해 함수 호출
const result = solution([[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]]);
console.log(result);
