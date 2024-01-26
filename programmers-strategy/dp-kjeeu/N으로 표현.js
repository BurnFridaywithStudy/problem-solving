function solution(N, number) {
    const list = Array.from({ length: 9 }, () => new Set());

    for (let i = 1; i <= 8; i++) {
        list[i].add(Number(String(N).repeat(i)));

        for (let j = 1; j < i; j++) {
            for (let num1 of list[j]) {
                for (let num2 of list[i - j]) {
                    list[i].add(num1 - num2);
                    list[i].add(num1 + num2);
                    list[i].add(num1 * num2);
                    list[i].add(Math.floor(num1 / num2));
                }
            }
        }

        if (list[i].has(number)) {
            return i;
        }
    }

    return -1;
}