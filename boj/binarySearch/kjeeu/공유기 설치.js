//실패
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    console.log(solution(input));
    process.exit();
})

function solution(input) {
    const [N, C] = input[0].split(' ').map(el => parseInt(el));
    const houses = input.slice(1).map(el => parseInt(el));

    let start = 1;
    let end = houses[N - 1] - houses[0];
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = 1;
        let prev = houses[0];

        for (let i = 1; i < N; i++) {
            if (houses[i] - prev >= mid) {
                count++;
                prev = houses[i];
            }
        }

        if (count >= C) {
            start = mid + 1;
            result = Math.max(result, mid);
        } else {
            end = mid - 1;
        }
    }

    return result;
}
