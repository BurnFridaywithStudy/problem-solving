function solution(strings, n) {
    strings.sort();

    strings.sort((a, b) => {
        return (a[n] < b[n]) ? -1 
               : (a[n] > b[n]) ? 1 
               : 0;
    });

    return strings;
}
