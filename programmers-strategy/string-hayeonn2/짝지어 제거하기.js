function solution(s) {
  // 문자열을 담아줄 stack 배열 생성
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    // 1. stack 안이 모두 비었을 때 stack에 s의 문자열을 push
    // 2. stack의 가장 끝 문자열과 s의 문자열이 다를 때 push
    // 3. 조건문을 만족하지 않으면 stack에서 문자열 뒤를 떼줌
    if (!stack.length || s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  // stack의 길이가 0일 때 1 아니면 0 리턴
  return !stack.length ? 1 : 0;
}
