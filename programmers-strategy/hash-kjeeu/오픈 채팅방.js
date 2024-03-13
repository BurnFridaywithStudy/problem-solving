// 닉네임이 들어왔습니다.(Enter) 닉네임이 나갔습니다.(Leave)
// 기존 채팅방 닉네임도 변경됨 (Change)
// 닉네임 중복 허용
// record = 행위, 아이디, 닉네임
function solution(record) {
    const enter = '님이 들어왔습니다.';
    const leave = '님이 나갔습니다.';
    const map = new Map();
    const states = [];
    const result = [];

    for (let i of record) {
        const [state, name, nickname] = i.split(' ');

        if (state === 'Enter') {
            states.push([name, enter]);
            map.set(name, nickname);
        } else if (state === 'Leave') {
            states.push([name, leave]);
        } else {
            map.set(name, nickname);
        }
    }

    for (let i of states) {
        const [name, state] = i;
        const nickname = map.get(name);

        result.push(`${nickname}${state}`);
    }

    return result;
}
