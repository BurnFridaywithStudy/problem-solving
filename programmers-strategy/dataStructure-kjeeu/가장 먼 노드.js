function solution(n, edge) {
    const graph = Array.from(Array(n + 1), () => []);

    for (let e of edge) {
        graph[e[0]].push(e[1]);
        graph[e[1]].push(e[0]);
    }

    const node = [0, 1];
    const wait = [1];

    while (wait.length > 0) {
        const target = wait.shift();

        for (const t of graph[target]) {
            if (!node[t]) {
                node[t] = node[target] + 1;
                wait.push(t);
            }
        }
    }

    const max = Math.max(...node);
    return node.filter((x) => x === max).length;

}
