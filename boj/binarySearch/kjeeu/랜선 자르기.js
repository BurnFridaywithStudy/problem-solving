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
    const [K, N] = input[0].split(' ').map(el => parseInt(el));
    const lines = input.slice(1).map(el => parseInt(el));


    let start = 1;
    let end = Math.max(...lines);
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = lines.reduce((acc, cur) => acc + Math.floor(cur / mid), 0);

        if (count >= N) {
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}