function solution(s) {
    const answer = (s.length === 4 || s.length === 6) && (s.split('').filter((el) => !isNaN(el)).join('') === s) ? true : false;
    return answer;
}

//parseInt 사용해서 숫자로만 구성되어있는지 체크 가능 
// 문자열을 숫자로 변환하려 할때 숫자가 아닌 문자가 포함되어 있으면 NaN 반환
