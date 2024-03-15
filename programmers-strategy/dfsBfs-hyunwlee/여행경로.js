const ans = [];

function solution(tickets) {
  const check = Array(tickets.length).fill(false);
  recurse(0, 'ICN', 'ICN', tickets, check);
  ans.sort();
  return ans[0].split(',');
}

function recurse(depth, current, route, tickets, check) {
  if (depth === tickets.length) {
    ans.push(route);
    return;
  }
  tickets.forEach(([curr, next], idx) => {
    if (current === curr) {
      if (check[idx]) return;
      check[idx] = true;
      recurse(depth + 1, next, route + `,${next}`, tickets, check);
      check[idx] = false;
    }
  });
}

console.log(solution([["ICN", "JFK"], ["HND", "IAD"], ["JFK", "HND"]]));
console.log(solution([["ICN", "SFO"], ["ICN", "ATL"], ["SFO", "ATL"], ["ATL", "ICN"], ["ATL", "SFO"]]));
