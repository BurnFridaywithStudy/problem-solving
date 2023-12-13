function solution(n) {
    const answer = [];
    
    // 재귀적으로 원판 옮기기 (원판수 n, 시작, 끝, 중간)
    function move(n, first, third, second) {
        
        //기저조건(멈춤조건), 원판이 1개만 남았을때(가장 작은 원판) 시작 -> 마지막 기둥으로
        if (n === 1) {
            // 시작 기둥 -> 끝 기둥으로 원판 옮김
            answer.push([first, third]);
            
        } else {
            //(첫번째 처리)
            // 원판이 2개 이상일 때는 재귀
            // n-1 개를 시작 -> 중간 기둥으로
            // 가장 큰 원판은 첫번째에 존재
            // move 함수의 매개변수 대입 순서를 바꿔서 호출함으로써 원판 옮기는 기둥 순서 정의
            move(n - 1, first, second, third);
            
            //(두번째 처리)원판이 1개만 남았을때(가장 큰 원판) 시작 -> 마지막 기둥으로
            answer.push([first, third]);
            
            //(마지막 처리) n-1 개 원판 중간 기둥 -> 끝 기둥
            move(n - 1, second, third, first);
        }
    }
    
    // 원판 이동 시작
    move(n, 1, 3, 2);    
    return answer;
}

//원판을 옮기는 과정
/*
0. 가장 큰 원판을 제외
1.나머지 원판 -> 중간 기둥으로
2. 가장 큰 원판을 마지막 기둥으로
3. 중간 기둥에 있는 원판을 마지막으로

재귀적 반복
*/
