function solution(stones, k) {
  let start = 0;
  let end = 200_000_000;
  let mid = Math.floor((start + end) / 2);
  
  while (start <= end) {
    const result = canPass(mid, stones, k);
    
    if (result) start = mid + 1;
    if (!result) end = mid - 1;
        
    mid = Math.floor((start + end) / 2);
  }
  
  return mid;
}

function canPass(n, stones, k) {
  let skip = 0;
  for (let i = 0; i < stones.length; i++) {
    if (stones[i] < n) skip += 1;
    if (stones[i] >= n) skip = 0;
    if (skip >= k) return false;
  }
  
  return true
}