function solution(p) {
  if (p === "" || isRight(p)) return p;
  // 글자 분리하기
  const target = separate(p);
  
  const modifiedTarget = target.map(el => modify(el));
  console.log(modifiedTarget);
  
  var answer = modifiedTarget.join('');
  return answer;
}

// 1. 올바른 괄호 문자열인지 판단하는 함수
function isRight(str) {
  const stack = [];
  for (let i = 0; i < str.length; i++) {
      if (str[i] === ")") {
          if (stack.length === 0){
            return false
          }
          stack.pop();
      } else {
          stack.push(str[i]);    
      }
  }
  // 마지막 글자 검사 (스택에 남아있으면 안됨)
  if (stack.length > 0) return false;

  return true;
}

function separate(str) {
  const result = str.split("()");
  
  return result;
}

// param str => "))(("
function modify(str) {
  if (str === "") return "()";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
      if (str[i] === ")") count += 1;
  }
  
  const result = "(".repeat(count) + ")".repeat(count);
  
  return result;
}
