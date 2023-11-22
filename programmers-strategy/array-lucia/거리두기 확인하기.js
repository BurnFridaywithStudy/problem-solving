// 좌표 유효성 검사
function isWithin(row, col) {
  return row >= 0 && row < 5 && col >= 0 && col < 5;
}

// input의 모든 대기실을 반복 수행
function solution(places) {
  // 반환된 1, 0 값으로 배열 생성
  return places.map(place => checkPlace(place));
}

// 1개 대기실에 대해 수행하고, 1,0 값 반환
function checkPlace(places) {
  // 좌표 매핑 (map을 두번 사용하면 2중 반복문 row 행, col 열에 대해 문자, 행좌표, 열좌표 생성)
  const coordinate = places.map((row, rowIndex) => 
    row.split('').map((char, colIndex) => ({ char, row: rowIndex, col: colIndex }))
  );

  // 수평 인접 검사 (PP), 좌표 유효성 검사 통과 && 가로PP인거 필터링
  const isHorizontalPP = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && isWithin(row, col + 1) && coordinate[row][col + 1].char === 'P')
  );
  
  // 수평 인접 검사 (POP) 좌표 유효성 검사 통과 && 가로POP 인거 필터링
  const isHorizontalPOP = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && (isWithin(row, col + 1) && coordinate[row][col + 1].char === 'O') && (isWithin(row, col + 2) && coordinate[row][col + 2].char === 'P'))
  );

  // 수직 인접 검사 (PP) 좌표 유효성 검사 통과 && 세로 PP 인거 필터링
  const isVerticalPP = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && isWithin(row + 1, col) && coordinate[row + 1][col].char === 'P')
  );
  
  // 수직 인접 검사 (POP) 좌표 유효성 검사 통과 && 세로 POP 인거 필터링
  const isVerticalPOP = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && (isWithin(row + 1, col) && coordinate[row + 1][col].char === 'O') && (isWithin(row + 2, col) && coordinate[row + 2][col].char === 'P'))
  );
  
  // 대각선검사 (POP) 좌표유효성 검사 통과, 왼쪽방향 POP 필터링
  const isDiagonalLeft = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && isWithin(row + 1, col + 1) && coordinate[row + 1][col + 1].char === 'P' && (coordinate[row][col + 1].char === 'O' || coordinate[row + 1][col].char === 'O'))
  );

  // 대각선검사 (POP) 좌표유효성 검사 통과, 오른쪽방향 POP 필터링
  const isDiagonalRight = coordinate.flatMap((rowArray, row) => 
    rowArray.filter(({ char, col }) => char === 'P' && isWithin(row - 1, col + 1) && coordinate[row - 1][col + 1].char === 'P' && (coordinate[row][col + 1].char === 'O' || coordinate[row - 1][col].char === 'O'))
  );

  // 각 필터링의 결과를 원소로 갖는 6 * 5 2차원 배열 생성, 6개의 검사에 통과 여부(가로)를 1개 대기실의 5줄 정보(세로)에 대해 1이면 불통과, 0이면 통과 
  const checkArr = [isHorizontalPP, isHorizontalPOP, isVerticalPP, isVerticalPOP, isDiagonalLeft, isDiagonalRight].map(result => result.length > 0 ? 1 : 0);

  // some 메서드로, 배열 원소중 1만족(규칙위반)하면 true반환
  const result = checkArr.some(result => result === 1);

  // true(규칙위반이면) 0, 규칙위반이 없으면1 로 조정
  return result ? 0 : 1;
}

/*

풀이법 :
<준비>
- 좌표 유효성 검사
- input의 각 대기실에 대해 반복

<대기실 로직>
0) 주어진 좌표에 배열을 매핑
1) 교점의 좌표를 활용
2) 직선 - p끼리 (거리 0)인접한 거 필터링 아웃 (가로, 세로)
3) 직선 2 - p끼리 (거리 1)이면서 사이에 0있는거 아웃 (가로, 세로)
4) 대각선 - p 끼리 인접이되, 양 옆이 0 인거 아웃 (가로, 세로)
5) 대기실별 결과는 true/ false로 반환

some: 배열 요소를 반복하며 테스트 함수 실행, 적어도 하나라도 통과 true 반복 중단, 모든 요소 불통시 false
flapMap : map + flat 각 요소에 대해 함수 적용하고 그 결과를 하나의 새로운 배열로 평탄화(배열의 차원 낮추기)

*/
