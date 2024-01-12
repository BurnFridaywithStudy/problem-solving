function solution(participant, completion) {
  let answer = "";

  const myMap = new Map();

  for (let p of participant) {
    myMap.set(p, myMap.get(p) + 1 || 1);
    // console.log(myMap);
  }

  for (let c of completion) {
    // c 에서 value 값이 1 이라면
    if (myMap.get(c) === 1) {
      // key,value 값을 모두 지우고
      myMap.delete(c);
    } else {
      // 아니라면 남은 key값에, value 값을 -1 을 한다.
      myMap.set(c, myMap.get(c) - 1);
    }
  }

  for (let [key, value] of myMap) {
    answer = key;
  }
  return answer;
}

console.log(solution(["leo", "kiki", "eden"], ["eden", "kiki"]));
