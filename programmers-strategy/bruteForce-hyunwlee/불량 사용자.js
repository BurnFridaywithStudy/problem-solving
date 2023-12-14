let answer = null;

function solution(user_id, banned_id) {
  answer = new Set();
  const check = Array(banned_id.length).fill(false);
  const arr = Array(banned_id.length).fill(0);
  recurse(0, user_id, banned_id, arr, check);
  return answer.size;
}

function recurse(depth, user_id, banned_id, arr, check) {
  if (depth === banned_id.length) {
    let temp = true;
    arr.forEach((item, idx) => {
      if (!compareUserWithBanned(user_id[item], banned_id[idx]))
        temp = false;
    })
    if (temp) {
      // set 원소 비교 === shallow compare
      // primitive type으로 변경
      const copyArr = [...arr];
      answer.add(copyArr.sort((a, b) => (a - b)).toString());
    }
    return;
  }
  user_id.forEach((id, idx) => {
    if (!check[idx]) {
      check[idx] = true;
      arr[depth] = idx;
      recurse(depth + 1, user_id, banned_id, arr, check);
      check[idx] = false;
    }
  })
}

function compareUserWithBanned(user, banned) {
  if (user.length !== banned.length)
    return false;
  let result = true;
  user.split('').forEach((ch, idx) => {
    if (banned[idx] === '*')
      return;
    if (ch !== banned[idx])
      result = false;
  });
  return result;
}

console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["*rodo", "*rodo", "******"]));
console.log(solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "*rodo", "******", "******"]));
