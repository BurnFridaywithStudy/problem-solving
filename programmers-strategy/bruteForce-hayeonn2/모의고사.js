function solution(answers) {
  // 1. 결과값을 담을 배열
  const result = [];

  // 수포자 1, 2, 3 이 찍는 방식을 반복되는 것을 기점으로 잘라 배열에 넣기
  const firstPerson = [1, 2, 3, 4, 5];
  const secondPerson = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdPerson = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // answers와 비교했을 때 얼마나 맞는지 score를 계산하기 위한 배열
  const score = [0, 0, 0];

  // 반복문을 통해 각 수포자들의 score를 계산
  // 이 때 [i % person.length]를 해준 이유는 answers의 길이는 랜덤이고
  // 수포자들의 찍는 방식은 일정 간격으로 반복되기 때문에 i를 찍는 방식의 길이로 나눠준다.
  // 예시) answers = [1,2,3,4,5,6,7] 일 때, i가 길이를 초과할때 (즉, 5보다 큰 6일 때)
  // 6 % 5 는 1 이기 때문에 person[1]이 된다.
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === firstPerson[i % firstPerson.length]) score[0]++;
    if (answers[i] === secondPerson[i % secondPerson.length]) score[1]++;
    if (answers[i] === thirdPerson[i % thirdPerson.length]) score[2]++;
  }

  // 최대 점수를 구하기
  const maxScore = Math.max(...score);

  // 반복문을 통해 최대 점수가 score의 인덱스값과 같을 때 결과값 배열에 1을 더해 넣기
  // 이때, 1을 더하는 이유는 수포자가 1번부터 시작하기 때문
  for (let i = 0; i < score.length; i++) {
    if (maxScore === score[i]) {
      result.push(i + 1);
    }
  }

  return result;
}
