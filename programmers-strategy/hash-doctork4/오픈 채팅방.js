function solution(record) {
  const message = ["님이 들어왔습니다.", "님이 나갔습니다."];
  const result = [];
  const obj = {};
  
  // 최종 유저 id:닉네임 해시테이블 만들기
  record.forEach(log => {
      const [, uid, nickname] = log.split(' ');
      if (nickname) obj[uid] = nickname;
  });

  // 최종 유저 테이블 기반으로 메시지 배열 만들기
  record.forEach(log => {
    const [type, uid, ] = log.split(' ');
    if (type === "Enter") result.push(obj[uid] + message[0]); 
    if (type === "Leave") result.push(obj[uid] + message[1]);
  });
 
  return result;
}

