function solution(word) {
    const alphaIdx = { 'A': 0, 'E': 1, 'I': 2, 'O': 3, 'U': 4 };
    const positionIdx = [781, 156, 31, 6, 1];

    const answer = word.split('').reduce((acc, el, idx) => {
        return acc + (alphaIdx[el] * positionIdx[idx]);
    }, 0);

    return answer + word.length;
}

/*
어차피 누적이므로 문자별, 위치별 가중치, 길이 고려

<문자 가중치> : 문자의 순서 반영
A : 0
E : 1
I : 2
O : 3
U : 4

<위치 가중치> : 앞 문자 다음에 올 수 있는 모든 문자 조합 수
1번째 위치 : 5^4 + 5^3 + 5^2 + 5^1 + 5^0 = 781
2번째 위치 : 5^3 + 5^2 + 5^1 + 5^0 = 156
3번째 위치 : 5^2 + 5^1 + 5^0 = 31
4번째 위치 : 5^1 + 5^0 = 6
5번째 위치 : 5^0 = 1

<길이> : 짧은단어와 긴단어 가중치 
A : 1 번째
AA : 2 번째

<계산법>
AAAE : 
AAA -> 0 * 781 + 0 * 156 + 0 * 31 = 0
E -> 1 * 6 = 6
길이 -> 4
0 + 6 + 4 = 10

I : 
I -> 2 * 781 = 1562
길이 -> 1
1562 + 1 = 1563

*/
