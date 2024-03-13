const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = fs.readFileSync(filePath).toString().trim().split('\n');
// console.log(input);
// N개의 집, C개의 공유기

const [N, C] = input.shift().split(' ').map(Number);
// console.log(N, C);

const houses = input.map(Number).sort((a, b) => a - b);
// console.log(houses);

function solution(){
  let start = 1;
  let end = houses[houses.length - 1] - houses[0];
  
  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    // console.log('mid', mid);
    const result = isPossible(mid);
    // console.log(result, 'result');
    if (result) {
      // 거리를 늘려도 된다. 
      start = mid + 1;
    
    } else {
      // 거리를 줄여야 한다.
      end = mid - 1;
    }
  }
  return end
}

// 해당 거리마다 공유기를 놓을 수 있는지
function isPossible(distance) {
  let count = C - 1;
  let prev = houses[0];

  for (let i = 1; i < houses.length; i++) {
    if (houses[i] - prev >= distance) {
      count += -1;
      prev = houses[i];
    }
  }

  return count <= 0;
}

console.log(solution());

/**
 * 이분탐색 문제의 포인트 
 * 
 * 0. 이분탐색을 써야하는 문제인지 파악 => 범위가 심상치 않다 싶으면 go
 * 1. 어디에 이분탐색을 적용할 것인가
 * - 보통 구하고자 하는 값을 때려 맞춰야함으로 그 값 자체를 구하는 범위를 생각해봐야한다.
 * - 즉, 최솟값이 될 수 있는 경우와 최대값이 될 수 있는 경우를 파악해야함
 * 
 * 2. mid를 검사하는 로직을 생각해낼 수 있는가
 * - 이건 문제마다 아이디어가 다르다...
 * - 이번 문제에는 이것을 떠올리는 것이 어려웠음
 */