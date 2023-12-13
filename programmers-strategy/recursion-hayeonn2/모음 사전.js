function solution(word) {
  const vowels = ["A", "E", "I", "O", "U"];
  const result = [];

  const dfs = (str, length) => {
    if (str.length === length) {
      result.push(str);
      return;
    }

    vowels.forEach((vowel) => {
      dfs(str + vowel, length);
    });
  };

  for (let i = 1; i <= 5; i++) {
    dfs("", i);
  }

  return result.sort().indexOf(word) + 1;
}

/**
 * 풀이
 * dfs로 풀려고 접근했는데 아직 이해가 덜 되어서 다시 풀어봐야 함
 */
