function solution(clothes) {
  const map = new Map();

  // clothes 를 name , type 별로 순회
  // 이미 해당 type 있다면 기존값에 +1
  // 카운트가 없다면 1로 지정
  for (const [name, type] of clothes) {
    if (map.get(type)) {
      map.set(type, map.get(type) + 1);
    } else map.set(type, 1);
  }
  // 각 종류별로 선택할 수 있는 경우의 수를 계산하는데 사용
  let total = 1;

  for (const [key, value] of map) {
    // console.log("key", key); headgear = 2 , eyewear = 1
    // console.log("val", value);
    total *= value + 1;
  }
  // 아무것도 선택하지 않을 경우를 제외하기 위해 -1
  return total - 1;
}

solution([
  ["yellow_hat", "headgear"],
  ["blue_sunglasses", "eyewear"],
  ["green_turban", "headgear"],
]);
