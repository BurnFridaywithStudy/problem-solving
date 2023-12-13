function solution(brown, yellow) {
    const sum = brown + yellow;
    
    for(let i = 3; i <= brown; i++) {
        const j = Math.floor(sum / i);
        
        if((i - 2) * (j - 2) === yellow) return [j, i];
    }
}
