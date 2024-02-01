function solution(prices) {
  const ans = [];
  for (let i = 0; i < prices.length; ++i) {
    let time = 0;
    for (let j = i + 1; j < prices.length; ++j) {
      ++time;
      if (prices[i] > prices[j])
        break;
      // if (prices[i] <= prices[j])
      //   ++time;
    }
    ans.push(time);
  }
  return ans;
}

console.log(solution([1, 2, 3, 2, 3]));
console.log(solution([5, 8, 6, 2, 4, 1]));
