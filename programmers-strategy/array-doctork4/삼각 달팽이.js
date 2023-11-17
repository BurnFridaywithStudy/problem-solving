function solution(n) {
  const answer = makeEmptyTriangle(n);
  
// 
  return answer;
}

// 길이와 높이가 n인 삼각형

// n = 1
// 1 
// => [1]

// n = 2
//  1
// 2 3
// => [1, 2, 3]

// n = 3
//   [1]
//  [2, 6]
// [3, 4, 5] 
// => [ 1, 2, 6, 3, 4, 5]

// 가장 큰 수
// 1 => 3 => 6 => 10 => 15 => 21 => ....

// 상승 폭
// 2, 3, 4, 5, 6, ...

// 1. 왼쪽 변 구하기 
// 2. 맨 아랫변 구하기
// 3. 꺾어서 맨 오른쪽 변 구하기
// 4. 

// 틀 만들기
// n이 주어지면 빈 삼각형을 만든다. 

// 길이가 1인 배열
// 2인 배열
// .
// .
// .
// 6인 배열

function makeEmptyTriangle(n) {
  const triangle = [];
  for (let i = 0; i < n; i++) {
      const row = []
      for (let j = 0; j < i + 1; j++) {
          row.push(0);
      }
      triangle.push(row);
  }
  return triangle;
}