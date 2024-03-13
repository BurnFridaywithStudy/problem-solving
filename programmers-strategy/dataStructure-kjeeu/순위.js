function solution(n, results) {
    const graph = Array.from(Array(n + 1), () => Array(n + 1).fill('?'));

    for (const r of results) {
        graph[r[0]][r[1]] = 1;
        graph[r[1]][r[0]] = -1;
    }

    for (let i = 1; i <= n; i++) {
        graph[i][i] = 0;
    }

    for (let mid = 1; mid <= n; mid++) {
        for (let i = 1; i <= n; i++) {
            for (let j = 1; j <= n; j++) {
                if (graph[i][mid] === graph[mid][j]) {
                    if (graph[i][mid] === 0 || graph[i][mid] === '?') {
                        continue;
                    }
                    graph[i][j] = graph[i][mid];
                }
            }
        }
    }

    let count = 0;

    for (const g of graph) {
        const len = g.splice(1,);

        if (len.every((x) => x !== '?')) {
            count++;
        }
    }

    return count;
}
