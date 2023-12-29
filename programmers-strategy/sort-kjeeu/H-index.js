//n편중 h이상 인용된 논문이 h이상이고 나머진 h이하 인용되었다면 그 최댓값
function solution(citations) {
    citations.sort();
    const max = Math.max(...citations);

    for (let i = max; i > 0; i--) {
        const count = citations.filter((x) => x >= i).length;

        if (count >= i && citations.length - count <= i) {
            return i;
        }
    }

    return Math.max(...citations);
}