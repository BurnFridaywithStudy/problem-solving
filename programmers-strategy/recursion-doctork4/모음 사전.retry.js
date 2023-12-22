// const vowel = ["A", "E", "I", "O", "U"]
// let arr = Array(5).fill(' ');
// const answer = [];

// function solution(word) {
//   arr[0] = vowel[0];
//   addWord(0, "");

//   // return answer.indexOf(word);
// }

// function addWord(depth, s) {
//   console.log(arr.join(''));
//   // answer.push(arr.join(''));

//   if (depth >= 5) return;
  
//   for (let i = 0; i < 5; i++){
//     arr[depth] = vowel[i];
//     addWord(depth + 1, s);
//   }

// }
const vowel = ["A", "E", "I", "O", "U"]
const arr = Array(5).fill('');
const answer = [];

function solution(word) {
  dfs(0, '')
  return answer.indexOf(word);
}

function dfs(depth, s) {
  answer.push(s);

  if (depth === 5){
    return;
  }
 
  dfs(depth + 1, s+'A');
  dfs(depth + 1, s+'E');
  dfs(depth + 1, s+'I');
  dfs(depth + 1, s+'O');
  dfs(depth + 1, s+'U');

}
console.log(solution("AAAAE"));