function solution(n, lost, reserve) {
  // 여벌 체육복을 가져온 학생이 도난당한 경우
  const realLost = lost.filter(v => !reserve.includes(v)).sort((a, b) => a - b);
  const realReserve = reserve.filter(v => !lost.includes(v)).sort((a, b) => a - b);
  
  // 자기 체육복을 입을 수 있는 학생 수
  let answer = n - realLost.length;
  
  for (borrower of realLost) {
      if (realReserve.includes(borrower - 1)) {
          realReserve.splice(realReserve.indexOf(borrower - 1), 1);
          answer += 1;
          continue;
      }
      
      if (realReserve.includes(borrower + 1)) {
          realReserve.splice(realReserve.indexOf(borrower + 1), 1);
          answer += 1;
      }
  }
  
  return answer;
}

/**
lost 요소를 돌면서
lost의 앞번호, 뒷번호가 reserve에 있는지 확인
있다면 그 번호를 reverse에서 방출

전체 - lost숫자 + 방출한 숫자 
여벌의 체육복을 가져온 학생이 잃어버린 경우를 고려하지 않았더니
=> test case : 3, 5, 7, 12, 24 통과 실패 ㅠ

*/