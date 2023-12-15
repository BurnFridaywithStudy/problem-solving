function solution(user_id, banned_id) {
  const possibleBan = Array.from({length: banned_id.length}, () => []);
  
  banned_id.forEach((ban_id, idx) => {
    for (let i = 0; i < user_id.length; i++) {
    // 불량사용자 후보가 될 수 있는지 검증하는 함수
      if (canBeBanned(ban_id, user_id[i])) {
        possibleBan[idx].push(user_id[i]);
      }
    }
  });
  // possibleBan의 모든 조합을 구하자

  return ;
}

function getAllCombination(curr, arr) {
  if (arr.length === 0) return curr;

  
  const newArr = [...arr];
  const target = newArr.pop();
  
  for (let i = 0; i < target.length; i++) {
    getAllCombination(target[i], newArr)
  }
}

function canBeBanned (ban_id, user_id) {
  if (ban_id.length !== user_id.length) return false;
  for (let i = 0; i < ban_id.length; i++) {
    if (user_id[i] !== ban_id[i]) {
      if (ban_id[i] !== "*") return false;
    }
  }

  return true;
}
