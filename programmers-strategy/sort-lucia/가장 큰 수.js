function solution(numbers) {
    const numString = numbers.map(num => num.toString());

    numString.sort((a, b) => (b + a) - (a + b));
   
    if (numString[0] === '0') {
        return '0';
    }

    return numString.join('');
}
