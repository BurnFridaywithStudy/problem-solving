const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input[0].split(' ').map(Number);
const [N, M] = firstLine;

const trees = input[1].split(' ').map(Number).sort((a, b) => a - b); // 오름차순 정렬

function solution(find, trees) {
  let start = 0;
  let end = trees[trees.length - 1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let sum = 0;

    trees.forEach(tree => {
      if (tree > mid) {
       sum += tree - mid;
      }
    });

    if (sum >= find) {
      answer = mid;
      start = mid + 1;
    }
    
    if (sum < find) {
      end = mid - 1;
    }
  }

  return answer;
}

console.log(solution(M, trees));

/**
 * 1. 로컬에서 구현은 생각보다 금방하였음
 * 
 * 2. 다만 백준에서 시간초과가 자꾸 나는 어려움이 발생함. 
 * 
 *  - getHowmanytree라는 함수로 별도 분리했었는데, 솔루션 함수 안에서 해결할 수 있도록 로직을 흡수시켰음
 *  - sum 과 find 비교 후 mid를 새롭게 할당했었는데, while문 시작부분에서 그냥 새롭게 정의하는 식으로 수정하였음
 *  - return 시점을 다르게 하였음. 
 *    - 기존 sum === find면 return => 그냥 반복문 쭉 돌리게 하고 마지막에 answer 변수를 return. 
 *    - 그러면서 외부 변수 mid를 내부 변수로 만들고 외부변수 answer를 생성하였음. 
 */