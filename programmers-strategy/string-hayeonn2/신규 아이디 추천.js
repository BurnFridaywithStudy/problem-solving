function solution(new_id) {
  // 결과값을 담을 변수 설정
  let result = "";

  // for문을 통해 new_id를 하나씩 순회
  for (let i = 0; i < new_id.length; i++) {
    // 한개씩 소문자로 만들기
    let word = new_id[i].toLowerCase();

    // 소문자, 숫자, -, _, . 를 하나의 문자열로 만들어 유효성 검사
    let able = "abcdefghijklmnopqrstuvwxyz0123456789-_.";

    // able 문자열에서 indexOf를 사용해 new_id를 소문자로 변환한 문자열 검사
    // -1이 되면 유효한 문자열이 아니므로 continue를 이용해 넘어가도록 함
    if (able.indexOf(word) === -1) continue;

    // 문자열이 "." 이거나, 문자열의 가장 끝이 "." 일때도 result에 추가하지 않고 넘어가도록 함
    if (word === "." && result[result.length - 1] === ".") continue;

    // 위의 조건문에서 해당되는 값들을 result에 추가
    result += word;
  }

  // result의 맨 앞 문자열이 "." 일 때, 맨 앞을 자르기
  if (result[0] === ".") {
    result = result.slice(1);
  }

  // 결과값이 빈문자열일 때 "a" 추가
  if (result === "") {
    result += "a";
  }

  // 문자열이 16글자 이상일 때 15개까지 자르기
  if (result.length >= 16) {
    result = result.slice(0, 15);
  }

  // 문자열 가장 끝이 "." 일 때 맨 뒤 글자 자르기
  if (result[result.length - 1] === ".") {
    result = result.slice(0, -1);
  }

  // while문을 이용해서 문자열 길이가 3 미만일 때 가장 끝 문자를 추가
  while (result.length < 3) result += result[result.length - 1];

  return result;
}

/**
 * 정규표현식을 사용하지 않고 푸는 방법을 생각해봤다.
 */
