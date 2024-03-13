function solution(stones, k) {
    let start = 0;
    let end = 200000000;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        let count = 0;
        let maxCount = 0;

        for (let i = 0; i < stones.length; i++) {
            if (stones[i] - mid <= 0) {
                count++;
            } else {
                maxCount = Math.max(maxCount, count);
                count = 0;
            }
        }
        maxCount = Math.max(maxCount, count);

        if (maxCount >= k) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}
