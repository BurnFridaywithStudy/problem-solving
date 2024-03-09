function solution(answers) {
    const a = '12345'
    const b = '21232425'
    const c = '3311224455'
    let list = [0, 0, 0];

    for (let i = 0; i < answers.length; i++) {
        const p = answers[i];

        if (a[i % a.length] == p) list[0] += 1;
        if (b[i % b.length] == p) list[1] += 1;
        if (c[i % c.length] == p) list[2] += 1;
    }

    const maxNum = Math.max(...list);
    const result = list.map((x, index) => x === maxNum ? index + 1 : 0);
    return result.filter(x => x > 0);
}
