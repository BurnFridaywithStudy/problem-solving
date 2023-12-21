function solution(numbers) {
  const result = numbers
    .map(String)
    .sort((a, b) => (b + a) - (a + b)).join('');
  if (result.length > 1) {
    let idx = -1;
    while (++idx < result.length && result[idx] === '0')
      ;
    return result.substring(idx - 1, result.length);
  }
  return result;
}

console.log(solution([6, 10, 2]));
console.log(solution([3, 30, 34, 5, 9]));
console.log(solution([547, 54, 5]));
console.log(solution([101, 10, 232, 23]));
console.log(solution([101, 10]));
console.log(solution([212, 21]));
console.log(solution([232, 23]));
console.log(solution([70, 0, 0, 0, 0]));
console.log(solution([1, 11, 110, 1110]));
console.log(solution([565, 56]));
console.log(solution([1000, 111, 110, 101, 100, 11, 10, 1, 0]));
// testCase 11
console.log(solution([0, 0, 0]));
console.log(solution([1, 10, 100, 1000]));
console.log(solution([0, 0, 1000, 0]));
console.log(solution([101, 10, 232, 23]));
console.log(solution([555, 565, 566, 55, 56, 5, 54, 544, 549]));
console.log(solution([979, 97, 978, 81, 818, 817]))
