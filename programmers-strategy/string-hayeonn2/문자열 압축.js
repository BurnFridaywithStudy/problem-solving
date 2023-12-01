function solution(s) {
  if (s.length === 1) return 1;
  const strings = [];

  for (let i = 1; i < Math.floor(s.length / 2); i++) {
    let str = "";
    let count = 1;

    for (let j = 0; j < s.length; j += i) {
      const cur = s.substr(j, i);
      const next = s.substr(j + i, i);

      if (cur === next) {
        count++;
      } else {
        str = count > 1 ? `${str}${count}${cur}` : `${str}${cur}`;
        count = 1;
      }
    }
    strings.push(str.length);
  }
  return Math.min(...strings);
}

/**
 * 풀이
 * 테스트 한 개를 아직 통과 못해서 다시 풀어야 될 것 같슴니당.....
 */
