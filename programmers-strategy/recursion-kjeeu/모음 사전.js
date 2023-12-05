function solution(word) {
    const alpha = ['A', 'E', 'I', 'O', 'U'];
    let answer = 0;
    
    for(let i = 0; i < word.length; i++) {
        const w = word[i];
        const index = alpha.indexOf(w);
        
        if(index === 0) {
            answer++;
        } else {
            let sum = 0;
            
            for(let j = 0; j < 5 - i; j++) {
                sum += Math.pow(5, j);
            }
            
            answer += sum * index + 1
        }
    }
    
    return answer;
}
