function solution(genres, plays) {
  const albumMap = new Map();
  const genreMap = new Map();
  genres.forEach((genre, idx) => {
    if (albumMap.has(genre))
      albumMap.set(genre, [...albumMap.get(genre), [idx, plays[idx]]]);
    else
      albumMap.set(genre, [[idx, plays[idx]]]);
    if (genreMap.has(genre))
      genreMap.set(genre, genreMap.get(genre) + plays[idx]);
    else
      genreMap.set(genre, plays[idx]);
  });
  albumMap.forEach((value, key) => {
    albumMap.set(key, value.sort((a, b) => {
      if (b[1] === a[1])
        return a[0] - b[0];
      return b[1] - a[1]
    }));
  });
  const genreArray = Array.from(genreMap).sort((a, b) => b[1] - a[1]).map(el => el[0]);
  const answer = [];
  genreArray.forEach(genre => {
    albumMap.get(genre).forEach(([idx, plays], index) => {
      if (index < 2)
        answer.push(idx)
    });
  });
  return answer;
}

console.log(solution(
  ["classic", "pop", "classic", "classic", "pop"],
  [500, 600, 150, 800, 2500]
));
