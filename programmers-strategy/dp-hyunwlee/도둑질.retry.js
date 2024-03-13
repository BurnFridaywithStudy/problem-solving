function solution(money) {
  if (money.length === 3) {
    return Math.max((money[0] + money[2]), money[1]);
  }
  const front = Array(money.length).fill(0);
  const rear = Array(money.length).fill(0);
  front[0] = money[0];
  front[1] = money[0];
  for (let i = 2; i < money.length - 1; ++i)
    front[i] = Math.max(front[i - 1], front[i - 2] + money[i]);
  rear[0] = 0;
  rear[1] = money[1];
  for (let i = 2; i < money.length; ++i)
    rear[i] = Math.max(rear[i - 1], rear[i - 2] + money[i]);
  return Math.max(front[money.length - 2], rear[rear.length - 1]);
}

/* topDown - stackOverFlow
function stealFirstHouse(n, money, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return memo[0] = money[0];
  if (n === 1)
    return 0;
  return memo[n] = Math.max(stealFirstHouse(n - 1, money, memo), (stealFirstHouse(n - 2, money, memo) + money[n]));
}

function stealLastHouse(n, money, memo) {
  if (memo[n] > 0)
    return memo[n];
  if (n === 0)
    return 0;
  if (n === 1)
    return memo[1] = money[1];
  return memo[n] = Math.max(stealLastHouse(n - 1, money, memo), (stealLastHouse(n - 2, money, memo) + money[n]));
}
*/

console.log(solution([1, 2]));
console.log(solution([1, 2, 3]));
// console.log(solution([0, 0, 2, 1, 0, 0, 1]));
console.log(solution([1, 2, 3, 1]));
console.log(solution([10, 5, 3, 1, 10]));

