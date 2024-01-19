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
    const len = input[0];
    const list = input[1].split(' ').map(el => parseInt(el));

    const dp = new Array(len).fill(1);

    for (let i = 0; i < len; i++) {
        let count = 0;

        for (let j = 0; j < i; j++) {
            if (list[i] < list[j]) {
                count = Math.max(count, dp[j]);
            }
        }

        dp[i] = count + 1;
    }

    return Math.max(...dp);
}
