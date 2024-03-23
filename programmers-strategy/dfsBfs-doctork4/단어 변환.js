function solution(begin, target, words) {
  // 아예 없는 경우
  if (!words.includes(target)) return 0;
  
  const visited = Array(words.length).fill(false);

  const result = bfs(begin, target, visited, words);
  return result
}

function bfs(start, target, visited, words) {
  const queue = [start];
  const count = Array(words.length).fill(0);
  while (queue.length > 0) {
      // console.log("queue", queue);
      
      const current = queue.shift();
      let curIndex = words.indexOf(current) === -1 ? 0 : words.indexOf(current);
      // console.log("current", current);
      // console.log("count", count)
      
      if (current === target) return count[curIndex];
      
      for (let i = 0; i < words.length; i++) {
          if (!visited[i] && current !== words[i] && canChange(current, words[i])) {
              // console.log(words[i]);
              // console.log(curIndex);
              // console.log("-----")
              count[i] = count[curIndex] + 1;
              visited[i] += true;
              queue.push(words[i]);
          }
      }
  }
  
  return 0;
}

// 어떤 단어가 해당 단어로 바뀔 수 있는지를 검사하는 로직
function canChange(targetWord, wantToChange) {
  let count = 0;
  for (let i = 0; i < targetWord.length; i++) {
      if (targetWord[i] !== wantToChange[i]) count += 1;
      if (count > 1) return false;
  }
  
  return count === 1 ? true : false;
}

