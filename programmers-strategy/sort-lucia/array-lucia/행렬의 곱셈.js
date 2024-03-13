function solution(arr1, arr2) {
    return arr1.map(row => 
        arr2[0].map((_, col) => 
            row.reduce((acc, el, row) => {
        return acc = acc + el * arr2[row][col]}, 0)
        )
    );
}

//이차원 배열로 생각하고 arr1은 행따서, arr2는 열따서 곱함
