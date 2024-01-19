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
    // const len = parseInt(input[0]);
    // const list = input.map((x) => parseInt(x)).slice(1);

    const num = parseInt(input[0]);
    const dp = new Array(num + 1).fill(0);

    for (let i = 2; i <= num; i++) {
        dp[i] = dp[i - 1] + 1;

        if (i % 2 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 2] + 1);
        }

        if (i % 3 === 0) {
            dp[i] = Math.min(dp[i], dp[i / 3] + 1);
        }
    }

    return dp[num];
}