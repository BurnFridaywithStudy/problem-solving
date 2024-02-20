const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function solution(name) {
    let count = 0;
    let minMove = name.length-1;
    
    for (let i = 0; i < name.length; i++) {
        // 1. 상하조작 여부
        // - 12이하 인덱스라면 위버튼으로 찾아서 입력
        // - 13이상 인덱스라면 아래 버튼으로 찾아서 입력
        // 인덱스에 따라 명확한 답이 나옴
        const idx = alphabet.indexOf(name[i]);
        idx <= 12 ? count += idx : count += (26 - idx);
        
        // 2. 좌우조작 방법
        let next = i + 1;
        while (next < name.length && name[next] === "A") {    
            next += 1;
        }
        minMove = Math.min(
            minMove, // 왼쪽에서 오른쪽으로 쭉 가는 경우
            i * 2 + (name.length - next), // 정방향으로 갔다가 역방향으로 가는 경우
           i + (name.length - next) * 2); // 역방향으로 갔다가 정방향으로 오는 경우
    }
    count += minMove;
    return count
}