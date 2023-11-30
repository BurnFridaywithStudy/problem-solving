function solution(s) {
  let temp = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== "{" && s[i] !== "}") {
      temp += s[i];
    }
  }

  const arr = temp.split(',').map(item => Number(item));
  const answer = [];
  const total = {};

  arr.forEach(num => {
    if (total[num]) total[num] += 1;
    else total[num] = 1;
  });
   
  while (Object.keys(total).length !== 0){
    const maxValue = Math.max(...Object.values(total));
    let maxKey = "";
    Object.keys(total).forEach(key => {
      if (total[key] === maxValue) {
        answer.push(Number(key));
        maxKey = key;
      }
    });
    delete total[maxKey];
  }
  
  return answer;
}

const input = "{{20,111},{111}}"
console.log(solution(input));

/**
 * 1. 문자열 처리 
 * - 단순하게 만들기 위해 중괄호 부분은 제외한 문자열을 만들었다.
 * - 그 다음 쉼표로 구분하여 배열로 변형하였다.
 * 
 * 2. 로직
 * - 가장 많이 등장한 값 순서대로 배열로 return 되는 것을 발견하였다.
 * - 평가를 위해 만든 배열의 요소들을 돌면서 각각 몇 번 등장하는지 키-밸류 값으로 카운트하였다.
 * - 밸류 값이 가장 큰 키들을 객체에서 제거하고, answer 배열에 push하였다.
 * - delete 연산을 사용해봤다.
 * - 객체 키 배열을 만들어 forEach를 돌렸고, 객체 밸류 배열을 만들어 최댓값을 구했다. 계산시간이 오래 걸릴 것 같은 직감이 든다. 더 효율적인 방법은 없었을까? 
 */