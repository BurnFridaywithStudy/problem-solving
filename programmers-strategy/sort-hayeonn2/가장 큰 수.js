function solution(numbers) {
  const sortNumbers = numbers.map(String).sort((a, b) => b + a - (a + b));
  return sortNumbers[0] === "0" ? "0" : sortNumbers.join("");
}

/**
 * 풀이
 * numbers를 돌려서 문자열로 변환 후 요소들을 문자열 형식으로 더했을 때 비교해 내림차순으로 정렬한다.
 * 그리고 0이 올 수도 있기때문에 0일때 경우를 고려해 "0"을 리턴하고 아니면 배열을 합해 리턴한다.
 */
