function solution(num, count = 0) {
  // 1인 경우
  if (num === 1) return 0;

  // 홀수인 경우
  if (num % 2 === 1) {
    num = num * 3 + 1;
    count += 1;
    console.log('num', num, 'count',count);
    return num === 1 ? count : (count >= 500 ? -1 : solution(num, count));
  }
  
  // 짝수인 경우
  if (num % 2 === 0) {
    num = Math.floor(num / 2);
    count += 1;
    console.log('num', num, 'count',count);
    return num === 1 ? count : (count >= 500 ? -1 : solution(num, count));
  }
}

/**
 * 1. base case
 * num === 1일 때 => return 0;
 * 
 * 2. recursive case
 * 짝수일 때 / 홀수 일 때 => 새로운 num과 count += 1한 값을 인자로 넘겨 return
 * 
 * 3. 어려웠던 포인트
 * recursive case에서 return 값을 어떻게 해야할지 어려웠음
 * 처음엔 solution(num, count)만 했더니 실패
 * 
 * - 인자에 어떤 것이 들어와야할지 
 * - 조기종료되는 조건을 어떤 부분에 삽입해야할지
 */