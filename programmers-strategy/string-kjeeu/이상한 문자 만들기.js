function solution(s) {
    let answer = "";
    let count = 0;

    for (let i of s) {
        if (i === ' ') {
            answer += ' ';
            count = 0;
        } else if (count % 2 === 0) {
            answer += i.toUpperCase();
            count++;
        } else {
            answer += i.toLowerCase();
            count++;
        }
    }

    return answer;
}
