function solution(s) {
    let answer = s.length;

    for (let i = 1; i <= Math.floor(s.length / 2); i++) {
        let str = ""; //임시 문장려

        for (let j = 0; j < s.length; j += i) {
            const target1 = s.slice(j, j + i);
            let count = 1; //중복

            while (true) {
                j += i;
                const target2 = s.slice(j, j + i);

                if (target1 === target2) {
                    count++;
                } else {
                    break;
                }
            }

            if (count >= 2) {
                str += count + target1;
            } else {
                str += target1;
            }
            j -= i; //for문에 다시 추가되므로
        }

        answer = Math.min(answer, str.length);
    }

    return answer;
}