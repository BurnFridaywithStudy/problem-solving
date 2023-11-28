// 45를 3진법 변환 과정
// 45%3 => 몫 15 나머지 0 / 15%3 => 몫 5 나머지 0 / 5%3 => 몫1 나머지 2 / 1 % 3 => 몫 0 나머지 1
// 구한 나머지를 역순으로 나열하면 1200 => 앞뒤반전 0021

// 0021 (10진수변환) => 7
// 지릿값에 3의 거듭제곱을 해줌
// 1×1+2×3+0×9+0×27=1+6+0+0=7

// 나의 생각 : 45를 계속해서 reduce를 이용하여 풀이
// 남의 생각 : 알고보니 reduce는 앞뒤반전 값을 10진수로 변형할 떄 사용

function solution(n) {
  const answer = [];
  while (n !== 0) {
    answer.unshift(n % 3); // 왜 이게 첫번째로 사용이 되어야 하는지 모르겠음
    n = Math.floor(n / 3);
    // console.log(n);
  }
  return answer.reduce((acc, v, i) => acc + v * Math.pow(3, i), 0);
}

solution(45);
