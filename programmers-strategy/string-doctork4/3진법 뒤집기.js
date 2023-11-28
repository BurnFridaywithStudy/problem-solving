function solution(n) {
  const xThree = makeX3Reverse(n);

  return makeTen(xThree);
}                                                                                                                           

function makeX3Reverse(n) {
  const answer = [];
  while (n) {
    const digit = n % 3;
    answer.push(digit);
    n = Math.floor(n / 3, 0)
  }
    
  return answer.join('');
}

function makeTen(num) {
  num = num + '';
  let total = 0;
  for (let i = 0; i < num.length; i++) {
    total += num[i] * (3 ** (num.length - i -1))
  }

  return total;
}