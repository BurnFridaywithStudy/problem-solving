function solution(numbers) {
  const answer = [];

  // 반복문을 통해 밑의 함수들을 수행해준다.
  // 1. numbers를 배열로 만들고 i개의 순열을 구한다.
  // 2. 그 배열들 중 소수인 것을 찾아서 리턴한다.
  for (let i = 1; i <= numbers.length; i++) {
    const permutation = [...getPermutation([...numbers], i)];
    const primeNumbers = permutation.filter((arr) => {
      const number = +arr.join("");
      const isPrimeNumber = checkPrimeNumber(number);
      return isPrimeNumber;
    });

    // 소수를 돌면서 answer에 넣어준다.
    primeNumbers.forEach((arr) => {
      answer.push(+arr.join(""));
    });
  }
  // 중복하는 숫자들이 있기 때문에 제거 후 길이를 리턴
  return [...new Set(answer)].length;
}

// 소수 판별하는 함수
const checkPrimeNumber = (number) => {
  if (number < 2) return false;

  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  // 나눠진 수가 없다면 해당 수는 소수이므로 return true
  return true;
};

// 순열 구하는 함수
const getPermutation = (arr, selectNumber) => {
  const results = [];

  // nP1이므로 그대로 반환
  if (selectNumber === 1) return arr.map((v) => [v]);

  // 배열을 순환
  // rest = 기준값을 제외한 나머지 배열을 넣어준다.
  // permutations = 나머지 배열을 기준으로 다시 순열을 구함 (기준값을 빼야해서 선택하는 개수 - 1)
  // 기준값(fixed)에 순열(permutations)을 붙인다.
  // 붙인 값을 결과에 넣어준다.
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutation(rest, selectNumber - 1);
    const attached = permutations.map((permutation) => [fixed, ...permutation]);
    results.push(...attached);
  });

  return results;
};
