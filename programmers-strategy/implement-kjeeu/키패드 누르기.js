function solution(numbers, hand) {
    let phone = [[1, 2, 3], [4, 5, 6], [7, 8, 9], ['*', 0, '#']];
    let left = [3, 0];
    let right = [3, 2];
    let result = "";

    for (let i of numbers) {
        let num = [];

        if (i === 0) num.push(3, phone[3].indexOf(i));
        else if (1 <= i && i < 4) num.push(0, phone[0].indexOf(i));
        else if (i < 7) num.push(1, phone[1].indexOf(i));
        else num.push(2, phone[2].indexOf(i));

        if ([1, 4, 7].includes(i)) {
            result += 'L';
            left = num;
        }

        else if ([3, 6, 9].includes(i)) {
            result += 'R';
            right = num;
        }

        else {

            let ln = Math.abs(left[0] - num[0]) + Math.abs(left[1] - num[1]);
            let rn = Math.abs(right[0] - num[0]) + Math.abs(right[1] - num[1]);

            if (ln === rn) {
                if (hand === 'right') {
                    result += 'R';
                    right = num;
                }
                else {
                    result += 'L';
                    left = num;
                }
            } else if (ln > rn) {
                result += 'R';
                right = num;
            } else {
                result += 'L';
                left = num;
            }
        }
    }

    return result;
}