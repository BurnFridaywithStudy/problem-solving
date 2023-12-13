function solution(answers) {
  let firstCnt = 0;
  let secondCnt = 0;
  let thirdCnt = 0;
  const firstArr = [1, 2, 3, 4, 5];
  const secondArr = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdArr = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];
  for (let i = 0; i < answers.length; ++i) {
    if (firstArr[i % firstArr.length] === answers[i])
      ++firstCnt;
    if (secondArr[i % secondArr.length] === answers[i])
      ++secondCnt;
    if (thirdArr[i % thirdArr.length] === answers[i])
      ++thirdCnt;
  }
  const max = Math.max(firstCnt, Math.max(secondCnt, thirdCnt));
  const ans = [];
  if (max === firstCnt)
    ans.push(1);
  if (max === secondCnt)
    ans.push(2);
  if (max === thirdCnt)
    ans.push(3);
  return ans;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));
