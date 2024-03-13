//마라톤 참여 선수, 완주한 선수
function solution(participant, completion) {
    const list = new Map();

    for (let i = 0; i < participant.length; i++) {
        const p = participant[i];
        const c = completion[i];

        list.set(p, (list.get(p) || 0) + 1);
        list.set(c, (list.get(c) || 0) - 1);
    }

    for (let [key, value] of list) {
        if (value > 0) return key;
    }
}
