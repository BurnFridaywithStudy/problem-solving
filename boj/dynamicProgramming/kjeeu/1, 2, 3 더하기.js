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
    const len = parseInt(input[0]);
    const list = input.map((x) => parseInt(x)).slice(1);

    const max = Math.max(...list);

    const dp = new Array(max + 1).fill(0);

    dp[1] = 1; //1
    dp[2] = 2; //1+1, 2
    dp[3] = 4; //1+1+1, 2+1, 1+2, 3

    for (let i = 4; i <= max; i++) {
        dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
    };

    const result = [];

    for (let num of list) {
        result.push(dp[num]);
    }

    return result.join('\n');
}