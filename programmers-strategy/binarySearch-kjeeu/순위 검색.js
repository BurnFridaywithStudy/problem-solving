//효율성 실패
function solution(info, query) {
    const answer = [];
    const users = [];

    for (let i = 0; i < info.length; i++) {
        let user = info[i].split(' ');

        users.push({
            language: user[0],
            position: user[1],
            career: user[2],
            soulFood: user[3],
            score: Number(user[4])
        });
    }

    for (let i = 0; i < query.length; i++) {
        let queryUser = query[i].split(' ');
        let language = queryUser[0];
        let position = queryUser[2];
        let career = queryUser[4];
        let soulFood = queryUser[6];
        let score = Number(queryUser[7]);

        let count = 0;
        for (let j = 0; j < users.length; j++) {
            const user = users[j];
            if ((language === "-" || language === user.language) &&
                (position === "-" || position === user.position) &&
                (career === "-" || career === user.career) &&
                (soulFood === "-" || soulFood === user.soulFood) &&
                score <= user.score) {
                count++;
            }
        }
        answer.push(count);
    }

    return answer;
}