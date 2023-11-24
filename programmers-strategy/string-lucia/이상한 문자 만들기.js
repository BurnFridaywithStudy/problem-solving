function solution(s) {
    const makeArr = s.split(' ');
    const changeArr = makeArr.map((el) => el.split('').map((val, index) =>
        (index % 2 === 0) ? val = val.toUpperCase() : val = val.toLowerCase()).join('')
                                               ).join(' ');
    return changeArr;
}
