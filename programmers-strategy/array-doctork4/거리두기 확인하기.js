function solution(places) {
  var answer = [];
  return answer;
}

// 맨해튼 거리를 준수하는지 검사하는 로직을 places에서 forEach로 돌린다. 

// 맨해튼 거리를 준수하지 않는 경우
// 1. P 사이간 거리가 2 이하인 경우
// P를 발견하면 우,하,우하단, 좌하단 방향으로 다른 P를 검사한다. 
// 좌단, 상단의 경우는 이미 앞선 검사에서 이뤄졌기 때문
// 2 이내에 다른 P가 있다면, 
// => 사이에 칸막이 여부 검사

// 칸막이 여부 검사 로직
// 