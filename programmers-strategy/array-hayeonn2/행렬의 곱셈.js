function solution(arr1, arr2) {
  const result = [];

  for (let i = 0; i < arr1.length; i++) {
    const row = [];

    for (let j = 0; j < arr2[0].length; j++) {
      let sum = 0;

      for (let k = 0; k < arr2.length; k++) {
        sum += arr1[i][k] * arr2[k][j];
      }
      row.push(sum);
    }
    result.push(row);
  }
  return result;
}

/* 풀이
  1. 결과값을 담을 가장 큰 배열을 만든다.
  2. 행렬의 곱셈을 직접 해보자.
    - 1) arr1의 첫 행 * arr2의 첫 열
    - 2) arr1의 첫 행 * arr2의 두번째 열
    ...
    이런식으로 진행이 된다.
  3. 가장 크게 arr1의 길이만큼 돌고 곱셈의 합은 arr2[0]의 길이만큼 반복하는 것을 알 수 있다.
  ex) A = [[1, 2], [3, 4]] 이고 B = [[5, 6, 7], [8, 9, 10]]일 때
      [(1 * 5) + (2 * 8), (1 * 6) + (2 * 9), (1 * 7) + (2 * 10)] 인데
      곱셈의 합의 개수가 3개가 나오는 것을 알 수 있다. (=== 배열 B[0]의 길이)

  4. 그리고 열의 개수만큼 반복해주면 된다. (arr2의 길이)

  결과적으로 반복문을 통해 곱셈의 합을 row 배열에 담고, row 배열을 다시 result 배열 안에 넣어준다.
*/
