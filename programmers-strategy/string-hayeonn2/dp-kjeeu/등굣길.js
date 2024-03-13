function solution(m, n, puddles) {
    const arr = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
    const dx = [1, 0];
    const dy = [0, 1];

    for (let p of puddles) {
        const [puddleY, puddleX] = p;
        arr[puddleX][puddleY] = "x";
    }

    arr[1][1] = 1;

    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= m; j++) {
            if (i === 1 && j === 1) {
                continue;
            }

            if (arr[i][j] !== "x") {
                const a = arr[i - 1][j] === "x" ? 0 : arr[i - 1][j];
                const b = arr[i][j - 1] === "x" ? 0 : arr[i][j - 1];
                arr[i][j] = (a + b) % 1000000007;
            }
        }
    }

    return arr[n][m] % 1000000007;
}
