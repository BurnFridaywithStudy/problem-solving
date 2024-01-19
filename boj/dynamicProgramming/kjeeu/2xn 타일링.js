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
    const dp = new Array(input + 1).fill(0);

    dp[0] = 1;
    dp[1] = 1;

    for (let i = 2; i <= input; i++) {
        dp[i] = (dp[i - 1] + dp[i - 2]) % 10007;
    }

    return dp[input];

}