function solution(info, query) {
  const infoObj = makeHash(info);
  const answer = [];
  query
      .map(q => q.split(/ and | |-/i).filter(v => v !== ''))
      .forEach(el => {
    const score = Number(el.pop());
    const result = getResult(infoObj, el, score);
    answer.push(result);
  });
  return answer;
}

function makeHash(info) {
  const obj = {};
  info.forEach(infoString => {
    const arr = infoString.split(' ');
    const score = parseInt(arr.pop());
    const key = arr.join('');
    if (obj[key]) obj[key].push(score);
    else obj[key] = [score];
  });
  for (const key in obj) {
    obj[key].sort((a, b) => a - b);
  }
  return obj;
}

function getResult (infoObj, query, score) {
  const infoKeysArr = Object.keys(infoObj);
  return infoKeysArr
      .filter(key => query.every(v => key.includes(v)))
      .reduce((acc, key) => acc + infoObj[key].length - binarySearch(infoObj[key], score), 0);
}

function binarySearch (arr, targetScore) {
  let start = 0; 
  let end = arr.length - 1;
  let mid = Math.floor((start + end) / 2);
    
  while (start <= end) {
    if (arr[mid] >= targetScore) {
      end = mid - 1;
    } else start = mid + 1;
    
    mid = Math.floor((start + end) / 2);
  }
    return mid + 1;
}