const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
    const result = [];

    const dfs = (current, count) => {
        if (count === 0) {
            result.push(current.join(' '));
            return;
        }

        for (let i = 1; i <= input[0]; i++) {
            dfs([...current, i], count - 1);
        }
    }
    dfs([], input[1]);
    console.log(result.join('\n'))

    process.exit()
})