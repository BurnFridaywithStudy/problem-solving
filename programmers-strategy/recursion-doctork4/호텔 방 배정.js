// function solution(k, room_number) {
//   const hotel = Array(k+1).fill().map(v => false);
//   const result = [];
//   room_number.forEach((customer) => {
//     while (hotel[customer] !== false) {
//       customer += 1;
//     }
//     hotel[customer] = true;
//     result.push(customer);
//   })
  
//   return result;
// }

/**
  정확성: 78.8
  효율성: 6.1
  합계: 84.8 / 100.0
 */