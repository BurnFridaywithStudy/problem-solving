function solution(phone_number) {
    const lastNumber = phone_number.slice(-4);
    const starNumber = '*'.repeat(phone_number.length - 4);
    const answer = starNumber + lastNumber;

    return answer;
}


/*
splice()
- 목적: 배열의 특정 부분을 제거하거나 대체하거나 새 요소를 추가
- 사용법: array.splice(시작idx[, 지울 개수[, item1[, item2[, ...]]]])
- 특징: 원본 배열을 변경, 제거된 요소를 배열로 반환

slice()
- 목적: 배열이나 문자열의 특정 부분을 새로운 배열이나 문자열로 반환
- 사용법: array.slice(시작idx [, 끝idx]) 또는 str.slice(시작idx [, 끝idx])
- 특징: 원본 배열이나 문자열은 변경X.

repeat()
- 목적: 문자열을 지정된 횟수만큼 반복하여 새 문자열을 생성
- 사용법: str.repeat(반복 횟수)
- 특징:원본 문자열을 변경하지 X

*/
