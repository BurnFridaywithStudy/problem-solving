// function solution(n) {
//   const arr = [0, 1];
  
//   const fN = fibonacci(n, arr);
  
//   return BigInt(fN);
// }

// function fibonacci(n, arr) {
//   if (n < 2) return arr[n];
  
//   if (arr[n] !== undefined) {
//       return arr[n];
//   }
  
//   arr[n] = (fibonacci(n-1, arr)) + (fibonacci(n-2, arr));
//   return arr[n] % 1234567;
// }

// function solution(n) {

//   let first = 0;
//   let second = 1;
//   let target;

//   for (let i = 2; i <= n; i++) {
//     target = (first + second) % 1234567;
//     if (i >= n-2) console.log(first, second, target);
//     first = second
//     second = target
//   }
  
//   return target
// }

function solution(n) {
  const answer = [0, 1];

  for (let i = 2; i <= n; i++) {
    const sum = answer[i-1] + answer[i-2];
    answer.push(sum % 1234567);
  }

  return answer[n];
}

console.log(solution(100000))
// console.log(solution(99999))

/**
 * 
 * 파이썬 코드 참고
 * def solution(n):
    pre = 0
    current = 1
    
    for i in range(2, n+1):
        
        current, pre = current + pre, current
    
    return current % 1234567
 * 
 */