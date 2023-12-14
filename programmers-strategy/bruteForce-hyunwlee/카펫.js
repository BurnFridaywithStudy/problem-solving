function solution(brown, yellow) {
  const total = brown + yellow;
  for (let i = 3; i < total; ++i) {
    if (total % i !== 0)
      continue;
    let j = total / i;
    if (yellow === (i - 2) * (j - 2))
      return [j, i];
  }
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
