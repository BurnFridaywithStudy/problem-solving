function solution(rows, columns, queries) {
  const matrix = [];
  let count = 0;
  for (let i = 0; i < rows; i++) {
    let arr = [];
    for (let j = 0; j < columns; j++) {
      arr.push(count + 1);
      count += 1;
    }
    matrix.push(arr);
  }
  const answer = [];
  queries.forEach((query) => {
    answer.push(rotate(query, matrix));
  });
  return answer;
}

function rotate(query, matrix) {
  const [px1, py1, px2, py2] = query;
  const [x1, y1, x2, y2] = [px1-1, py1-1, px2-1, py2-1];
  const upleft = matrix[x1][y1];
  let minValue = matrix[x1][y1];
  // 좌변 끌어올리기
  for (let i = x1; i < x2; i++) {
    matrix[i][y1] = matrix[i+1][y1];
    minValue = Math.min(minValue, matrix[i][y1]);
  }
  console.log('left', matrix);
  // 하변 왼쪽으로 밀기
  for (let i = y1; i < y2; i++) {
    matrix[x2][i] = matrix[x2][i+1]
    minValue = Math.min(minValue, matrix[x2][i]);
  }
  console.log('down', matrix);
  // 우변을 아래쪽으로 끌어 당기기
  for (let i = x2; i > x1; i--) {
    matrix[i][y2] = matrix[i-1][y2];
    minValue = Math.min(minValue, matrix[i][y2]);
  }
  console.log('right', matrix);
  // 상변을 오른쪽으로 밀기
  for (let i = y2; i > y1+1; i--) {
    matrix[x1][i] = matrix[x1][i-1];
    minValue = Math.min(minValue, matrix[x1][i]);
  }
  console.log('up', matrix);
  // temp값 지정
  matrix[x1][y1+1] = upleft;
  minValue = Math.min(minValue, matrix[x1][y1+1]);
  console.log('done', matrix);

  return minValue;
}

// rotate( [2,2,5,4], [
//   [ 1, 2, 3, 4, 5, 6 ],
//   [ 7, 8, 9, 10, 11, 12 ],
//   [ 13, 14, 15, 16, 17, 18 ],
//   [ 19, 20, 21, 22, 23, 24 ],
//   [ 25, 26, 27, 28, 29, 30 ],
//   [ 31, 32, 33, 34, 35, 36 ]
// ] );
const inputQueries = [[2,2,5,4],[3,3,6,6],[5,1,6,3]];
console.log(solution(6, 6, inputQueries));
// 2. queries에 들어있는 배열들에게 회전 로직을 적용한다. 
/**

<회전 로직>
- 회전할 사각형을 찾는다. 
- 그 중 최솟값을 찾는다. 
- 좌 -> 하 -> 우 -> 상 변 순으로 회전을 시킨다. 
  - 이 때, 가장 왼쪽 상단에 있던 숫자는 자연스럽게 지워진다. 
  - 회전 전에 temp 변수에 저장해두었다가 회전을 모두 마치고 마지막에 수기로 바꿔준다. 

temp
x1, y1에 있는 값으로 지정해둔다.

좌변 회전 로직 
x1 , y1 - 1 부터 ~ y1까지 
바로 위로 끌어올린다.

하변 회전 로직
x2, y1부터 ~ x1+1까지
왼쪽으로 민다.

우변 회전 로직
x2, y1 -1부터 ~  y1까지
아래쪽으로 끌어 당긴다.

상변 회전로직
x1+1, y1 부터 ~ x2까지 
오른쪽으로 민다.

최솟값 검사
- 처음 시작 값은 x1, y1 값으로 해둔다. 
- 회전 로직을 돌 때 각 값과 임시 최소값과 비교하여 더 작은 값을 최솟값으로 지정한다. 
- 회전 로직을 마치고 temp 값을 x1+1, y1에 지정하면, 최솟값을 전체 함수에서 return 한다.

 */

