function solution(numbers, target) {
  let answer = 0;
  const depth = numbers.length;
  
  function dfs(sum, level) {
      if (level === depth) {
          if (sum === target) answer += 1;   
          return;
      }
      
      dfs(sum + numbers[level], level + 1)
      dfs(sum - numbers[level], level + 1)
      
      return;
  }

  dfs(0, 0);

  
  return answer;
}


/**
결국 플러스와 마이너스의 선택지로 나뉠 것
각 선택지의 결과를 탐색하고 맞으면 answer를 늘려주는 방식으로.

우선 끝까지 가봐야하니까 DFS가 아닐까?
1 + 1 + 1 + 1 [-1 or +1] 3 or 5
1 + 1 + 1 - 1 [-1 or +1] 1 or 3


numbers.length = depth
*/