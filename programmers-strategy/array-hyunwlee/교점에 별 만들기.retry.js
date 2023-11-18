export default function solution(line) {
  const positions = [];
  let minX = Infinity;
  let minY = Infinity;
  let maxX = -Infinity;
  let maxY = -Infinity;
  line.forEach(([a, b, e], idx) => {
    line.forEach(([c, d, f], jdx) => {
      if (idx < jdx) {
        let val = a * d - b * c;
        if (val !== 0) { // 두 직선은 평행 또는 일치합니다.
          let x = b * f - e * d;
          let y = e * c - a * f;
          if (x % val === 0 && y % val === 0) { // 정수가 아니면 버립니다.
            x /= val;
            y /= val;
            positions.push({ x, y });
            minX = Math.min(minX, x);
            minY = Math.min(minY, y);
            maxX = Math.max(maxX, x);
            maxY = Math.max(maxY, y);
          }
        }
      }
    })
  })
  const map = Array.from(Array(maxY - minY + 1), () => Array(maxX - minX + 1).fill('.'));
  positions.forEach(({ x, y }) => {
    map[maxY - y][x - minX] = '*';
  });
  return map.map(item => item.join(''));
}

/**
  * 두 직선의 방정식의 교점 구하기 => 최소공배수를 찾자
  * ex) x = 1, y = 1일 경우들을 생각하면, 예외처리가 많아짐. 땡!!
  * 문제에서 공식을 연계해서 풀어야만 했던 문제.
  */

