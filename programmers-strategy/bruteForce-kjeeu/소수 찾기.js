function solution(numbers) {
    const numList = numbers.split('');
    const answer = new Set();

    const isPrime = (num) => {
        if (num < 2) return false;
        if (num === 2) return true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) return false;
        }
        return true;
    }

    const getList = (list, fix) => {
        if (list.length) {
            for (let i = 0; i < list.length; i++) {
                const a = [...list];
                a.splice(i, 1);

                const b = Number(fix + list[i]);
                if (isPrime(b)) {
                    answer.add(b);
                }

                getList(a, b);
            }
        }
    }

    getList(numList, '');
    return answer.size;
}
