function solution(p) {
  // 1번
  if (p === "") return "";
  
  // 2번
  const [u, v] = divide(p);
  
  if (isRight(u)) {
      return u + solution(v);
  }
  
  if (!isRight(u)) {
      let answer = "("+ solution(v) +")";
      const newU = u.split("");
      newU.pop(); // 마지막 없애기
      newU.shift(); // 첫번째 없애기
      
      let back = [];
      if (newU.length > 0) {
           back = newU.map(el => {
              if (el === "(") {
                  return ")";
              }
              if (el === ")") {
                  return "(";
              }
          });
      }
      
      return answer + back.join('');
  }
  
}

function divide(input) {
  let u = "";
  let v = "";
  let cnt = 0;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === "(") cnt += 1;
    else cnt += -1;

    if (cnt === 0) {
      u = input.slice(0, i+1);
      v = input.slice(i+1);
      break;
    }
  }
  
  return [u, v];
}
// "("과 ")"의 개수가 같고, 짝도 맞을 경우
function isRight(str) {
  const stack = [];
  function isEmpty() {
    return stack.length === 0;
  }

  for (let i = 0; i < str.length; i++) {
      if (str[i] === "(") {
          stack.push(str[i]);
          continue;
      }

      if (str[i] === ")") {
        if (!isEmpty() && stack.at(-1) === "(") stack.pop();
        else stack.push(str[i]);
      }
  }
  
  if (stack.length > 0) return false;
  
  return true;
}