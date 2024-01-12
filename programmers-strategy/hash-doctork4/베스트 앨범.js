function solution(genres, plays) {
  const obj = {};
  genres.forEach((genre, i) => {
    if (!obj[genre]) obj[genre] = { [i]: plays[i] };
    else obj[genre][i] = plays[i];
  });
  
  // 장르간 총 재생시간 비교 및 정렬
  const genreList = Object.keys(obj);
  const totaltimes = {};
  genreList.forEach(genre => {
    const times = Object.values(obj[genre]).reduce((acc, curr) => acc + curr, 0);
    totaltimes[genre] = times;
  })
  genreList.sort((a, b) => totaltimes[b] - totaltimes[a]);

  const answer = [];
  genreList.forEach(genre => {
    const songs = Object.entries(obj[genre]).sort((a, b) => {
      const [, aplay] = a;
      const [, bplay] = b;
      return bplay - aplay;
    });
      
    const first = songs.shift();
    answer.push(Number(first[0]));
    
    if (songs.length >= 1) {
      const second = songs.shift();
      answer.push(Number(second[0]));
    }
  });
  
  return answer;
}