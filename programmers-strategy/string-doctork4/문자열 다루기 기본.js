function solution(s) {
  let answer = false;
  if (s.length === 4 || s.length === 6) {
    answer = true;
    
    for (let i = 0; i < s.length; i++) {
      if (Number.isNaN(Number(s[i]))) {
        answer = false;
        break
      }
    }
  }

  return answer;
}