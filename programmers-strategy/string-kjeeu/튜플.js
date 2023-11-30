//s = "{{20,111},{111}}"
function solution(s) {
    let result = new Map();
    //step1 = 20,111},111}}
    const step1 = s.replaceAll('{', '');
    //step2 = [ '20', '111', '111' ]
    const step2 = step1.replaceAll('}', '').split(',');

    for (let i = 0; i < step2.length; i++) {
        const target = step2[i];
        result.set(target, (result.get(target) || 0) + 1);
    }

    //result = Map(2) { '20' => 1, '111' => 2 }
    const arrayResult = [...result].sort((a, b) => b[1] - a[1]);
    const resultKey = arrayResult.map((result) => Number(result[0]));

    return resultKey;
}