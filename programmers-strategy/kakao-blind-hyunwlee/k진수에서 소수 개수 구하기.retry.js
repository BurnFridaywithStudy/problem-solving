function solution(n, k) {
  /*
  const checkPrime = Array(10000001).fill(false);
  checkPrime[0] = true;
  checkPrime[1] = true;
  calPrime(checkPrime);
  */
  return getJinsu(n, k)
    .split('0')
    .filter(item => item !== '')
    .reduce((cal, cur) => {
      if (isPrime(Number(cur)))
        return cal + 1;
      return cal;
    }, 0);
}

function getJinsu(n, k) {
  let ret = '';
  while (n > 0) {
    ret = (n % k) + ret;
    n = Math.floor(n / k);
  }
  return ret;
}

function isPrime(n) {
  if (n === 0 || n === 1)
    return false;
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

/*
function calPrime(checkPrime) {
  for (let i = 2; i <= 10000000; ++i) {
    if (!checkPrime[i]) {
      for (let j = i * i; j <= 10000000; j += i) {
        checkPrime[j] = true;
      }
    }
  }
}
*/

console.log(solution(2, 3));
console.log(solution(437674, 3));
console.log(solution(110011, 10));
