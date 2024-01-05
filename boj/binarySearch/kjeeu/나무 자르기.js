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
    const [N, M] = input[0].split(' ').map(el => parseInt(el));
    const trees = input[1].split(' ').map(el => parseInt(el));

    let start = 0;
    let end = Math.max(...trees);
    let result = 0;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        let sum = 0;
        for (let i = 0; i < trees.length; i++) {
            if (trees[i] > mid) {
                sum += trees[i] - mid;
            }
        }


        if (sum >= M) {
            result = mid;
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return result;
}