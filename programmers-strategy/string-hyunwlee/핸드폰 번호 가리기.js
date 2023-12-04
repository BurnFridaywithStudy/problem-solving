export default function solution(phone_number) {
  let result = '';
  let i = phone_number.length - 1 - 4 + 1;
  while (--i >= 0) {
    result += '*';
  }
  result += phone_number.slice(phone_number.length - 4, phone_number.length);
  return result;
}
