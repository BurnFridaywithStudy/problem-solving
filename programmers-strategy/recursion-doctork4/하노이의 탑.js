function solution(n) {
  const answer = [];
  hanoi(n, 1, 3, answer);
  return answer;
}

function hanoi (n, curr, to, arr) {
  const other = 6 - curr - to;
  
  if (n === 1) {
    return arr.push([curr, to])
  }
    
  if (n > 1) {
    hanoi(n-1, curr, other, arr);
    hanoi(1, curr, to, arr);
    hanoi(n-1, other, to, arr);
  }
}

/**
 * 1. 부분문제 구조를 찾는 것이 어려웠다. 
 * 
 * base 케이스는 간단했다. 그러나 재귀구조가 되는 ( n => n-1 => ....=> 1) 구조를 알아내는데 오래걸렸다. 
 * n-1 개의 하노이탑이 other에서 to 로 이동하게 된다는 구조를 파악하게 되니 바로 풀 수 있었다. 
 * 
 * 2. 출력 단계가 햇갈렸다. 
 * 출력하는 array가 인자에 포함되어야하는지, push하고나서 array를 return 해야하는지 꼬이기 시작하기 답답했다. 
 * 외부 자료를 참고한 덕에 base 케이스에서만 return 한다는 걸 알고나니, 
 * 하나의 원반을 움직일때만 배열 형태로 return 하는 것을 깨달을 수 있었다. (여러 원반을 움직일 때는 하나의 원반들이 움직인 결과들을 묶어서 return했다는 뜻)
 * 
 */


