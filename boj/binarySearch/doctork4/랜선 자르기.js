const fs = require('fs');
const input = fs.readFileSync('input.txt').toString().trim().split('\n');
// const input = fs.readFileSync('/dev/stdin').toString().split('\n');
const firstLine = input.shift().split(' ').map(Number);
const [ , N] = firstLine;
const lans = input.map(Number).sort((a, b) => a - b);

function solution(N, lans) {
  let start = 1;
  let end = lans[lans.length-1];
  let answer = Number.MIN_SAFE_INTEGER;

  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    
    // console.log('start', start);
    // console.log('end', end);
    // console.log('mid', mid);

    lans.forEach(lan => {
      sum += parseInt(lan / mid);
    })
    // console.log(sum);

    if (sum >= N) {
      answer = mid;
      start = mid + 1;
      continue;
    }
    
    if (sum < N) {
      end = mid - 1;
      continue;
    }
  }

  return answer;
}

console.log(solution(N, lans));

// Math.floor를 썼더니 80%에서 시간초과가 났고, parseInt를 썼더니 통과하였다!