function solution(numbers) {
  const arr = numbers.split('');
  const newArr = [];
  const answer = [];
  
  // 가능한 모든 숫자 조합을 찾는 식
  arr.forEach((digit, idx) => {
    // 다른 숫자와 더하지 않은 자기 자신 추가
    const self = Number(digit);
    if (!newArr.includes(self)) newArr.push(self);
    
    // 다른 숫자와 더한 조합 완전 탐색
    let newNum = digit;
    for (let j = 0; j < arr.length; j++) {
      // 자기자신과 동일한 인덱스인 경우 skip
      if (j === idx) continue;
      
      newNum += arr[j];
      if (!newArr.includes(Number(newNum))) newArr.push(Number(newNum));
    }
      
    newNum = digit;
    for (let j = arr.length-1; j >= 0; j--) {
      // 자기자신과 동일한 인덱스인 경우 skip
      if (j === idx) continue;
      
      newNum += arr[j];
      if (!newArr.includes(Number(newNum))) newArr.push(Number(newNum));
    }
  });
  
  // 소수인 걸 판별하는 식 (1과 자기 자신만으로만 나눠지는 숫자)
  // 2부터 자기 자신 - 1까지 돌면서 % = 0을 만드는 수가 있는지 찾는다.
  console.log(newArr);
  newArr.forEach(num => {
    if (isPrime(num) && !answer.includes(num)) answer.push(num);
  })
  console.log(answer)
  
  return answer.length;
}

function isPrime(num) {
// 1 이하 걸러버리기
if (num <= 1) return false;
// 2인 경우
if (num === 2) return true;
// 2부터 자기자신-1 까지 나눠 떨어지는 것들 거르기
for (let i = 2; i < num; i++) {
  if (num % i === 0) return false;
}
  
return true
}