function solution(s, n) {
    return s.split('').map(el => {
        if (el === ' ')
            return el;
        
        const A = 65;
        const a = 97;
        const wholeChar = 26;
        const checkChar = (el === el.toUpperCase()) ? A : a;
        const changeChar = ((el.charCodeAt(0) + n - checkChar) % wholeChar) + checkChar;
        
        return String.fromCharCode(changeChar);
    }).join('');
}

// A - Z 65 ~ 90, a - z 97 ~ 122  
//26으로 나누는 이유 (알파벳 26개)
//그리고 이동한 만큼 더해준다
