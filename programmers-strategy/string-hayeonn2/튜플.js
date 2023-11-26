function solution(s) {
  // 앞뒤 2개를 자르고 "},{" 기준으로 잘라 배열을 만든다.
  const sliceArray = s.slice(2, s.length - 2).split("},{");

  // 문자열의 길이에 따라 다시 배열을 배치시킨다. (문자열 길이가 짧은게 맨 앞으로)
  const sortArray = sliceArray.sort((a, b) => a.length - b.length);

  //중복을 제거하기 전 길이 순서대로 배치한 배열을 숫자로 모두 바꿔준다.
  const setArray = sortArray.join(",").split(",").map(Number);

  // 중복을 제거한 답 완성~
  return [...new Set(setArray)];
}

//   const answer = [];

//   s.slice(2, s.length - 2)
//     .split("},{")
//     .map((str) => str.split(",").map(Number))
//     .sort((a, b) => a.length - b.length)
//     .forEach((arr) => {
//       arr.forEach((el) => {
//         if (!answer.includes(el)) answer.push(el);
//       });
//     });
//   return answer;
