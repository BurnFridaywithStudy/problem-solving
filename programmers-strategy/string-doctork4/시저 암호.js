function solution(s, n) {
  let answer = '';
  // 글자 하나하나씩을 검사
  for (let i = 0; i < s.length; i++) {
    // 예외 1. 공백인 경우
    if (s[i] === " ") {
        answer += s[i];
        continue
    }
    // 아스키 코드 몇 번인지 확인
    let code = s[i].charCodeAt(0);
    // +n 한 아스키 코드로 변환
    let newCode = code + n;
    
    // 예외 2. Z 혹은 z를 지나 다시 a로 돌아가야하는 경우
    // 대문자 65 ~ 90
    if (code >= 65 && code <= 90 && newCode % 65 >= 26) {
      newCode -= 26;
    }

    // 소문자 97 ~ 122
    if (code >= 97 && code <= 122 && newCode % 97 >= 26) {
      newCode -= 26;
    }

    const changedStr = String.fromCharCode(newCode);
    // 정답에 추가
    answer += changedStr
  }
  
  return answer;
}

// 아스키 코드를 모르는 경우에도 풀수 있나?