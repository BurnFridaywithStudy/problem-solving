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