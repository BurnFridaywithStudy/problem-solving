function solution(name) {
    let alpha = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let count = 0;
    let count2 = name.length - 1;

    //위아래
    for (let i = 0; i < name.length; i++) {
        let text = name[i];
        let a = alpha.findIndex((e) => e === text);
        let b = alpha.length - a;
        count += Math.min(a, b);

        let aSum = i + 1;
        // 연속된 A 구간
        while (aSum < name.length && name[aSum] === 'A') {
            aSum++;
        }

        let c = i * 2 + name.length - aSum;
        let d = i + (name.length - aSum) * 2;
        count2 = Math.min(count2, c, d);
    }

    return count + count2
}