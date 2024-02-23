//전체학생, 도난당한, 기본이있는
function solution(n, lost, reserve) {
    let s = Array(n + 1).fill(1);

    lost.forEach((e) => s[e]--);
    reserve.forEach((e) => s[e]++);

    for (let i = 1; i <= n; i++) {
        if (s[i] > 1 && s[i - 1] === 0) {
            --s[i];
            ++s[i - 1];
        } else if (s[i] > 1 && s[i + 1] === 0) {
            --s[i];
            ++s[i + 1];
        }
    }

    return s.filter((e) => e >= 1).length - 1;
}