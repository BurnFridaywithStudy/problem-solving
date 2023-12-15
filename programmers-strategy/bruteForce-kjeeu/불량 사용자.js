function solution(user_id, banned_id) {
    const isUser = Array(user_id.length).fill(0);
    const set = new Set();

    //ui bi같은지 확인
    const isPossible = (ui, bi) => {
        if (ui.length !== bi.length) return false;

        for (let i = 0; i < ui.length; i++) {
            if (bi[i] !== '*' && ui[i] !== bi[i]) return false;
        }

        return true;
    }

    //user_id확인, 제지 아이디 선택수, 아이디후보
    const DFS = (check, count, possible) => {
        //제지 아이디 모두 선택
        if (count === banned_id.length) {
            let arr = possible.split(' ');
            arr.shift();
            arr.sort();
            let newArr = arr.join('');
            set.add(newArr);
        }

        //user_id 모두 확인
        if (check >= user_id.length) return;

        //조합 확인
        for (let i = check; i < banned_id.length; i++) {
            for (let j = 0; j < user_id.length; j++) {
                if (isUser[j] === 1) continue;
                if (!isPossible(user_id[j], banned_id[i])) continue;

                isUser[j] = 1;
                DFS(i + 1, count + 1, possible + ' ' + user_id[j]);

                isUser[j] = 0;
            }
        }
    }

    DFS(0, 0, '');

    return set.size;
}