const fs = require('fs');
const path = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(path).toString().trim().split('\n').map(Number);

function solution(input) {
  // 평소라면 input을 [N, ...steps] 로 분리했겠지만, steps의 인덱스가 1씩 틀어지는것이 혼선을 줄 수 있어 굳이 input 전체를 사용하였음
  const N = input[0];
  const dp = Array(N+1).fill(0);
  // n = 1인 경우 처음 계단이 곧 마지막 계단이 되므로 무조건 밟는다. 
  dp[1] = input[1];
  // n = 2인 경우 무조건 두개다 밟는 것이 최대값이 되므로 2개를 모두 더한 값을 배정한다.
  dp[2] = input[1] + input[2];
  // n = 3인 경우 마지막 계단은 무조건 밟고, 앞선 두개중 큰 값만 밟은 값을 더한다.
  dp[3] = input[3] + Math.max(input[1], input[2]);
  
  for (let i = 4; i <= N; i++) {
    dp[i] = Math.max(input[i-1] + dp[i-3], dp[i-2]) + input[i];
  }

  /**
   *  비교 하는 경우 상세 설명
   * 구하고자 하는 dp의 인덱스를 n이라 하자
   * 
   * case 1. n-1번째 계단을 밟고 n번째 계단을 밟는 경우
   * n-1과 n을 밟으면 n-2는 무조건 밟으면 안된다.
   * 최적값 계산이 된 dp(n-3)과의 합과 n-1, n을 합하면 된다.
   * 
   * case 2. n-1번째 계단을 밟지 않고 n번째 계단을 밟는 경우
   * n-1을 안 밟으면 n-2를 밟아야한다.
   * n-3 혹은 n-4를 밟았는지는 이전 dp에서 최적화된 값이 memoization 되어 있으므로 믿고 dp(n-2)를 사용하면 된다.
   * 
   * case 1과 case 2의 최대값을 비교하여 dp[n]의 값을 구하면 된다.
   */

  return dp[N];
}

console.log(solution(input));

/**
 * 1. 계단은 한 번에 한 계단씩 또는 두 계단씩 오를 수 있다. 즉, 한 계단을 밟으면서 이어서 다음 계단이나, 다음 다음 계단으로 오를 수 있다.
 * 2. 연속된 세 개의 계단을 모두 밟아서는 안 된다. 단, 시작점은 계단에 포함되지 않는다.
 * 3. 마지막 도착 계단은 반드시 밟아야 한다.
 * 
 * 
 * 1칸 + 건너뛰기 + 3칸 20 -> 10 -> 15 = 45
 * 1칸 + 2칸 + 건너뛰기 (불가)
 * 건너뛰기 + 2칸 + 3칸 + 건너뛰기
 * 
 * 처음의 접근 방식
 * - 마지막 계단을 반드시 밟아야하니 뭔가 반대로 계산해봐야할 것 같은 직감이 들었다.
 * - [ 10, 20, 15, 25, 10, 20 ]
 * - 맨 마지막과 맨 처음은 포함되는구나
 * - 2개씩 묶어서 큰 값만 total에 더해주면 되겠다.
 * - 예시 코드는 맞았으나 게시판 반례에서는 틀리게 됨
 * - 맨 처음이 포함된다는게 틀린 추측이었음
 * 
 * 사실 직관적으로 최적 부분구조를 가졌다는 것이 이해되진 않는다...
 * 아마 바로 전 계단을 밟는것이 보장이 안돼서 dp[n-2]까지만 사용하는 것 같다.
*/


// function solution(steps) {
//   // console.log(steps);
//   let total = steps.pop();
//   total += steps.shift();

//   for (let i = steps.length-1; i > 0; i += -2) {
//     total += Math.max(steps[i], steps[i-1]);
//   }

//   return total;
// }