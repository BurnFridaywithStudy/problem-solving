function solution(new_id) {
    let special = 'abcdefghijklmnopqrstuvwxyz0123456789-_.'.split('')

    //1단계: 모든 대문자를 대응되는 소문자로 치환
    new_id = new_id.toLowerCase();

    //2단계: 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자 제거
    new_id = [...new_id].filter((id) => special.includes(id)).join('');

    //3단계: 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환
    while (new_id.includes('..')) {
        new_id = new_id.replace('..', '.');
    }

    //4단계: 마침표(.)가 처음이나 끝에 위치한다면 제거
    new_id = new_id.split('');

    if (new_id[0] === '.') new_id.shift();
    if (new_id[new_id.length - 1] === '.') new_id.pop();

    //5단계: 빈 문자여리라면, "a" 대입
    if (new_id.length === 0) new_id.push('a');

    //6단계: 길이가 16자 이상이라면 첫 15개를 제외한 나머지 문자 제거, 제거 후 마침표(.)가 끝에 위치한다면 이를 제거
    if (new_id.length >= 16) {
        new_id.splice(15);
    }
    if (new_id[14] === '.') {
        new_id.pop();
    }

    //7단계: 길이가 2자 이하라면, 마지막 문자를 길이가 3이 될 때까지 반복
    if (new_id.length <= 2) {
        while (new_id.length < 3) {
            new_id.push(new_id[new_id.length - 1]);
        }
    }

    return new_id.join('');
}