const answer = [];

function solution(n) {
  recurse(n, 1, 3, 2)
  return answer;
}

function recurse(n, from, to, via) {
  if (n === 1) {
    answer.push([from, to]);
    return;
  }
  recurse(n - 1, from, via, to);
  answer.push([from, to]);
  recurse(n - 1, via, to, from);
}

console.log(solution(2));
