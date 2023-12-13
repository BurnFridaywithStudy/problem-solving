function solution(phone_number) {
  const replaceNumber = phone_number.slice(0, phone_number.length - 4);
  return (
    replaceNumber.replace(/[0-9]/g, "*") +
    phone_number.slice(phone_number.length - 4)
  );
}

/**
 * 풀이
 * replaceNumber에 전화번호를 제일 처음에서 끝 번호 4자리 제외한 길이만큼 잘라준다.
 * 그리고 그 숫자를 replace를 통해 모두 "*"로 바꿔주고, 전화번호의 뒷자리와 합쳐서 리턴
 */
