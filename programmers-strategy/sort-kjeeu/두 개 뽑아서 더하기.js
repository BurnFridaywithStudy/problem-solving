function solution(numbers) {
    let set = new Set();
    const answer = [];

    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            const num = numbers[i] + numbers[j];
            set.add(num);
        }
    }

    set.forEach((num) => {
        answer.push(num);
    })

    return answer.sort((a, b) => a - b);
}