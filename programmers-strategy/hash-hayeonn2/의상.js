function solution(clothes) {
  // 맵 생성
  const map = new Map();
  let answer = 1;

  // clothes 배열을 [name, type] 형태로 받아와서
  // 만약 map에 type이 있으면 그 값에 +1을 해준다. (카운팅)
  // map에 타입이 없다면 (type, 1) 형태로 넣어준다.
  for (const [name, type] of clothes) {
    if (map.get(type)) map.set(type, map.get(type) + 1);
    else map.set(type, 1);
  }

  // map을 [key, value] 형태로 받고 answer에 value에 +1해서 곱해준다.
  // 이유는, 모자가 2종류, 상의 1종류 일때 (모자1, 모자2, 모자x) * (상의1, 상의x) = 6 인데
  // 최소 1개 의상은 입어야 하므로 (모자x, 상의x)의 경우를 빼줘야 한다.

  for (const [key, value] of map) {
    answer *= value + 1;
  }

  // 마지막 아무것도 안입는 케이스를 결과값에서 빼준 후 리턴
  return answer - 1;
}

//     let answer = 1;
//     const clothesType = {};

//     for(let i = 0; i < clothes.length; i++){
//         clothesType[clothes[i][1]] = (clothesType[clothes[i][1]] || 1)+1;
//     }

//     for(let type in clothesType){
//         answer *= clothesType[type];
//     }

//     return answer-1;
