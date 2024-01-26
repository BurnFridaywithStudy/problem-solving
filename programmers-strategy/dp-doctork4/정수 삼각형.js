function solution(triangle) {
    
  for (let i = triangle.length-2; i >= 0; i--){
  // for (let i = triangle.length-1; i >= 0; i--){
    for (let j = 0; j < triangle[i].length; j++) {
    // for (let j = 0; j < triangle[i].length-1; j++) {
      triangle[i][j] += Math.max(triangle[i+1][j], triangle[i+1][j+1])
      // triangle[i][j] += Math.max(triangle[i][j], triangle[i][j+1])
    }
  }

  return triangle[0][0];
}

const input = [[7], [3, 8], [8, 1, 0], [2, 7, 4, 4], [4, 5, 2, 6, 5]];
console.log(solution(input));

// function solution(triangle) {
//   const answer = [];
//   const lastLen = triangle.at(-1).length;
//   for (let i = 0; i < lastLen; i++) {
//     let height = triangle.length;
//     const target = triangle[height-1][i];
//     console.log('target', target )
//     let total = target;
//     let count = 3
//     let selected = i;
//     while (height >= 2) {
//       const left = triangle[height-2][selected-1] ?? 0;
//       console.log(left, 'left');
      
//       const right = triangle[height-2][selected] ?? 0;
//       console.log(right, 'right');

//       const maxv = Math.max(left, right);
//       console.log('maxv', maxv)
      
//       total += maxv;
//       height += -1;
//       count += -1
//       maxv === left ? selected += -1 : selected += 0;
//     }
//     answer.push(total);
//   }
//   return answer;
//   // return Math.max(...answer);
// }


// function solution(triangle) {
//   let height = triangle.length - 1;
//   while (height > 0) {
//       for (let i = 0; i < height; i++){
//           triangle[height-1][i] += Math.max(triangle[height][i], triangle[height][i+1]);
//           // console.log(triangle)
//       }
//       height -= 1
//   }
//   return triangle[0][0];
// }