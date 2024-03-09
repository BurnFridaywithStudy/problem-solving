function solution(number, k) {
  let count = 0;
  
  while (count !== k) {
      const arr = [];
      for (let i = 0; i < number.length; i++) {
          // i번째 숫자를 뺀 결과
          const right = number.slice(0, i) + number.slice(i+1, )
          arr.push(Number(right));
          // console.log(arr);
      }
      const maxValue = Math.max(...arr);
      number = String(arr[arr.indexOf(maxValue)]);
      // console.log('number', number);

      count += 1;
  }
  
  return number;
}

console.log(solution("1924", 2)); // 94

// 길이가 n인 숫자에서 k개를 뺀 개수

// 가장 크려면 큰 수가 맨앞에 오게끔 맨앞에서부터 작은수들을 빼주어야함
// "1924" 2개
// 앞에서 1을 만났다. 
// 1을 뺐을 때의 숫자와 다른것 하나를 뺏을 때의 숫자들을 비교하여 하나라도 큰게있다면 빼지않는다. 그렇지 않다면 뺀다.
// 924 vs 124, 194, 192 

// 맨앞에서 9를 만났다.
// 24 vs 94, 92
// 둘다 크다. 빼지 않는다.

// 두번째에서 2를 빼본다.
// 94 vs 92
// 2를 빼는 게 더 큰 결과를 만든다. 그래서 2를 뺀다.

// 결과적으로 1과 2를 뺀 94를 만들어낸다. 


// 9124라고 하자
// 9를 빼본 것과 나머지를 비교해본다.
// 124 vs 924, 914, 912

// 넘어가서 두번째인 1을 빼본다.
// 924 vs 
