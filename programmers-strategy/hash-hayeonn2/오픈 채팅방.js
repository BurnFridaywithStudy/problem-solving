function solution(record) {
  const map = new Map();
  const result = [];

  // record 배열을 돌면서 요소들을 [type, uid, nickname]으로 쪼개준다.
  // 만약 Enter이나 Change를 가진다면 map에 (uid, nickname)으로 넣어준다.
  // 그리고 Enter, Leave를 만났을 때 결과값 배열에 [type, uid]로 넣어준다.
  for (const info of record) {
    const [type, uid, nickname] = info.split(" ");

    if (type === "Enter" || type === "Change") {
      map.set(uid, nickname);
    }
    if (type === "Enter" || type === "Leave") {
      result.push([type, uid]);
    }
  }

  // 결과값 배열을 map을 이용해 순환하는데,
  // item[0], 즉 type이 Enter일때 map안에 저장해 놓은 uid에 따른 닉네임을 넣어준다.
  // Leave일 때도 마찬가지로 넣어준다.
  return result.map((item) => {
    if (item[0] === "Enter") {
      return `${map.get(item[1])}님이 들어왔습니다.`;
    }
    if (item[0] === "Leave") {
      return `${map.get(item[1])}님이 나갔습니다.`;
    }
  });
}
