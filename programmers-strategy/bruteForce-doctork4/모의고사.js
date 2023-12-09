function solution(answers) {
  const arr = [];
  const one = [1, 2, 3, 4, 5]; // length = 5
  const two = [2, 1, 2, 3, 2, 4, 2, 5]; // length = 8
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]; // length = 10
  const count = [0, 0, 0]
  let oneIdx = 0;
  let twoIdx = 0;
  let threeIdx = 0;
  
  answers.forEach(answer => {
    if (answer === one[oneIdx]) count[0] += 1;
    if (answer === two[twoIdx]) count[1] += 1;
    if (answer === three[threeIdx]) count[2] += 1;
    
    oneIdx + 1 >= one.length ? oneIdx = 0 : oneIdx += 1;
    twoIdx + 1 >= two.length ? twoIdx = 0 : twoIdx += 1;
    threeIdx + 1 >= three.length ? threeIdx = 0 : threeIdx += 1;
  });
  
  const max = Math.max(...count);
  count.forEach((num, idx) => {
      if (num === max) {
          arr.push(idx+1);
      }
  })

  return arr;
}