// 각 종류별로 1가지 의상만 가능
// 모든 의상이 겹치지 않으면 다른 옷
// 하루에 최소 1개
// clothes = [의상의 이름, 의상의 종류]
function solution(clothes) {
    const map = new Map();

    for (let c of clothes) {
        const name = c[0];
        const category = c[1];

        map.set(category, (map.get(category) || 0) + 1);
    }

    let sum = 1;

    map.forEach((value) => {
        sum *= value + 1;
    })

    return sum - 1;
}
