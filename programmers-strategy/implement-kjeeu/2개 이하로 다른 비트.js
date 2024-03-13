function solution(numbers) {
    const result = [];

    function bit(num) {
        if (num % 2 === 0) return num + 1;
        const a = [...'0' + num.toString(2)];
        const b = a.lastIndexOf('0');
        a.splice(b, 2, '1', '0');
        return parseInt(a.join(''), 2);
    }

    for (let i of numbers) result.push(bit(i));

    return result;
}