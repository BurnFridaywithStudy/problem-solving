const fs = require('fs');
// const input = fs.readFileSync('/dev/stdin');
const input = fs.readFileSync('input.txt').toString();
const depth = Number(input);
const answer = Array(depth).fill('');

function dice(count) {
  if (count === depth) {
    console.log(answer.join(' '));
    return;
  }

  for (let i = 1; i < 7; i++) {
    answer[count] = i;
    dice(count+1);
  }
}

dice(0);