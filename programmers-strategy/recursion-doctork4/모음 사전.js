
const letter = ['A', 'E', 'I', 'O', 'U'];
let dict = [];

function solution(word) {

  let new_word = "";
  for (alphabet of letter) {
    new_word = alphabet;
    dict.push(addWord(new_word, alphabet, 0)); // () => string
  }
  return dict
}

function addWord(beadded, addletter, limit) {
  if (limit === 3) {
    return beadded + addletter;
  }

  for (alphabet of letter) {
    dict.push(addWord(beadded+addletter, alphabet, limit+1));
  }
}

const input1 = "AAAAE";
console.log(solution(input1));

/**
 * 1. 어려웠던 부분 
 * - 결과의 재귀가 아니라 행동의 재귀
 * - 
 */