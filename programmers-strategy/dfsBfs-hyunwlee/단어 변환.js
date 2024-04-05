let ans = null;
function solution(begin, target, words) {
  const check = Array(words.length).fill(false);
  ans = Infinity;
  recurse(0, begin, target, begin, words, check);
  if (ans === Infinity)
    return 0;
  return ans;
}

function recurse(depth, curr, target, route, words, check) {
  if (curr === target) {
    ans = Math.min(ans, depth);
    return;
  }
  if (depth === words.length) {
    return;
  }
  for (let i = 0; i < words.length; ++i) {
    if (!check[i]) {
      check[i] = true;
      if (checkValidation(curr, words[i]))
        recurse(depth + 1, words[i], target, route + ',' + words[i], words, check);
      check[i] = false;
    }
  }
}

function checkValidation(first, second) {
  const firstCharArray = first.split('');
  const secondCharArray = second.split('');
  let idx = -1;
  let cnt = 0;
  while (++idx < firstCharArray.length) {
    if (firstCharArray[idx] !== secondCharArray[idx])
      ++cnt;
    if (cnt > 1)
      return false;
  }
  if (cnt === 1)
    return true;
  return false;
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"]));
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
