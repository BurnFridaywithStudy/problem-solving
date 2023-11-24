function solution(line) {
  const axisArray = [];
  for (let i = 0; i < line.length-1; i++) {
    for (let j = i + 1; j < line.length; j++) {
      const result = getXY(line[i], line[j]);
      if (result !== null && !axisArray.includes(result)) axisArray.push(result);
    }
  }
  const set = new Set(axisArray);
  if (axisArray.length !== set.size) console.log("중복 있음");
  // 좌표배열을 돌면서 사각형을 만든다.
  let maxX = -Infinity;
  let minX = Infinity;
  let maxY = -Infinity;
  let minY = Infinity;
  // 최댓값, 최소값 구하기
  axisArray.forEach(axis => {
    maxX = Math.max(maxX, axis[0]);
    minX = Math.min(minX, axis[0]);
    maxY = Math.max(maxY, axis[1]);
    minY = Math.min(minY, axis[1]);
  });
  const width = maxX - minX + 1;
  const height = maxY - minY + 1;

  // 최댓값, 최솟값 바탕으로 사각형 생성
  const square = makeSquare(width, height);

  // 좌표배열을 돌면서 사각형에 별을 찍는다.
  axisArray.forEach(axis => {
    const y = maxY - axis[1]; // 이 부분을 햇갈려서 한참 해멨다...
    const x = axis[0] - minX; // 상대좌표를 어떻게 구해야하는걸까...
    square[y][x] = "*";
  });

  return square.map(arr => arr.join(""));
}

// Ax+ By + C = 0
// 반복문 중첩을 통해 서로 다른 두 배열끼리 동일한 로직을 반복한다.
// 두 직선 사이의 교점을 구한다는 것
//  1. 평행 또는 일치하는지 검증한다. 
  // AD = BC 인 경우 평행 또는 일치

//  무수히 많은 교점이 주어지는 경우는 없으니 평행하며, 교점이 없다. 
  
//  2-2. 1이 아니라면 공식을 통해 x, y를 도출해낸다. 
//  null이 아니라면 별표 좌표 목록들에 저장한다. 

//  3-2. 교점이 2개 이상인 경우
  // 좌표정보들 중 가장 상단, 하단, 좌측, 우측에 있는 별이 무엇인지 판별하여 사각형 넓이를 도출해낸다.

//  4. 사각형을 생성한다.
function makeSquare (width, height) {
  let square = [];    
  for (let i = 0; i < height; i++){
    const oneLine = ".".repeat(width).split('');
    square.push(oneLine);
  }
  return square;
}

function getXY(a, b) {
  const [A, B, E] = a;
  const [C, D, F] = b;
  // a = [A, B, E] b = [C, D, F]
  // AD - BC = 0 인경우 (두 직선이 평행한 경우)
  if (A * D - B * C === 0) return null;
  // x좌표 구하기 : BF - ED / AD - BC
  const x = (B * F - E * D) / (A * D - B * C);
  // y좌표 구하기 : EC - AF / AD - BC
  const y = (E * C  - A * F) / (A * D - B * C);
  // 정수인 경우에만 좌표를 리턴한다.
  if (Number.isInteger(x) && Number.isInteger(y)) return [x, y];
  
  return null;
}

let input = [[2, -1, 4], [-2, -1, 4], [0, -1, 1], [5, -8, -12], [5, 8, 12]];
let result = solution(input);
let expected = ["....*....", ".........", ".........", "*.......*", ".........", ".........", ".........", ".........", "*.......*"];

console.log(result, expected);

// input = [[0, 1, -1], [1, 0, -1], [1, 0, 1]]
// result = solution(input);
// expected = ["*.*"]
// console.log(result, expected);