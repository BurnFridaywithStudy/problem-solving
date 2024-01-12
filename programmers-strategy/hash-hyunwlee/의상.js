function solution(clothes) {
  const map = new Map();
  clothes.forEach(([value, key]) => {
    if (map.has(key))
      map.set(key, map.get(key) + 1);
    else
      map.set(key, 1);
  });
  return Array.from(map).reduce((cal, [key, value]) => cal * (value + 1), 1) - 1;
}

console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]]));
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]]));
