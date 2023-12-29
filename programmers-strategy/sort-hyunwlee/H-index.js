function solution(citations) {
  let answer = 0;
  citations.sort((a, b) => b - a);
  for (let i = 0; i < citations.length; ++i) {
    if (i + 1 <= citations[i])
      ++answer;
  }
  return answer;
}

console.log(solution([3, 0, 6, 1, 5]));
console.log(solution([0, 0, 0, 0]));
console.log(solution([0, 0, 1]));
console.log(solution([0, 1, 1, 1, 1, 3, 3, 4]));
// H-지수 구하는 방법
// https://www.ibric.org/bric/trend/bio-series.do?mode=series_view&newsArticleNo=8802417&articleNo=8882714&beforeMode=latest_list#!/list
//
// 나의 h는 어떻게 구할 수 있을까?
// 우측의 표와 같이 자신이 저널에 등재한 전체 논문중 많이 인용된 순으로 정렬한 후,
// 피인용수가 논문수와 같아지거나 피인용수가 논문수보다 작아지기 시작하는 숫자가
// 바로 나의 h가 됩니다.
// 이 표에서는 10이 H-지수가 되는 것입니다.
// 다시 말하여, 이 연구원은 논문 인용횟수가 10이 넘는 논문이 적어도
// 10편이 된다는 것을 의미합니다.
// 47 42 32 28 24 22 17 15 10 10 8
//  1  2  3  4  5  6  7  8  9 10 11
//
// 3 0 6 1 5
// 6 5 3 1 0
// 1 2 3 4 5
//
// 0 0 0 0
// 0 0 0 0
// 1 2 3 4
//
// 0 0 1
// 1 0 0
// 1 2 3
//
// 0 1 1 1 1 3 3 4
// 4 3 3 1 1 1 1 0
// 1 2 3 4 5 6 7 8
