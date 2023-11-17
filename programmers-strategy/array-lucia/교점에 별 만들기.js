function calculator(firstLine, secondLine) {
    const [A, B, E] = firstLine;
    const [C, D, F] = secondLine;
    const bottomCalculator = A * D - B * C;
    if (!bottomCalculator) {
        return null;
    }
    const xCalculator = B * F - E * D;
    const yCalculator = E * C - A * F;
    const answerX = xCalculator / bottomCalculator;
    const answerY = yCalculator / bottomCalculator;
    return Number.isInteger(answerX) && Number.isInteger(answerY) ? [answerX, answerY] : null;
}

function solution(line) {
    const cross = line.reduce((acc, currentLine, idx) => {
        const pairs = line.slice(idx + 1).map((otherLine) => calculator(currentLine, otherLine));
        return acc.concat(pairs.filter((point) => point !== null));
    }, []);
    
    if (cross.length === 0)
        return '';
    
    const minX = Math.min(...cross.map(c => c[0]));
    const maxX = Math.max(...cross.map(c => c[0]));
    const minY = Math.min(...cross.map(c => c[1]));
    const maxY = Math.max(...cross.map(c => c[1]));
    
    const result = Array(maxY - minY + 1).fill().map(() => Array(maxX - minX + 1).fill('.'));
    
    cross.forEach(([x, y]) => {
        result[maxY - y][x - minX] = '*';
    });//result 이차원 배열에서 행, 열 별의 위치 좌표
    
    return result.map(row => row.join(''));                                                      
}
