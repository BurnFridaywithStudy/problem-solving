function solution(num) {
  if (num === 1) return 0;
  
  while (count < 500 && num !== 1){
    if (num % 2 === 1) {
      num = num * 3 + 1;
      count += 1;
      continue;
    }
    if (num % 2 === 0) {
      num = Math.floor(num / 2);
      count += 1;
      continue;
    }
  }
  return count < 500 ? count : -1;
}
