function solution(new_id) {
  let answer = new_id;
  // 1단계 : 모든 대문자를 소문자로 변경
  answer = answer.toLowerCase();

  // 2단계 : ^ 제외  \w 알파벳대소문자 , \- 뺴기 \_ 하이폰 \. 점
  answer = answer.replace(/[^\w\-\.]/g, "");

  // 3단계 : 연속되는 마침표는 제거하고 마침표 하나로
  answer = answer.replace(/\.+/g, ".");

  // 4단계 : 처음과 끝에 마침표 있으면 제거
  answer = answer.replace(/^\.|\.$/g, "");

  // 5단계 : new_ide가 빈 문자열이 들어갔다면 "a"추가
  if (answer.length === 0) answer = "a";

  // 6단계: new_id의 길이가 16자 이상이면,
  // new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거
  if (answer.length >= 16) answer = answer.slice(0, 15);

  // (6단계 이후 양 끝에 . 이 있으수도 있으니 한번 더 사용)
  // $ : 문자열의 끝 , \. 마침표를 나타냄
  answer = answer.replace(/\.+$/g, "");

  // 7단계: answer의 길이가 2자 이하이면,
  // answer의 마지막 문자를 answer의 길이가 3이 될 때까지 반복해서 이어붙임
  let len = answer.length;
  if (len <= 2) answer = answer + answer[len - 1].repeat(3 - len);

  console.log(answer);
}

solution("abcdefghijklmn.p");
