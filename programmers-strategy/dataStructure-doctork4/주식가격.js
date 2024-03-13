// Link: https://programmers.co.kr/learn/courses/30/lessons/42584
function solution(prices) {
  const stack = [];
  const answer = Array(prices.length).fill(0);
  
  for (let i = 0; i < prices.length; i++) {
      while (stack && prices[stack.at(-1)] > prices[i]) {
          const past = stack.pop();
          answer[past] = i - past;
      }
      stack.push(i);
  }
  // console.log(answer);
  // console.log(stack);
  
  stack.forEach(v => answer[v] = prices.length - 1 - v);
  
  return answer;
}

/**
 * 
answer => 각 인덱스의 상승 시간을 담은 배열
prices => 주식 가격을 담은 배열

i = 0
stack = [0]

i = 1
stack.at(-1) > prices[1] => false
stack.push(1) => [0, 1]

i = 2
stack.at(-1) > prices[2] => false
stack.push(2) => [0, 1, 2]

i = 3
stack.at(-1) > prices[3] => true // 스택의 마지막 인덱스가 현재 인덱스의 가격보다 크다면
3 > 2
past = stack.pop() // 스택에서 마지막 인덱스를 꺼내고 마지막 인덱스의 상승 시간을 구한다.
answer[past] = i - past (3 - 2) = 1 // 현재 인덱스 - 과거까지의 인덱스 = 상승 시간
 
stack.at(-1) > prices[3] => false
2 > 2
stack.push(3) => [0, 1, 3]

i = 4
stack.at(-1) > prices[4] => false
2 > 3
stack.push(4) => [0, 1, 3, 4]

stack.forEach(v => answer[v] = prices.length - 1 - v) => [4, 3, 1, 1, 0] // 스택에 남아있던 인덱스들의 상승시간을 구한다. 그들의 상승 시간은 전체시간 - 현재 시간이다. 

return answer

*/

// 솔루션 1
function solution1(prices) {
  const arr = Array(prices.length).fill(0);
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      // 비교 대상보다 작거나 같을 경우 1초 증가
      if (prices[i] <= prices[j]) arr[i] += 1;
      // 비교 대상보다 클 경우 자기 자신을 포함한 1초 증가
      else {
        arr[i] += 1;
        break;
      }
    }
  }
  
  return arr;
}

