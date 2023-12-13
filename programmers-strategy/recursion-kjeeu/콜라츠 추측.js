function solution(num) {
    function recursive(n, count) {
        if(n === 1) return count;
        if(count === 500) return -1;
        
        count++;
        if(n % 2 === 0) return recursive(n/2, count++);
        else return recursive(n * 3 + 1, count++);
    }
    
    return recursive(num, 0);
}
