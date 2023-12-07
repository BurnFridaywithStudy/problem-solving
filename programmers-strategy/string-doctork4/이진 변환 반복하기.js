function solution(s) {
  const answer = [0, 0];
  
  while (s !== "1") {
    answer[0] += 1;
    let x = "";
    
    // 모든 0을 제거
    for (let i = 0; i < s.length; i++) {
      if(s[i] === "1") x += s[i];
      if(s[i] === "0") answer[1] += 1;            
    }
    const c = x.length;
    
    // 2진법으로 변환
    s = makeBinary(c)
  }

  return answer;
}

function makeBinary(c) {
const binary = [];
while (c !== 1) {
  binary.push(c % 2)
  c = Math.floor(c / 2);
  console.log(binary);
}
binary.push(c);
return binary.reverse().join('');
}