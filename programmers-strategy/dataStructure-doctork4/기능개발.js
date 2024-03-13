function solution(progresses, speeds) {
  const queue = [];
  let tasks = [...progresses];

  while (tasks.length > 0) {
      let done = 0;
      // 맨앞 작업을 완료하기 위해 필요한 일자 계산
      const xDay = Math.ceil((100 - tasks[0]) / speeds[0]);
      
      // xDay가 경과 후의 전체 작업량 확인
      tasks = tasks.map((v, i) => v + speeds[i] * xDay);
      console.log(tasks);
      
      // 앞에서부터 100 이상의 작업량들을 배포하고 배포된 작업 수만큼 done의 숫자를 늘려줌
      while (tasks[0] >= 100) {
          tasks.shift();
          speeds.shift();
          done += 1;
      }
      // done을 queue에 추가
      queue.push(done);
  }
  return queue   
}