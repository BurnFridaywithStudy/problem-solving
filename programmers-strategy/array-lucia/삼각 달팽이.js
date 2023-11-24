function replaceRight(arr, el) {
    arr.pop();
    arr.push(el);
    return arr;
}

function addResult(outerArr, innerArr, idx) {
    if (idx > 1 && idx < outerArr.length - 1 && innerArr[idx - 2]) {
        const innerElements = innerArr[idx - 2].flat();
        outerArr[idx].splice(1, idx - 1, ...innerElements);
    }
    return outerArr;
}

function pushResult(outerArr, innerArr) {
    const combinedArr = outerArr.map((arr, idx) => {
        if (arr.length === 1 || arr.length === 2 || arr.length === outerArr.length) {
            return arr;
        } else {
            return addResult(outerArr, innerArr, idx)[idx];
        }
    });
    return combinedArr.flat();
}

function solution(n) {
    // 바깥 삼각형 생성
        if (n === 0) return [];

    const outerArr = Array.from({length: n}, (_, outI) => 
        Array.from({length: outI + 1}, (_, innerI) => outI + innerI + 1))
        .map((el, idx) => el.length === 1 ? el : replaceRight(el, 3 * n - 2 - idx));
    
    // 안쪽 삼각형 생성
    const innerArr = n > 3 
        ? Array.from({length: n - 3}, (_, outI) => 
            Array.from({length: outI + 1}, (_, innerI) => outerArr[1][1] + outI + innerI + 1))
            .map((el, idx) => el.length === 1 ? el : replaceRight(el, 3 * (n - 1) + 3 * (n - 3) - 2 - idx))
        : [];
    
    // 바깥 삼각형과 안쪽 삼각형을 조합
    return pushResult(outerArr, innerArr);
    
    solution(n - 1);
}


//재귀로 짜보고 싶었는데 잘 안되었다 겉껍질 안껍질까지 생성해서 두개 조합하고 재귀로 하는 방법 없을까
