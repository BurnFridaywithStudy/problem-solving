function solution(n, times) {
    times = times.sort((a, b) => a - b);

    let start = 1;
    let end = times[times.length - 1] * n;
    let answer;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = 0;

        for (let i = 0; i < times.length; i++) {
            count += Math.floor(mid / times[i]);
        }

        if (count >= n) {
            answer = mid;
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return answer;
}