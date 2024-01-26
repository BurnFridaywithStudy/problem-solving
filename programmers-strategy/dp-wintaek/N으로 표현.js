// N : 사칙연산과 함께 연산에 사용할 숫자
// number : 사칙연산만으로 표현할 숫자

function solution(N, number) {
  // nCountArr: 1부터 9까지의 숫자로 만들 수 있는 조합의 집합을 담은 배열
  const dp = Array.from({ length: 9 }, () => new Set());
  dp[1].add(N);

  for (let i = 1; i <= 8; i++) {
    dp[i].add(Number(String(N).repeat(i)));
    for (let j = 1; j < i; j++) {
      for (const num1 of dp[j]) {
        for (const num2 of dp[i - j]) {
          dp[i].add(num1 + num2);
          dp[i].add(num1 - num2);
          dp[i].add(num1 * num2);
          dp[i].add(Math.floor(num1 / num2));
        }
      }
    }
    if (dp[i].has(number)) {
      return i;
    }
  }

  return -1;
}
