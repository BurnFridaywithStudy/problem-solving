function solution(participant, completion) {
  // 해시 생성
  const hash = new Map();

  // 반복문을 돌린다
  for (let i = 0; i < participant.length; i++) {
    let p = participant[i];
    let c = completion[i];

    // hash에 1번 사람부터 넣는다.
    // 처음 요소를 추가하면 hash.get(p)가 false 여서 0이 출력값이 되고 + 1을 해 결과적으로 [a, 1] 이 된다.
    // 만약, 동명이인이 있다면, hash.get(p)가 true이고, hash.get(p) + 1 이 되어 2가 될 것이다.
    hash.set(p, (hash.get(p) || 0) + 1);

    // 완주자를 살펴보면, 1인 상태에서 -1을 했기 때문에 결과적으로 0이 된다.
    // 만약, 완주하지 못했다면 아무런 변화가 없어 1이 될 것이고
    // 동명이인이 완주하지 못했다면 value가 2인 상태에서 1을 빼도 결국 1이 된다.
    hash.set(c, (hash.get(c) || 0) - 1);
  }

  // 따라서 hash를 [key, value]로 받았을 때, value가 0보다 크다면 key를 반환한다.
  for (const [key, value] of hash) {
    if (value > 0) return key;
  }
}

/**
 * 2번째 풀이
 *
 *   const hash = new Map();

  for (let i = 0; i < completion.length; i++) {
    if (!hash.has(completion[i])) {
      hash.set(completion[i], 1);
    } else {
      hash.set(completion[i], hash.get(completion[i]) + 1);
    }
  }

  for (let i = 0; i < participant.length; i++) {
    if (!hash.has(participant[i])) {
      return participant[i];
    } else {
      const count = hash.get(participant[i]);

      if (count === 0) {
        return participant[i];
      } else {
        hash.set(participant[i], count - 1);
      }
    }
  }

 * 1. 해시맵을 하나 만들어준다.
 * 2. 반복문을 통해 hash에 완주한 사람의 이름이 없다면 hash.set을 통해 1(value)을 가지는 선수를 집어 넣는다.
 * 3. hash에 완주한 사람의 이름이 있다면(동명이인) 다시 hash.set을 통해 hash.get으로 가져온 값에 + 1을 해준다.
 * 4. 참가자를 대상으로 반복문을 돌며 hash에 참가자가 있는지 확인한다.
 * 5. hash에 참가자가 없다면 완주를 못한 것이므로 바로 그 참가자를 리턴한다.
 * 6. 만약 동명이인이라면, 카운트 - 1 해주고 0일 때의 참가자를 리턴한다.
 */

/*
첫 번째 풀이 (통과됨)

  const participantObj = {};
  const completionObj = {};
  let answer = "";

  for (const person of participant) {
    if (!participantObj[person]) {
      participantObj[person] = 1;
    } else {
      participantObj[person]++;
    }
  }

  for (const person of completion) {
    if (!completionObj[person]) {
      completionObj[person] = 1;
    } else {
      completionObj[person]++;
    }
  }

  const participantKeys = Object.keys(participantObj);

  for (const keys of participantKeys) {
    if (!completionObj[keys]) {
      answer = keys;
    }
    if (participantObj[keys] !== completionObj[keys]) {
      answer = keys;
    }
  }

  return answer;


*/
