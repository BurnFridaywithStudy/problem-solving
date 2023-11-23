function solution(s) {
  const words = s.toLowerCase().split(" ");

  return words
    .map((el) => {
      return el
        .split("")
        .map((item, idx) => {
          return idx % 2 === 0 ? item.toUpperCase() : item;
        })
        .join("");
    })
    .join(" ");
}

/** 풀이
 * 1. 주어진 문자열에 대문자도 올 수 있다는 가정하에 모두 소문자로 변환 후 공백을 기준으로 자름
 * 2. 변환한 단어를 map을 통해 요소를 하나씩 반복
 * 3. 그 요소를 다시 한개씩 쪼개주고
 * 4. 쪼갠 알파벳의 인덱스값이 짝수이면 대문자로 변환, 홀수이면 그대로 놔둔다(소문자)
 * 5. 쪼개고 변환한 요소들을 다시 join을 이용해 합치고
 * 6. 합친 문자들을 다시 공백을 넣고 합쳐 하나의 문자열로 완성시킨다.
 *
 * 처음에는 다 변수에 저장시켰는데 체이닝을 이용해서 하나로 연결시켰다.
 * words 또한 변수없이 그냥 엮어서 한번에 써도 될 것 같다.
 */
