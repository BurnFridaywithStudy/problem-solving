function solution(money) {
    const start = [money[0], money[0]];
    const end = [0, money[1]];

    for (let i = 2; i < money.length - 1; i++) {
        start.push(Math.max(money[i] + start[i - 2], start[i - 1]));
    }

    for (let i = 2; i < money.length; i++) {
        end.push(Math.max(money[i] + end[i - 2], end[i - 1]))
    }

    return Math.max(start[money.length - 2], end[money.length - 1]);
}
