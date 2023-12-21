function solution(strings, n) {
  // 1. 사전 순으로 정렬해놓기 
  strings = strings.sort();
  
  // 2. temp 객체를 만들고 key로는 string, value로는 추출할 인덱스 단어를 저장
  const temp = {};
  strings.forEach(string => temp[string] = string[n]);
  
  // 3. value 배열을 만들고 아스키 코드 순으로 정렬
  const valueArr = Object.values(temp).sort((a, b) => a.charCodeAt() -  b.charCodeAt());

  // 4. 정렬한 value 배열을 토대로 string들을 answer 배열에 추가
  const answer = []
  valueArr.forEach(v => {
    // key를 통해 temp 객체에서 값을 찾음 (저장한 순서대로 꺼내기 때문에 처음에 사전순으로 정렬해놓은 것이 의미가 있음)
    const target = Object.keys(temp).find(key => temp[key] === v);
    answer.push(target);
    // 동일한 value를 가진 key값이 나오지 않게 사용한 프로퍼티는 바로 삭제
    delete temp[target];
  });
  
  return answer
}