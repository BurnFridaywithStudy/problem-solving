// 파일 첫 줄을 n 상수로 저장하고, 나머지를 input 배열로 지정
const [n, ...input] = require("fs").readFileSync("example.txt").toString().split("\n").map(Number);
const inputNumber = input;

// 경우의 수를 저장할 배열 초기화
const memo = [0];

memo[1] = 1; // 1을 1,2,3 을 이용해 만드는 경우의 수 : 1가지 // 1 => 1
memo[2] = 2; // 2를 1,2,3 을 이용해 만드는 경우의 수 : 2가지 // 2 => 1+1 , 2
memo[3] = 4; // 3을 1,2,3 을 이용해 만드는 경우의 수 : 4가지 // 3 => 1+2, 1+1+1, 2+1, 3

// 경우의 수 계산
for (let i = 4; i <= Math.max(...inputNumber); i++) {
  memo[i] = memo[i - 3] + memo[i - 2] + memo[i - 1];
}

inputNumber.forEach((v) => {
  console.log(memo[v]);
});
