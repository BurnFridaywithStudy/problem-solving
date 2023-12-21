function solution(strings, n) {
  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      if (a <= b)
        return -1;
      return 1;
    }
    else if (a[n] < b[n]) {
      return -1;
    }
    return 1;
  });
  return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 2));
