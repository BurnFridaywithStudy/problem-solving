function solution(s) {
  // 실패하는 케이스들만 골라서 false를 리턴하도록 하고, 그외 나머지는 모두 true로 반환시킨다.

  // 만약 s의 길이가 4 또는 6이 아니라면 모두 false 리턴
  if (s.length !== 4 && s.length !== 6) return false;

  // 반복문을 통해 s 길이만큼 반복
  for (let i = 0; i < s.length; i++) {
    // isNaN() 함수를 이용해서 어떤 값이 NaN인지 판별한다.
    // 자바스크립트의 다른 모든 값과 달리 NaN은 같음 연산(==, ===)을 사용해 판별할 수 없다.
    // 따라서 NaN을 판별하는 함수가 필요하다.
    if (isNaN(+s[i])) return false;
  }
  return true;
}

// 실패
// const sLength = s.replace(/[^0-9]/g, "").length;
// return sLength === 4 || sLength === 6 ? true : false;
