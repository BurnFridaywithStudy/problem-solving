function solution(numbers) {
  const checkPrime = Array(10000000).fill(false);
  checkPrime[0] = true;
  checkPrime[1] = true;
  const set = new Set();
  calPrime(checkPrime);
  const check = Array(numbers.length).fill(false);
  recurse(0, numbers.split(''), '', check, set);
  let ans = 0;
  set.forEach(item => {
    if (!checkPrime[item]) {
      ++ans;
    }
  });
  return ans;
}

function recurse(depth, numbers, s, check, set) {
  if (depth > 0) {
    set.add(Number(s));
  }
  if (depth >= numbers.length) {
    return;
  }
  numbers.forEach((number, idx) => {
    if (!check[idx]) {
      check[idx] = true;
      recurse(depth + 1, numbers, s + number, check, set);
      check[idx] = false;
    }
  })
}

function calPrime(checkPrime) {
  for (let i = 2; i <= 10000000; ++i) {
    if (!checkPrime[i]) {
      for (let j = i * i; j <= 10000000; j += i) {
        checkPrime[j] = true;
      }
    }
  }
}

console.log(solution('17'));
console.log(solution('011'));
