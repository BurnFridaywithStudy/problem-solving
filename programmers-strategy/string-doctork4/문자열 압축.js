function solution(s) {
  let i = 1;
  let arr = [s.length];

  while (i < s.length){
    let str = "";
    let stack = [];
    let count = 1;

    // i개를 stack에 추가
    for (let j = 0; j < s.length; j += i) {
      // console.log(i,j)
      // console.log('stack is', stack);
      const piece = s.slice(j, j+i);
      // console.log('piece is',piece);
      // console.log('count is', count);
      // stack에 아무것도 없다면 (첫번째 글자)
      if (stack.length === 0) {
        stack.push(piece);
        continue;
      }
      // stack에 있는 글자와 다르다면, 
      if (stack[0] !== piece) {
        str += `${count === 1 ? "" : count}${stack.pop()}`;
        count = 1;
        stack.push(piece);
        if (j+i >= s.length) {
          str += `${count === 1 ? "" : count}${stack.pop()}`;
        }
        continue;
      }
      // stack에 있는 글자와 같다면,
      if (stack[0] === piece) {
        count += 1;
        if (j+i >= s.length) {
          str += `${count === 1 ? "" : count}${stack.pop()}`;
        }
        continue;
      }
    }
    // console.log('str is', str);
    i += 1;
    arr.push(str.length);
    // console.log('arr is', arr);
  }
  return Math.min(...arr);
}

// test
const input1 = "aabbaccc";
const input2 = "ababcdcdababcdcd";
const input3 = "abcabcabcabcdededededede";
const input4 = "xababcdcdababcdcd";

console.log(solution(input1));
console.log(solution(input2));
console.log(solution(input3));
console.log(solution(input4));

/**
 * 소요시간을 엄청 들여서 풀었음 
 * 
 * 결국 자기자신과의 비교를 하는 문제인 만큼 스택을 활용했음.
 * str, stack, count라는 변수를 각 상황을 분기처리하여 컨트롤 하다보니 조금 복잡한 코드가 되었음.
 * 다른 사람 코드 좀 더 찾아보면서 더 간소화하여 빠르게 풀수있는 방법을 연구해봐야겠음.
 * 
 * 문자열을 원하는 조각만큼 잘라야하는 만큼 for문에서 순차적인 증감식을 적용하는 것이 중요했음
 */
