function solution(arr1, arr2) {
  const arr1Col = arr1[0].length;
  const arr2Col = arr2[0].length;
  const arr1Row = arr1.length;
  const arr2Row = arr2.length;
  
  const answerArr = []
  for (let i = 0; i < arr1Row; i++) {
      answerArr.push([]);
  }
  
  for (let i = 0; i < arr1Row; i++) {
      for (let j = 0; j < arr2Col; j++) {
          arr1[]
      }
  }
  
  return answerArr;
}

// [r * c] * [r * c]
// arr1의 c와 arr2의 r이 일치해야 곱셈 성사
// 그 결과 arr1의 r과 arr2의 c를 가진 행렬이 생김

// arr1[0][0], arr1[0][1], ...arr1의 row(arr1[0]의 길이)만큼 반복 
// arr2[0][0], arr2[1][0], arr2[2][0]... arr2의 col만큼 반복


// 
// 3 * 2  x  2 * 2 = 3 * 2
// [
//  [1, 4], [[3, 3], = [[15, 15], [15, 15], [15, 15]]
//  [3, 2],  [3, 3]]	
//  [4, 1]
// ]

// arr1[0][0] * arr2[0][0]
// +
// arr1[0][1] * arr2[1][0]

// arr1[0][0] * arr2[0][1]
// +
// arr1[0][1] * arr2[1][1]

// arr1[0][0] * 

// [ 2, 3, 2 ] [ 5, 4, 3 ]
// [ 4, 2, 4 ] [ 2, 4, 1 ]
// [ 3, 1, 4 ] [ 3, 1, 1 ]

