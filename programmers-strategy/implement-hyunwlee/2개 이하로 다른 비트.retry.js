function solution(numbers) {
  return numbers.map(number => {
    if (number % 2 === 0)
      return number + 1;
    return calNextBit(number);
  });
}

function calNextBit(number) {
  let result = '';
  while (number > 0) {
    if (number % 2 === 0)
      result = 0 + result;
    else
      result = 1 + result;
    number = Math.floor(number / 2);
  }
  result = '0' + result;
  let idx = result.length;
  while (--idx > 0 && result[idx] !== '0')
    ;
  result = result.substring(0, idx) + '1' + result.substring(idx + 1);
  result = result.substring(0, idx + 1) + '0' + result.substring(idx + 2);
  idx = -1;
  let ret = 0;
  while (++idx < result.length) {
    if (result.charAt(result.length - 1 - idx) === '1')
      ret += Math.pow(2, idx);
  }
  return ret;
}

console.log(solution([2, 3, 7]));
