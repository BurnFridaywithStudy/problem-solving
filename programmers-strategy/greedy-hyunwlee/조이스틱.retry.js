function solution(name) {
  let answer = 0;
  for (let i = 0; i < name.length; ++i) {
    let upDownMovedCnt = name.charAt(i).charCodeAt(0) - 'A'.charCodeAt(0);
    upDownMovedCnt = Math.min(upDownMovedCnt, 'Z'.charCodeAt(0) - name.charAt(i).charCodeAt(0) + 1);
    answer += upDownMovedCnt;
  }
  let leftRightMovedCnt = name.length - 1;
  for (let i = 0; i < name.length; ++i) {
    let next = i + 1;
    while (next < name.length && name.charAt(next) === "A") {
      ++next;
    }
    leftRightMovedCnt = Math.min(
      leftRightMovedCnt,
      i * 2 + (name.length - next),
      i + (name.length - next) * 2);
  }
  answer += leftRightMovedCnt;
  return (answer);
}

console.log(solution("JEROEN"));
console.log(solution("JAZ"));
