function solution(line) {
  const axisArray = [];
  
  for (let i = 0; i < line.length; i++) {
      for (let j = i + 1; j < line.length; j++) {
          const result = getXY(line[i], line[j]);
          if (result) axisArray.push(result);
      }
  }
  
  console.log(axisArray)
  
  // 좌표배열을 돌면서 사각형을 만든다.
  let maxX = axisArray[0][0];
  let minX = axisArray[0][0];
  let maxY = axisArray[0][1];
  let minY = axisArray[0][1];
  
  axisArray.forEach(axis => {
      if (axis[0] > maxX) maxX = axis[0];
      if (axis[0] < minX) minX = axis[0];
      if (axis[1] > maxY) maxY = axis[1];
      if (axis[1] < minY) minY = axis[1];
  });
  const width = maxX - minX + 1;
  const height = maxY - minY + 1;
  
  const square = makeSquare(width, height);

  // 좌표배열을 돌면서 사각형에 별을 찍는다.
  axisArray.forEach(axis => {
      insertStar(square, axis);
  });
  return square;    
}

// Ax+ By + C = 0
// 반복문 중첩을 통해 서로 다른 두 배열끼리 동일한 로직을 반복한다.
// 두 직선 사이의 교점을 구한다는 것
//  1. 평행 또는 일치하는지 검증한다. 
  // AD = BC 인 경우 평행 또는 일치

//  무수히 많은 교점이 주어지는 경우는 없으니 평행하며, 교점이 없다. 
  
//  2-2. 1이 아니라면 공식을 통해 x, y를 도출해낸다. 
//  null이 아니라면 별표 좌표 목록들에 저장한다. 

//  3-1. 교점이 하나인 경우
  // 별 하나 출력하면 끝
//  3-2. 교점이 2개 이상인 경우
  // 좌표정보들 중 가장 상단, 하단, 좌측, 우측에 있는 별이 무엇인지 판별하여 사각형 넓이를 도출해낸다.

  // 상 : y값이 제일 큰 값
  // 하 : y값이 제일 작은 값 
  // 좌 : x값이 제일 작은 값
  // 우 : x값이 제일 큰 값

  // 사각형 가로 = 우 - 좌
  // 사각형 세로 = 상 - 하

//  4. 사각형을 생성한다.
function makeSquare (width, height) {
  let square = [];    
  for (let i = 0; i < height; i++){
      const oneLine = ".".repeat(width).split('');
      square.push(oneLine);
  }
  
  return square;
}

// 5. 생성한 사각형을 교점 좌표들의 값에 맞게 "*"로 수정한다.
function insertStar(square, axis) {
  const y = axis[1];
  const x = axis[0];
  // TODO : square에 맞는 새로운 x, y값을 변환해야한다. 
  console.log(x, y)
  square[y][x] = "*";
}

function getXY(a, b) {
  // a = [A, B, E] b = [C, D, F]
  if (a[0] * b[1] === a[1] * b[0]) {
      return null;
  }
  // BF - ED / AD - BC
  const x = ((a[1] * b[2]) - (a[2] * b[1])) / ((a[0] * b[1]) - (a[1] * b[0]));
  // EC - AF / AD - BC
  const y = ((a[2] * b[0]) - (a[0] * b[2])) / ((a[0] * b[1]) - (a[1] * b[0]));
  
  // 정수인 경우에만 좌표를 리턴한다.
  if (Number.isInteger(x) && Number.isInteger(y)) return [x, y];
  
  return null;
}

// 체감 난이도 : 5