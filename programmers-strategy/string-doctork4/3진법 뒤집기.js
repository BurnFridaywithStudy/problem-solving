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

/**
 * 1. n을 s진법으로 변환하기 
 * - n이 0이 될때까지 반복한다.
 * - n을 s로 나누고, 몫은 새롭게 n에 할당한다. 나머지는 오른쪽부터 채워지는 자릿수가 된다.
 * 
 * 2. s진법 숫자 n을 10진법으로 바꾸기
 * - 각 자릿수 숫자를 s의 (자릿수-1)승만큼 곱해서 총합을 구한다.
 */