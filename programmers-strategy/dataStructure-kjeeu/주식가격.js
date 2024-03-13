function solution(prices) {
    const arr = Array.from({ length: prices.length }).fill(0);
    const stack = [];
    
    for(let i = 0; i < prices.length; i++) {
        while(stack.length > 0 && prices[stack[stack.length - 1]] > prices[i]) {
            const p = stack.pop();
            arr[p] = i - p;
        }
        stack.push(i);
    }
    
    while(stack.length > 0) {
        const p = stack.pop();
        arr[p] = prices.length - p - 1;
    }
    
    return arr;
}

// function solution(prices) {
//     const arr = Array.from({ length: prices.length }).fill(0);
    
//     for(let i = 0; i < prices.length - 1; i++) {
//         for(let j = i + 1; j < prices.length; j++){
//             arr[i]+=1;
//             if(prices[i] > prices[j]) {
//                 break;
//             }
            
//         }
//     }
    
//     return arr;
// }

//arr[i] += 1과 arr[i]++과의 효율성 차이?
