function solution(s) {
  s = s.split('');
  // console.log(s);
  let canDel = true;
  
  while(canDel) {
    inner : for (let i = 0; i < s.length-1; i++){
      // console.log(s[i], s[i+1]);
      if (s[i] === s[i+1]) {
        s.splice(i, 2);
        console.log(s);
        break inner;
      }
    }
    if (s.length === 0) break;

    canDel = hasDouble(s);
  }
  
  return s.length === 0 ? 1 : 0;
}

function hasDouble(array) {
  for (let i = 0; i < array.length-1; i++) {
    if (array[i] === array[i+1]) {
      return true;
    }
  }
  return false;
}

const input1 = "baabaa"
const input2 = "cdcd"
console.log(solution(input1));
console.log(solution(input2));