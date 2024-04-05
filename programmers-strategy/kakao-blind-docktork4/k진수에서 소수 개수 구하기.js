function solution(n, k) {
  const changedNumber = n.toString(k);
  console.log(changedNumber);
  const arr = changedNumber.split("0");
  console.log(arr);
  
  let count = 0;
  arr.forEach(el => {
    if (el !== '' && isPrime(Number(el))) count += 1;
  });
  
  return count;
}

// 소수를 판별하는 함수
function isPrime(n) {
  if (n === 0 || n === 1) return false;
  if (n < 4) return true;
  if (n % 2 === 0) return false;
  
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  
  return true;
}