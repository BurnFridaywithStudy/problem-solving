function moveRight(firstDot, makeDot) {
    const rightArr = Array.from({length : makeDot[0] + 1}, (_, arrIdx) => firstDot + arrIdx);
    return rightArr;
}

function moveDown(secondDot, makeDot, rows) {
    const downArr = Array.from({length : makeDot[1]}, (_, arrIdx) => secondDot + (arrIdx + 1) * rows);
    return downArr;
}

function moveLeft(thirdDot, makeDot) {
    const leftArr = Array.from({length : makeDot[0]}, (_, arrIdx) => thirdDot - (arrIdx + 1));
    return leftArr;
}

function moveUp(fourthDot, makeDot, rows) {
    const upArr = Array.from({length : makeDot[1] - 1}, (_, arrIdx) => fourthDot - (arrIdx + 1) * rows);
    return upArr;
}

function sumArr(rightArr, downArr, leftArr, upArr) {
    // 마지막 원소를 시작점으로 옮깁니다.
    upArr.push(upArr.shift());
    return [...upArr, ...rightArr, ...downArr, ...leftArr];
}


function returnMin(sumArr) {
    const min = sumArr.sort((a , b) => a - b)[0];
    return min;
}

function updateMatrix(makeArr, rotatedArr, x1, y1, x2, y2) {
    let index = 0;

    // 왼쪽 가장자리 업데이트
    for (let i = x1; i <= x2; i++) {
        makeArr[i][y1] = rotatedArr[index++];
    }

    // 하단 가장자리 업데이트
    for (let j = y1 + 1; j <= y2; j++) {
        makeArr[x2][j] = rotatedArr[index++];
    }

    // 오른쪽 가장자리 업데이트
    for (let i = x2 - 1; i >= x1; i--) {
        makeArr[i][y2] = rotatedArr[index++];
    }

    // 상단 가장자리 업데이트
    for (let j = y2 - 1; j > y1; j--) {
        makeArr[x1][j] = rotatedArr[index++];
    }
}
function solution(rows, columns, queries) {
    const makeArr = Array.from({ length: rows }, (_, outIdx) =>
        Array.from({ length: columns }, (_, innerIdx) => columns * outIdx + innerIdx + 1));

    return queries.map(query => {
        const [x1, y1, x2, y2] = query.map(el => el - 1);
        const makeDot = [y2 - y1, x2 - x1];

        const firstDot = makeArr[x1][y1];
        const rightArr = moveRight(firstDot, makeDot);
        const secondDot = rightArr[rightArr.length - 1];
        const downArr = moveDown(secondDot, makeDot, rows);
        const thirdDot = downArr[downArr.length - 1];
        const leftArr = moveLeft(thirdDot, makeDot);
        const fourthDot = leftArr[leftArr.length - 1];
        const upArr = moveUp(fourthDot, makeDot, rows);

        const rotatedArr = sumArr(rightArr, downArr, leftArr, upArr);
        const min = returnMin(rotatedArr);

        updateMatrix(makeArr, rotatedArr, x1, y1, x2, y2);

        return min;
    });
}




/*
로직
[V]1. 주어진 행(세로), 열(가로)에 대한 2차원 배열을 만든다
[V]2. 주어진 쿼리에 대한 각 요소를 네개의 좌표로 구성한다
[V]2-2 구조분해 할당 첫 번째와 두 번째 요소를 각각 x, y로 할당
[V]3. 2에 대해 1번째 쿼리 요소를 사각형 시계 방향으로추출하고, 팝, 언쉬프트후 새배열 생성해서 저장
[V]4. 3에 대해 최소값
[V]5. 반복, 리턴 (요소는 숫자여야함)


안되고 있는 점: 재배치해서 배열 생성이 제대로 안됨 + 하나의 쿼리 이후 배열에 재배치가 안됨
*/ㅍ
