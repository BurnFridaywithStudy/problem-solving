function solution(genres, plays) {
  const map = new Map();

  // 1. 반복문을 돌면서 map에 genre가 없다면 idx와 재생된 횟수(plays)를 넣어준다.
  // 2. 만약 있다면(map.has()), 다시 map에 genre의 idx와 재생된 횟수를 추가적으로 넣어준다.
  for (let i = 0; i < plays.length; i++) {
    if (map.has(genres[i])) {
      map.set(genres[i], [...map.get(genres[i]), { idx: i, count: plays[i] }]);
    } else {
      map.set(genres[i], [{ idx: i, count: plays[i] }]);
    }

    // 3. 재생횟수를 정렬한다.
    // 문제 설명에 나온대로 재생 횟수에 따라 높은 것부터 정렬하고,
    // 만약, 재생 횟수가 같다면 고유 번호가 낮은 순서대로 정렬한다.
    // 그리고 다시 map을 정렬한 순서대로 세팅해준다.
    const playsCount = map.get(genres[i]);

    playsCount.sort((a, b) => {
      if (a.count === b.count) {
        return a.idx - b.idx;
      } else {
        return b.count - a.count;
      }
    });
    map.set(genres[i], playsCount);
  }

  // 4. 총 재생횟수를 담는 배열을 만든다.
  // map의 키값인 장르를 돌면서 장르의 재생횟수를 reduce를 통해 더해준다.
  // 그리고 배열에 장르와 재생횟수 총합을 넣어준 후 높은 순서대로 정렬한다.
  const totalPlays = [];
  for (const genre of map.keys()) {
    const total = map.get(genre).reduce((acc, cur) => acc + cur.count, 0);

    totalPlays.push({ genre: genre, total: total });
  }
  totalPlays.sort((a, b) => b.total - a.total);

  // 5. 마지막 결과값 배열을 만든다.
  // totalPlays의 요소를 돌면서 map에 저장된 genre값을 뽑아준다.
  // 그리고 그 배열의 값을 slice를 이용해 2개만 잘라준다.
  // 만약, sliced 내 원소가 1이하일 때도 고려해서 조건문을 통해 값을 도출한다.
  let result = [];
  for (const item of totalPlays) {
    const topSongs = map.get(item.genre);
    const sliced = topSongs.slice(0, 2);

    if (sliced.length <= 1) {
      result = [...result, sliced[0].idx];
    } else {
      result = [...result, sliced[0].idx, sliced[1].idx];
    }
  }

  return result;
}
