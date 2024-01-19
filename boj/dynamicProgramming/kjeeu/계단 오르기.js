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
    const n = parseInt(input[0]);
    const list = input.map((x) => parseInt(x)).slice(1);

    const dp = new Array(n);

    dp[0] = list[0];
    dp[1] = list[0] + list[1];
    dp[2] = Math.max(list[0], list[1]) + list[2];

    for (let i = 3; i < n; i++) {
        dp[i] = Math.max(list[i - 1] + dp[i - 3], dp[i - 2]) + list[i];
    }

    return dp[n - 1];
}