const solution = (info, query) => {
  const answer = [];
  const infoEntries = convertToInfoEntries(info);
  const filteredQueries = query.map(q => q.split(' ').filter(q => q !== 'and' && q !== '-'));
  filteredQueries.forEach(query => {
    const score = query.pop();
    const count = countFitInfo(infoEntries, query, score);
    answer.push(count);
  })
  return answer;
}

function parametricSearch(start, end, curr, arr, target) {
  if (start > end)
    return curr + 1;
  const mid = Math.floor((start + end) / 2);
  if (arr[mid] > target)
    return parametricSearch(mid + 1, end, mid, arr, target);
  if (arr[mid] === target)
    return parametricSearch(mid + 1, end, mid, arr, target);
  if (arr[mid] < target)
    return parametricSearch(start, mid - 1, curr, arr, target);
}

const countFitInfo = (infoEntries, query, score) => {
  const infoKeys = Object.keys(infoEntries);
  const filteredInfoKeys = infoKeys.filter(key => query.every(item => key.includes(item)));
  return filteredInfoKeys.reduce((acc, key) => {
    const count = parametricSearch(0, infoEntries[key].length - 1, -1, infoEntries[key], Number(score));
    return acc + count;
  }, 0);
}

function convertToInfoEntries(info) {
  const infoEntries = {};
  info.forEach(el => {
    const arr = el.split(' ');
    const score = Number(arr.pop());
    const key = arr.join('');
    if (infoEntries[key])
      infoEntries[key].push(score)
    else
      infoEntries[key] = [score];
  });
  Object.keys(infoEntries).forEach(key => {
    infoEntries[key].sort((a, b) => b - a);
  });
  return infoEntries;
}

// cpp, java, python
// backend, frontend
// junior, senior
// chicken, pizza
//
// ex) 1, 0, 0, 1, score >= 50

console.log(solution(
  ["java backend junior pizza 150", "python frontend senior chicken 210", "python frontend senior chicken 150", "cpp backend senior pizza 260", "java backend junior chicken 80", "python backend senior chicken 50"]
  ,
  ["java and backend and junior and pizza 100", "python and frontend and senior and chicken 200", "cpp and - and senior and pizza 250", "- and backend and senior and - 150", "- and - and - and chicken 100", "- and - and - and - 150"]
));
