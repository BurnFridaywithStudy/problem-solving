export default function solution(rows, columns, queries) {
  const arrays = Array.from(Array(rows), () => Array(columns).fill(0));
  let val = 0;
  const maps = arrays.map((line) =>
    line.map(() => ++val)
  )
  const ans = [];
  queries.forEach(([x1, y1, x2, y2]) => {
    const startX = x1 - 1;
    const startY = y1 - 1;
    const endX = x2 - 1;
    const endY = y2 - 1;
    //
    let min = maps[endX][startY];
    const first = maps[startX][startY];
    min = Math.min(min, first);
    let i = startX;
    for (; i < endX; ++i) {
      maps[i][startY] = maps[i + 1][startY];
      min = Math.min(min, maps[i + 1][startY]);
    }
    //
    const second = maps[startX][endY];
    min = Math.min(min, second);
    let j = endY;
    for (; j > startY; --j) {
      maps[startX][j] = maps[startX][j - 1];
      min = Math.min(min, maps[startX][j - 1]);
    }
    maps[startX][j + 1] = first;
    //
    const third = maps[endX][endY];
    min = Math.min(min, third);
    let k = endX;
    for (; k > startX; --k) {
      maps[k][endY] = maps[k - 1][endY];
      min = Math.min(min, maps[k - 1][endY]);
    }
    maps[k + 1][endY] = second;
    //
    let l = startY;
    for (; l < endY; ++l) {
      maps[endX][l] = maps[endX][l + 1];
      min = Math.min(min, maps[endX][l + 1]);
    }
    maps[endX][l - 1] = third;
    ans.push(min);
  })
  return ans;
}

function print(maps, rows, columns) {
  for (let x = 0; x < rows; ++x) {
    let s = '';
    for (let y = 0; y < columns; ++y) {
      s += maps[x][y] + '\\';
    }
    console.log('line: ', s);
  }
}
