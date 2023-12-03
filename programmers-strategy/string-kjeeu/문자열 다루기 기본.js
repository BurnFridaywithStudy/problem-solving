function solution(s) {
    const isNum = [...s].filter((s) => isNaN(s)).length === 0;
    return (s.length === 4 || s.length === 6) && isNum ? true : false;
}
