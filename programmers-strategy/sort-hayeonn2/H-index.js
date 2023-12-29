function solution(citations) {
  let result = 0;

  citations.sort((a, b) => b - a);

  for (let i = 0; i < citations.length; i++) {
    if (i + 1 <= citations[i]) {
      result++;
    }
  }

  return result;
}

/**
 * 풀이
 * h-index를 구하는 방법은 배열을 내림차순으로 만든 후,
 * 피인용수(i) <= 배열안의 값(논문수) 일 때로 정의한다.
 * 배열은 0부터 시작하고 피인용수는 1부터 시작하기 때문에 반복문은 0부터 돌고
 * 조건문 내에서 i + 1 을 해주고 비교를 해서, 값이 작거나 같을 때 결과값을 카운팅한다.
 */
