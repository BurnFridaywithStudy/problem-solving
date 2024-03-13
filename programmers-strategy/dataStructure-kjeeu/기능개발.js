function solution(progresses, speeds) {
    let list = progresses.map((x, i) => Math.ceil((100 - x) / speeds[i]))
    let answer = [1];
    let current = list[0];

    for (let i = 1, j = 0; i < list.length; i++) {
        if (list[i] <= current) {
            answer[j] += 1;
        } else {
            answer[++j] = 1;
            current = list[i];
        }
    }

    return answer;
}
