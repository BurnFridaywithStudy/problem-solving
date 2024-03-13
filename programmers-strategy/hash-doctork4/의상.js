function solution(clothes) {
  const obj = makeObj(clothes);
  const keyArr = Object.keys(obj);
  const answer = getCombinations(keyArr, obj);
  
  return answer;
}

function getCombinations(keyArr, obj) {
  let count = 1;
  
  keyArr.forEach(key => {
    count *= obj[key].length + 1;
  })
  
  return count - 1;
}

function makeObj(clothArr) {
  const obj = {};
  clothArr.forEach(arr => {
    const [clothes, type] = arr;
    if (!obj[type]) obj[type] = [clothes];
    else obj[type].push(clothes);
  })
  
  return obj;
}

/**
 * 1. 객체로 카테고리 키를 만들고 그 안에 배열(값)로 상세 옷들을 추가하였다. 
 * 
 * 2. 조합의 개수를 구하는 것이 조금 햇갈려서 시간 소요가 오래 걸렸다. 
 * 결론적으로, 배열 길이의 +1개 만큼 곱해주고 아무것도 입지 않는 경우 1가지를 제외해주면 되는 간단한 계산이었다.
 * 
 * 3. 그러나, 보다 정확한 조합을 계산을 도출해내는 코드도 재귀적으로 작성해보고 싶은 욕심이 있다. (추후 학습)
 */