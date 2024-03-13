function solution(expression) {
    const list = ['+', '-', '*'];
    const ex = expression.split('');
    const newEx = [];
    let num = '';
    let result = 0;

    //["100","-","200","*","300","-","500","+","20"] 숫자, 연산자 분리
    for (let i = 0; i <= ex.length; i++) {
        if (i === ex.length) {
            newEx.push(num);
            break;
        }
        if (!isNaN(ex[i])) {
            num += ex[i];
        } else {
            newEx.push(num);
            newEx.push(ex[i]);
            num = '';
        }
    }

    //계산
    const get = (list, a) => {
        const newList = [...list];

        while (newList.indexOf(a) >= 0) {
            const result = eval(newList[newList.indexOf(a) - 1] + a + newList[newList.indexOf(a) + 1]);
            newList.splice(newList.indexOf(a) - 1, 3, result);
        }

        return newList;
    }

    for (let i = 0; i < list.length; i++) {
        const step1 = get(newEx, list[i % 3])
        const step2 = get(step1, list[(i + 1) % 3])
        const step3 = get(step2, list[(i + 2) % 3])
        result = Math.max(result, Math.abs(step3[0]));

        const step4 = get(newEx, list[i % 3])
        const step5 = get(step4, list[(i + 2) % 3])
        const step6 = get(step5, list[(i + 1) % 3])
        result = Math.max(result, Math.abs(step6[0]));
    }

    return result;
}