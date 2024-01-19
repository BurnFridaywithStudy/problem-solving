function solution(n) {
    const f = [0, 1, 1];
    for (let i = 3; i <= n; i++) {
        f.push((f[i - 2] + f[i - 1]) % 1234567);
    }

    return f[n] % 1234567;
}