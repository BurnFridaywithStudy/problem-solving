function solution(user_id, banned_id) {
  const permutationUser = permutation(user_id, banned_id.length);
  const value = permutationUser.filter((v) => check_id(v, banned_id));
  const answer = [...new Set(value.map((v) => v.sort().join(" ")))];
  return answer.length;
}

function check_id(u_id, b_id) {
  u_id = u_id.sort((a, b) => a.length - b.length);
  b_id = b_id.sort((a, b) => a.length - b.length);

  for (let i = 0; i < u_id.length; i++) {
    if (u_id[i].length !== b_id[i].length) {
      return false;
    }
    for (let j = 0; j < b_id[i].length; j++) {
      if (u_id[i][j] !== b_id[i][j] && b_id[i][j] !== "*") {
        return false;
      }
    }
  }
  return true;
}

function permutation(arr, selectNum) {
  let result = [];
  if (selectNum === 1) return arr.map((v) => [v]);

  arr.forEach((v, idx, arr) => {
    const fixer = v;
    const restArr = arr.filter((_, index) => index !== idx);
    const permuationArr = permutation(restArr, selectNum - 1);
    const combineFixer = permuationArr.map((v) => [fixer, ...v]);
    result.push(...combineFixer);
  });
  return result;
}

/**
 * 풀이
 * dfs로 풀려다가 소수 찾기에서 사용했던 순열을 이용해서 풀어보려했지만 아직 실패..
 * 좀만 더 하면 될 것 같은데 더 시도해봐야 할 듯.
 */
