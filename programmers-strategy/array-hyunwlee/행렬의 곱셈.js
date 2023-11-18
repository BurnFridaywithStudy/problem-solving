export default function solution(arr1, arr2) {
  const arr = Array.from(Array(arr1.length), () => Array(arr2[0].length).fill(0));
  let idx = 0;
  let jdx = 0;
  for (let i = 0; i < arr1.length; ++i) {
    for (let k = 0; k < arr2[0].length; ++k) {
      let sum = 0;
      for (let j = 0; j < arr2.length; ++j) {
        sum += arr1[i][j] * arr2[j][k];
      }
      arr[idx][jdx++] = sum;
    }
    jdx = 0;
    ++idx;
  }
  return arr;
}
