function solution(money) {
  const n = money.length;

  // 첫 번째 집을 털 경우
  const dp1 = Array(n).fill(0);
  dp1[0] = money[0];
  dp1[1] = Math.max(money[0], money[1]);
  for (let i = 2; i < n - 1; i++) {
    // n-1 집까지만 고려합니다.
    dp1[i] = Math.max(dp1[i - 1], dp1[i - 2] + money[i]);
  }

  // 마지막 집을 털 경우
  const dp2 = Array(n).fill(0);
  dp2[0] = 0; // 첫 번째 집은 털지 않습니다.
  dp2[1] = money[1];
  for (let i = 2; i < n; i++) {
    dp2[i] = Math.max(dp2[i - 1], dp2[i - 2] + money[i]);
  }

  // dp1은 마지막 집을 털지 않았으므로 -2가 가장 큰 값, dp2는 털었으므로 -1이 가장 큰 값
  return Math.max(dp1[n - 2], dp2[n - 1]);
}
