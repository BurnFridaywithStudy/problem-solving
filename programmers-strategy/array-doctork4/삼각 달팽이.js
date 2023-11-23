function solution(n) {
  const square = makeEmptySquare(n);
  const highestValue = getHighestValue(n);
  
  // 3. 회전 방향 배열 만들기 (아래 -> 오른쪽 -> 좌측 대각)
  // 아래 [+1][0]
  // 오른쪽 [0][+1]
  // 좌 대각 [-1][-1]
  const rotation = [[1, 0], [0, 1], [-1, -1]]; // [x, y]
  let rotateCode = 0;
  let rotationIdx = rotateCode % 3; // 0, 1, 2

  // 4. 가장 큰 수까지 배열 값 변경 반복 & 예외처리 (0이 아니거나 인덱스 length의 범위를 넘어서는 경우)
  let position  = [0, 0];
  square[0][0] = 1;
  // 1부터 n제곱이 될때까지 배열 변환을 반복한다.
  for (let i = 2; i < highestValue + 1; i++) {
    console.log(i);
    // 진행방향으로 나아가기 전, dx, dy를 통해 검사한다. 
    const dx = position[0] + rotation[rotationIdx][0];
    const dy = position[1] + rotation[rotationIdx][1];
    console.log(`dx dy: ${dx} ${dy}`)
    // 0이 아니거나, 범위를 벗어나는 인덱스의 경우, 진행방향을 바꾼다. 
    if (dy >= n || dx >= n || square[dx][dy] !== 0) {
        rotateCode += 1;
        rotationIdx = rotateCode % 3;
    }
    console.log(`rotateCode: ${rotateCode}`);
    console.log(`rotationIdx: ${rotationIdx}`);

    position[0] += rotation[rotationIdx][0];
    position[1] += rotation[rotationIdx][1];
    console.log(`position: ${position[0]}, ${position[1]}`);
  
    square[position[0]][position[1]] = i;
    console.log(square[position[0]][position[1]]);
    console.log(square);
    console.log('-----')
}
  // const answer = makeAnswer(square);
  
  return square;
}

solution(6)

// 길이와 높이가 n인 삼각형

// n = 1
// 1 
// => [1]

// n = 2
// 1 0
// 2 3
// => [1, 2, 3]

// n = 3
// 1, 0, 0
// 2, 6, 0
// 3, 4, 5 
// => [ 1, 2, 6, 3, 4, 5]

// n = 4
// 1  0  0  0
// 2  9  0  0
// 3 10  8  0
// 4  5  6  7

// n = 5
// 1 0  0  0   0
// 2 12 0  0   0
// 3 13 11 0   0  
// 4 14 15 10  0 
// 5  6  7  8  9


// 가장 큰 수
// 1 => 3 => 6 => 10 => 15 => 21 => ....

// 상승 폭
// 2, 3, 4, 5, 6, ...

// 1. n * n 배열을 만든다.
function makeEmptySquare(n) {
  return Array.from(Array(n), () => Array(n).fill(0));
}

// 2. 가장 큰 수 구하기
function getHighestValue (n) {
  return n * (n + 1) / 2;
}

// 5. 2차원 배열을 0을 제외하고 하나의 배열로 만들어줌
function makeAnswer (matrix) {
  let answer = [];
  matrix.forEach((arr) => {
      const values = arr.filter(number => number !== 0);
      answer.push(...values);
  })
  return answer;
}