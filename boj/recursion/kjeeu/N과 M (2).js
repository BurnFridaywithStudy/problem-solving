const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let input = []

rl.on('line', function (line) {
    input = line.split(' ').map(el => parseInt(el));
}).on('close', function () {
    const dfs = (current, count) => {
        if (count === 0) {
            console.log(current.join(' '));
            return;
        }

        for (let i = 1; i <= input[0]; i++) {
            const last = current[current.length - 1];
            if (current.length === 0 || last < i) {
                dfs([...current, i], count - 1);
            }
        }
    }

    dfs([], input[1]);

    process.exit()
})