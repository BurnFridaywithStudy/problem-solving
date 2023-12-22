const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on('line', function (line) {
    input = line;
}).on('close', function () {
    const dfs = (current, count) => {
        if (count === 0) {
            console.log(current.join(' '));
            return;
        }

        for (let i = 1; i <= 6; i++) {
            dfs([...current, i], count - 1);
        }
    }

    dfs([], input);

    process.exit()
})