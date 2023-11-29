function solution(s) {
  let answer = "";
  let arr = s.split(" ");
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    str = arr[i]; // for문을 이용하여 하나하나 꺼내기
    for (let j = 0; j < str.length; j++) {
      if (j % 2 === 0) {
        answer += str[j].toUpperCase();
      } else {
        answer += str[j].toLowerCase();
      }
      // console.log(answer);
    }
    // console.log(answer); // 콘솔을 찍으면 try , try hello, try hello world 가 나오는지 궁금
    if (i !== arr.length - 1) {
      // 마지막 단어가 아닌 경우에만 공백 추가
      answer += " ";
    }
  }
  return answer;
}

solution("try hello world");
