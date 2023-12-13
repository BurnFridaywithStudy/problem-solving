function solution(brown, yellow) {
  // 갈색 + 노란색 타일의 합
  const sum = brown + yellow;

  // 반복문을 통해 답을 구함
  // 1. 노란색 타일이 나오기 위해서는 가로, 세로가 3이상이므로 i를 3부터 시작
  // 2. 합을 i로 나눠서 가로, 세로를 구함
  // 3. 만약 (가로-2)*(세로-2)가 노란색 타일이라면 [가로, 세로] 리턴
  for (let i = 3; i <= sum; i++) {
    const WIDTH = sum / i;
    const HEIGHT = i;

    if ((WIDTH - 2) * (HEIGHT - 2) === yellow) {
      return [WIDTH, HEIGHT];
    }
  }
}

/**
 * 풀이 생각
 * 규칙을 찾으려고 나열해보니 갈색+노란색 타일의 합이 가로 * 세로 임을 깨달음
 * 그래서 가로 변수를 합에서 i로 나눠줌
 * 처음에 노란색 타일의 너비를 구하는 규칙을 못찾았는데 가로-2, 세로-2 후 곱하면 된다는 것을 알게되었다.
 */
