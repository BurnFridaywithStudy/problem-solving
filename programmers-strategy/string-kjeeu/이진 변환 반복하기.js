function solution(s) {
    //x에서 모든 0 제거
    //x의 길이를 2진법으로 표현한 문자열로 바꿈
    //return 변환 횟수, 제거된 0의 개수
    
    let count = 0;
    let zero = 0;
    
    while(true) {
        if(s === "1") return [count, zero];
        
        const newS = [...s].filter((s) => s !== '0').join('');
        zero += s.length - newS.length;
        s = (newS.length).toString(2);
        
        count++;
    }
}
