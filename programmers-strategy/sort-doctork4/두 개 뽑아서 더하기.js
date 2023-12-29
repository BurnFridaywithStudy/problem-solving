function solution(numbers) {
  let set = new Set();
  
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i+1; j < numbers.length; j++) {
      if (i !== j) set.add(numbers[i] + numbers[j]);
    }
  }
  
  // const answer = Array(...set);
  const answer = Array.from(set);
  
  return answer.sort((a, b) => a - b);
}

/**
 * 1. set 자료구조는 순서가 없다. 즉 for문을 돌리면 순서가 보장되지 않는다. 
 * 
 */