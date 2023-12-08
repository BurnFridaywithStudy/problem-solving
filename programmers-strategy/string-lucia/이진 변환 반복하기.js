function solution(s) {
    let count = 0;
    let zeroLength = 0;
    
    //s가 1이 될때까지 이진 변환
    while (s !== "1") {
        // 모든 0 제거
        const removedStr = s.split('0').join('');
        
        // 0의 길이 반환 누적 합
        zeroLength += s.length - removedStr.length;
        
        // s에 할당
        s = removedStr;
        
        // 문자열 길이 C 이진변환
        const strLength = removedStr.length.toString(2);
        
        // s에 할당
        s = strLength;

        count ++;
    }
    return [count, zeroLength];
}
