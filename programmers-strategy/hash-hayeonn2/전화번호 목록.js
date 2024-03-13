function solution(phone_book) {
  const map = new Map();

  // phone_book의 원소들을 map.set을 통해 (key, value) 형태로 넣어준다.
  for (const num of phone_book) {
    map.set(num, true);
  }

  // phone_book의 원소들을 하나씩 돌면서 반복문을 진행한다.
  // 원소들을 대상으로 반복문을 돌며 문자를 1개씩 쪼개어 str에 저장한다.
  // 만약 그 저장된 str이 map에 존재한다면 false 반환하고 없다면 true 반환한다.
  for (const phoneNumber of phone_book) {
    for (let i = 1; i < phoneNumber.length; i++) {
      const str = phoneNumber.slice(0, i);

      if (map.has(str)) return false;
    }
  }

  return true;
}
