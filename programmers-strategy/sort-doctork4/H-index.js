function solution(citations) {
  const sortedArr = citations.sort((a, b) => b - a);
  const n = citations.length;
  let h = n;
  let count = 0;
  
  while (h > 0) {
    
    inner : for (let i = 0; i < n+1; i++) {
      count = i+1;
      if (sortedArr[i] >= h) continue inner;
      break inner;
    }
    
    if (h < count) {
      break;
    }
    
    h += -1;
  }
  
  return h;
}

// function solution(citations) {
//   const n = citations.length;
//   const sortedArr = citations.sort((a, b) => a - b);
  
//   const answer = [];
//   for (let i = 0; i < sortedArr.length; i++){
//       const h = sortedArr[i];
//       if (h > n) break;
//       const overH = n - i;

//       if (h <= overH ) {
//           answer.push(sortedArr[i]);
//       }
//       // console.log(h, overH, answer)
//   }
//   const maxValue = Math.max(...answer);
  
//   return maxValue <= n ? maxValue : n-1;
// }