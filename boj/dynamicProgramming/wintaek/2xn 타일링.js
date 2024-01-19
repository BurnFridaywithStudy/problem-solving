// + 를 사용하여 문자를 숫자열로 변환해줌
const input = +require("fs").readFileSync("example.txt").toString().trim();

// Array(input+1) 은 길이가 input + 1 인 배열 생성 . +1 은 배열의 인덱스가 0부터 시작하기 떄문에 사용
// .fill(0) 은 결과를 0으로 설정하고 시작하려고 함
const dp = Array(input + 1).fill(0);

dp[1] = 1;
dp[2] = 2;

for (let i = 3; i <= input; i++) {
  dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
}
console.log(dp[input]);
