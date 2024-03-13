function solution(record) {
  const map = new Map();
  record.forEach(line => {
    const [command, uid, nickname] = line.split(' ');
    if (command === 'Enter' || command === 'Change') {
      map.set(uid, nickname);
    }
  });
  const ans = [];
  record.forEach(line => {
    const [command, uid, nickname] = line.split(' ');
    if (command === 'Enter') {
      ans.push(`${map.get(uid)}님이 들어왔습니다.`);
    } else if (command === 'Leave') {
      ans.push(`${map.get(uid)}님이 나갔습니다.`);
    }
  });
  return ans;
}

console.log(solution(["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Enter uid1234 Prodo", "Change uid4567 Ryan"]));
