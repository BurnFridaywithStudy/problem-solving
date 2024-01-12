// 전화번호 배열
// 다른 번호의 접두어일 경우 false
function solution(phone_book) {
    phone_book.sort();

    const result = phone_book.some((phone, index) => {
        if (index + 1 < phone_book.length) {
            return phone_book[index + 1].startsWith(phone);
        }
    })

    return !result;
}
