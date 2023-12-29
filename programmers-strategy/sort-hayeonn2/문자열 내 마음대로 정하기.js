function solution(strings, n) {
  return strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    else if (a[n] < b[n]) return -1;
    else return a > b ? 1 : -1;
  });
}

/**
 * 풀이
 * 문자열을 문자의 인덱스 기준으로 정렬해준 것.
 * 마지막은 문자열 인덱스가 같은 값일 때, 문자열 전체를 비교해서 정렬해 리턴
 */
