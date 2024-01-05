function solution(stones, k) {
  var answer = 0;
  return answer;
}

function binarySearch () {
  let start = 0;
  let end = 1;
  let mid = Math.floor((start + end) / 2);
  while (start <= end) {
      
      mid = Math.floor((start + end) / 2);
  }
}
// 한명이 지나갈 수 있는지
function passThrough(stones, k) {
  let stepCount = 0;
  let arr = stones.slice();
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === 0) {
          stepCount += 1;
          if (stepCount > k) return false;
          continue;
      }
      stepCount = 0;
      arr[i] = arr[i]-1;
  }
  return arr;
}

const one = passThrough([2, 4, 5, 3, 2, 1, 4, 2, 5, 1], 3);
const two = passThrough(one, 3);
const three = passThrough(two, 3);
const four = passThrough(three, 3);
const five = passThrough(four, 3);

console.log(one, two, three, four, five);