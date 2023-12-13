function solution(num) {
  // 결과값을 저장할 변수 생성
  let result = 0;

  // 500번 반복
  // 몇 번 작업하는지 반복하는 횟수를 세여하므로 결과값 카운팅
  for (let i = 0; i <= 500; i++) {
    // 숫자가 1일 때 반복문 종료
    if (num === 1) break;
    // 짝수일 때 2로 나눌 것
    else if (num % 2 === 0) {
      result++;
      num = num / 2;

      // 홀수 일 때 3곱하고 1더하기
    } else if (num % 2 === 1) {
      result++;
      num = num * 3 + 1;
    }

    // 500번 반복할 때까지 1이 안되었다면 -1 리턴
    if (i === 500) return -1;
  }

  return result;
}
