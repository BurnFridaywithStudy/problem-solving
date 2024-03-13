function solution(n, times) {
  let start = 1;
  let end = times[times.length-1] * n;
  let answer = end;
  
  while (start <= end) {
    let mid = parseInt((start + end) / 2);
    let sum = 0;
    for (let time of times) {
      sum += parseInt(mid / time);
    }
    
    if (n <= sum && mid < answer) answer = mid;

    if (n > sum) start = mid + 1;
    
    if (n <= sum) end = mid - 1;
  }

  return answer;
}