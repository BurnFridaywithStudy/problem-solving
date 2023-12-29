const answer = new Set();

function solution(n) {
  const arr = n.split('');
  permutation("", arr);

  return answer.size;
}

function permutation (curr, arr) {
  if (curr !== "" && isPrime(Number(curr))) answer.add(Number(curr));
  
  for (let i = 0; i < arr.length; i++) {
    // arr[i]를 제외한 배열을 만들어서 인자로 넘겨줘야 한다.
    const newArr = [...arr];
    newArr.splice(i, 1);
    permutation(curr + arr[i], newArr);
  }
}

function isPrime(num) {
  if (num < 2) return false;
  
  for (let i = 2; i <= Math.sqrt(num); i++) {
     if (num % i === 0) return false;
  }

  return true;
}

/**
 * 1. n이하 소수 찾기 알고리즘 
 * - 에라토스테네스의 체 라는 알고리즘을 알 수 있었다.
 * 
 * 2. 가능한 모든 조합 찾기
 * 
 * 1, 11, 10, 110, 101 
 * 0, 
 */

