function solution(s) {
  // 변수를 배열에 담아줌
  let [translationCount, ZeroCount] = [0, 0];

  // s가 "1"이 될때까지 반복
  while (s !== "1") {
    // s의 길이를 변수에 저장
    const originLength = s.length;

    // s에서 0을 모두 ""로 처리해서 바꾸기
    s = s.replace(/0/g, "");

    // 0을 카운트하는 변수에 원래길이 - 현재 s의 길이를 합해서 저장
    ZeroCount += originLength - s.length;

    // s의 길이를 2진법으료 표현한 문자열을 구하기
    s = s.length.toString(2);

    // 2진법으로 변환한 수만큼 카운팅
    translationCount++;
  }

  return [translationCount, ZeroCount];
}
