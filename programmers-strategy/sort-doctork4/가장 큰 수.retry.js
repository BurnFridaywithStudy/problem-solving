function solution(numbers) {
  const strNumbers = numbers.map(String);
  strNumbers.sort((a, b) => {
      return Number(b + a) - Number(a + b);
  });
  
  if (strNumbers[0] === "0") return "0";
  
  return strNumbers.join('');
}