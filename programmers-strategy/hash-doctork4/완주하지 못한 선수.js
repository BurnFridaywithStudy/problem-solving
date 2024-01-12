function solution(participant, completion) {
  const partObj = makeHash(participant);
  const compObj = makeHash(completion);
  
  let answer = "";
  
  const partKeys = Object.keys(partObj);
  // 1. partObj의 키가 compObj에서 검색되는지 => 없으면 answer
  for (let partKey of partKeys) {
      if (!compObj[partKey]) {
          answer = partKey;
          break;
      }
  // 2. compObj의 value와 partObj의 값이 동일한지 
      if (partObj[partKey] !== compObj[partKey]) {
          answer = partKey;
          break;
      }
  }

  return answer;
}

function makeHash(arr) {
  const obj = {};
  
  arr.forEach(name => {
      if (obj[name]) obj[name] += 1;
      else obj[name] = 1;
  })
  
  return obj;
}