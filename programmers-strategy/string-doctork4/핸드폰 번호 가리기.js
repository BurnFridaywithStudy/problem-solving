function solution(phone_number) {
  let answer = "*".repeat(phone_number.length - 4);
  let i = phone_number.length - 4;
  while (i < phone_number.length) {
    answer += phone_number[i];
    i++;
  }
  
  return answer;
}