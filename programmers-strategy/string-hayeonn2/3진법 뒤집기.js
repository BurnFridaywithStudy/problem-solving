function solution(n) {
  return parseInt(n.toString(3).split("").reverse().join(""), 3);
}

/**
 * 풀이
 * 1. n을 3진법으로 바꾸고 split("")을 이용해 배열로 변환
 * 2. 배열로 바꾼 것을 뒤집음 (reverse), join을 통해 문자열로 다시 변환
 * 3. 그리고 parseInt를 이용해 다시 10진법으로 변환한다.
 */
