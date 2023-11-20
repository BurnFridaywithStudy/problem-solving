function solution(s) {
  let answer = s.split('');
  let isEven = true;
  for (let i = 0; i < answer.length; i++) {
      // 공백이라면 통과
      if (answer[i] === " ") {
          isEven = true;
          continue
      };
      
      // 글자라면 변환
      // 짝수일 경우
      if (isEven) answer[i] = answer[i].toUpperCase();
      // 홀수일 경우
      if (!isEven) answer[i] = answer[i].toLowerCase();
      isEven = !isEven;
  }
  return answer.join('');
}

/**
 * 언뜻 쉬워보이는 문제였지만 생각보다 오래걸렸음.
 * 1. 배열 재할당
 * .toUpperCase() 와 .toLowerCase() 메서드가 새로운 값을 리턴하면서 기존의 배열 값을 바꾸지 않음을 깨달았음
 * 배열에 새 값을 재할당하여 해결하였음
 * 
 * 2. 습관적 trim() 사용에 유의하자.
 * 처음에 s.split('').trim()으로 하였다가 코드 제출 시 테스트 케이스 실패가 떴음. 
 * 한참 원인을 찾다 질문하기에 있는 다른 테스트케이스를 추가해보면서 깨달았음 
 * 
 * 3. 문제를 유의해서 읽어야한다. 
 * 첫번째 글자가 짝수인줄 알았는데 단어별로 첫번째 글자가 짝수였다. 
 * 이런 디테일이 시간을 줄이는 듯하다.
 * 
 * 4. forEach 대신 for를 사용하였음
 * continue를 활용하기 위함.
 */