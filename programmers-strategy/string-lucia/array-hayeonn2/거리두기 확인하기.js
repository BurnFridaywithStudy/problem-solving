const isKeepingDistance = (place) => {
  let roomInfo = place.map((rooms) => rooms.split(""));

  let queue = [];
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      if (roomInfo[i][j] === "P") {
        queue.push([i, j]);
      }
    }
  }

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1];

  while (queue.length) {
    const [x, y] = queue.shift();

    for (let i = 0; i < 4; i++) {
      let nx = x + dx[i];
      let ny = y + dy[i];

      if (nx < 0 || nx >= 5 || ny < 0 || ny >= 5) continue;
      if (roomInfo[nx][ny] === "X") continue;
      if (roomInfo[nx][ny] === "P") return 0;

      for (let j = 0; j < 4; j++) {
        let aroundNX = nx + dx[j];
        let aroundNY = ny + dy[j];

        if (aroundNX < 0 || aroundNX >= 5 || aroundNY < 0 || aroundNY >= 5)
          continue;
        if (aroundNX === x && aroundNY === y) continue;
        if (roomInfo[aroundNX][aroundNY] === "P") return 0;
      }
    }
  }

  return 1;
};

function solution(places) {
  let keepingDistance = [];
  for (let i = 0; i < 5; i++) {
    keepingDistance.push(isKeepingDistance(places[i]));
  }

  return keepingDistance;
}

/**
 * 풀이
   좌표 문제라서 상하좌우를 이동하면서 계산해주기 위해 dx, dy를 설정했다.
   그리고 queue 배열에 있는 값 만큼 반복하는데 queue 요소를 하나씩 떼와서 좌표를 이용해 비교해준다.
   파티션인지, 빈테이블인지, 응시자인지 판단 후 결과에 따라 옮겨준다.
   빈 테이블일 경우 거리를 움직여 다시 확인해준다. 모두 만족할 때 1을 반환하고 아니면 0을 반환한다.
   이러한 문제를 풀기 위해서 bfs를 알아야되는데 예전에 풀었던 풀이를 참고해서 다시 풀어봐야할 것 같다.
 */
