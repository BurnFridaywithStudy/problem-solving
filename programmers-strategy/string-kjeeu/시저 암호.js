function solution(s, n) {
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let answer = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === ' ') answer += ' ';
        else {
            const text = lower.includes(s[i]) ? lower : upper;
            let index = text.indexOf(s[i]) + n;
            if (index >= text.length) index -= text.length;
            answer += text[index];
        }
    }

    return answer;
}
