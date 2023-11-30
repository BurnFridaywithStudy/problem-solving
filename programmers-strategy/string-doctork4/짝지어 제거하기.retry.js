function solution(s) {
  const stack = [];
  for (let i = 0; i < s.length; i++) {
    // 스택에 아무것도 없다면 스택에 추가
    if (stack.length === 0) {
      stack.push(s[i]);
      continue
    }
    // stack의 맨 마지막과 다르다면 stack에 추가
    if (stack[stack.length-1] !== s[i]) {
      stack.push(s[i]);
      continue
    }
    // stack의 맨 마지막과 같다면 stack의 맨 마지막을 삭제 
    if (stack[stack.length-1] === s[i]) {
      stack.pop();
      continue
    }
  }

  return stack.length === 0 ? 1 : 0;  
}

const input1 = "baabaa"
const input2 = "cdcd"
console.log(solution(input1));
console.log(solution(input2));

/**
 * 회고
 * 
 * 1. 스택으로 풀면 생각보다 쉽게 풀수 있었다. 적절한 자료구조를 생각해보고 문제 풀이에 임하는 것도 중요할 듯하다.
 * 
 * 2. 그렇다면 언제 스택으로 풀면 좋을까?
 * 
 * https://velog.io/@gale4739/%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EC%BD%94%ED%85%8C-%EC%9C%A0%ED%98%95-%EB%B6%84%EC%84%9D-1.-%EC%8A%A4%ED%83%9D
 * 찾아보니 다음과 같은 분석이 있었다. 
 * 
 * a. 쌍을 이루는 요소를 찾는 문제
 * b. 커서를 기준으로 커서 위치 및 값을 조정하는 문제
 * c. 리스트를 탐색하면서 자기 자신과 값을 비교하는 것을 요구하는 문제
*/ 