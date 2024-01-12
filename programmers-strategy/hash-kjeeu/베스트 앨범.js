// 장르 중 재생순 > 속한 노래 중 재생순 > 고유 번호 낮은 순 > 장르별로 최대 2개
// genres = 노래장르, play = 재생 횟수
// return 고유 번호
function solution(genres, plays) {
    const playsMap = new Map(); //[노래장르, 총 재생 횟수]
    const genresMap = new Map(); //[노래장르, {고유번호, 재생 횟수}]
    const answer = [];

    for (let i = 0; i < genres.length; i++) {
        const genre = genres[i];
        const play = plays[i];

        genresMap.set(genre, (genresMap.get(genre) || []).concat({ index: i, play: play }));
        playsMap.set(genre, (playsMap.get(genre) || 0) + play);

    }

    // 총 재생 횟수가 많은 장르 순 정렬
    const sortPlaysMap = [...playsMap.entries()].sort((a, b) => b[1] - a[1]);

    for (const [key, totalPlays] of sortPlaysMap) {
        const songs = genresMap.get(key);

        // 재생 횟수가 많은 순 정렬, 재생 횟수가 같으면 인덱스가 낮은 순 정렬
        const sortSongs = songs.sort((a, b) => {
            if (a.play === b.play) {
                return a.index - b.index;
            }
            return b.play - a.play;
        });

        // 두 곡씩 선택
        for (let i = 0; i < Math.min(2, sortSongs.length); i++) {
            answer.push(sortSongs[i].index);
        }
    }

    return answer;
}
