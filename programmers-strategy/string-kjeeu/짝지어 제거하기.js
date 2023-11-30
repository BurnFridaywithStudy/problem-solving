function solution(s) {
    const copy = [];

    for (let i of s) {
        copy.push(i);
        if (copy[copy.length - 1] === copy[copy.length - 2]) {
            copy.pop();
            copy.pop();
        }
    }

    return copy.length === 0 ? 1 : 0;
}

/* 효율성 문제
function solution(s){
    while(s.length > 0) {
        for(let i = 0; i < s.length; i++){
            if(s[i] === s[i + 1]) {
                s = s.replace(s[i] + s[i], '');
                break;
            }
            if(i === s.length - 1) return 0;
        }
    }
    
    return 1;
}
*/