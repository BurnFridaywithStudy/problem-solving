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
    const n = Number(input[0]);

    let answer = 0;

    const dfs = (board, row) => {
        if (row === n) {
            return answer++;
        } else {
            for (let i = 1; i <= n; i++) {
                board[row + 1] = i;
                if (isValid(board, row + 1)) {
                    dfs(board, row + 1);
                };
            }
        }
    }

    const isValid = (board, row) => {
        for (let i = 1; i < row; i++) {
            //같은 행에 겹치는지 확인
            if (board[i] === board[row]) {
                return false;
            }
            //대각선에 겹치는지 확인
            if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) {
                return false;
            }
        }
        return true;
    }

    for (let i = 1; i <= n; i++) {
        const board = new Array(n + 1).fill(0);
        board[1] = i;
        dfs(board, 1);
    }

    return answer;
}
