function solution(places) {
  const answer = [];
  Array.from(places, (oneRoom) => {
      const result = checkMT(oneRoom);
      answer.push(result);
    } 
  );
  return answer;
};

function checkMT(oneRoom) {
  for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
      let target = oneRoom[i][j];
      if (target === "P") {
        const dx = i
        const dy = j
        // 우측 검사
        const righkOne = dy + 1 < 5;
        const rightTwo = dy + 2 < 5;
        if (righkOne && oneRoom[i][dy + 1] === "P") return 0;
        if (rightTwo) {
          if (oneRoom[i][dy + 2] === "P"){
            if (oneRoom[i][dy + 1] !== "X") return 0;
          }
        }

        // 하단 검사
        const downone = dx + 1 < 5; 
        const downtwo = dx + 2 < 5;

        if (downone) {
          if (oneRoom[dx + 1][j] === "P") return 0;
        }
        if (downtwo && oneRoom[dx + 2][j] === "P" && oneRoom[dx+1][j] !== "X") return 0;

        // 우하단 검사
        const rightDown = dx + 1 < 5 && dy + 1 < 5;
        if (rightDown && oneRoom[dx+1][dy+1] === "P"){
          if (oneRoom[dx+1][dy] !== "X" || oneRoom[dx][dy+1] !== "X") return 0;
        }

        // 좌하단 검사
        const leftDown = dx + 1 < 5 && dy - 1 >= 0;
        if (leftDown && oneRoom[dx+1][dy-1] === "P") {
          if (oneRoom[dx][dy -1] !== "X" || oneRoom[dx+1][dy] !== "X") return 0;
        }
      }
    }
  }
  return 1;
}

const input = [["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"], ["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"], ["PXOPX", "OXOXP", "OXPOX", "OXXOP", "PXPOX"], ["OOOXX", "XOOOX", "OOOXX", "OXOOX", "OOOOO"], ["PXPXP", "XPXPX", "PXPXP", "XPXPX", "PXPXP"]];
// console.log(checkMT(["POOOP", "OXXOX", "OPXPX", "OOXOX", "POXXP"]));
// console.log(checkMT(["POOPX", "OXPXP", "PXXXO", "OXXXO", "OOOPP"]));
console.log(solution(input));

// 맨해튼 거리를 준수하는지 검사하는 로직을 places에서 forEach로 돌린다. 

// 맨해튼 거리를 준수하지 않는 경우
// 1. P 사이간 거리가 2 이하인 경우

// P를 발견하면 우,하,우하단, 좌하단 방향으로 다른 P를 검사한다.
// 좌단, 상단의 경우는 이미 앞선 검사에서 이뤄졌기 때문

// 우측 검사
// 예외 - dy가 1이나 2일때 인덱스를 벗어나는 경우 (5이상인 경우)

// 하단 검사 
// 예외 - dx가 1이나 2일 때 인덱스를 벗어나는 경우 (5이상인 경우)

// 우하단 검사 
// 예외 - dx가 1이고 dy가 1일 때 둘중 하나라도 5이상인 경우

// 좌하단 검사
// 예외 - dx가 1이고 dy가 -1일 때 dx가 5 이상이거나 dy가 음수인 경우


// 2. 2 이내에 다른 P가 있다면, 
// => 사이에 칸막이 여부 검사

// 칸막이 여부 검사 로직
// if ( === '')