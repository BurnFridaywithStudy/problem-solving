function solution(new_id) {
  const after1 = step1(new_id);
  // console.log("after1", after1);
  const after2 = step2(after1);
  // console.log("after2", after2);
  const after3 = step3(after2);
  // console.log("after3", after3);
  const after4 = step4(after3);
  // console.log("after4", after4);
  const after5 = step5(after4);
  // console.log("after5", after5);
  const after6 = step6(after5);
  // console.log("after6", after6);
  const after7 = step7(after6);
  // console.log("after7", after7);
  
  return after7;
}

function step1(id) {
  
  return id.toLowerCase(id);
}

// 2단계 : new_id에서 알파벳 소문자, 숫자, 빼기(-), 밑줄(_), 마침표(.)를 제외한 모든 문자를 제거합니다.
function step2(id) {
  let new_id = "";
  const okStr = "abcdefghijklmnopqrstuvwxyz1234567890-_.";
    
  for (let i = 0; i < id.length; i++) {
    if (okStr.includes(id[i])) {
      new_id += id[i];
    }
  }
    
  return new_id;
}

// const step2inputTest = "...!@bat#*..y.abcdefghijklm";
// console.log(step2(step2inputTest));

// 3단계 : new_id에서 마침표(.)가 2번 이상 연속된 부분을 하나의 마침표(.)로 치환합니다.
function step3(id) {
  const stack = [];

  for (let i = 0; i < id.length; i++) {
    if (stack[stack.length-1] === "." && id[i] === ".") {
      continue;
    }
    stack.push(id[i]);
  }

  return stack.join('');
}

// const step3TestInput = "...bat..y.abcdefghijklm";
// console.log(step3(step3TestInput));

// 4단계 new_id에서 마침표(.)가 처음이나 끝에 위치한다면 제거합니다.
function step4(id) {
  const new_id = id.split('');
  while (new_id[0] === "." || new_id[new_id.length-1] === ".") {
    if (new_id[0] === ".") new_id.shift();
    if (new_id[new_id.length-1] === ".") new_id.pop();
  }

  return new_id.join('');
}

// const step4Input = ".bat.y.abcdefghijklm.";
// console.log(step4(step4Input));

// 5단계 new_id가 빈 문자열이라면, new_id에 "a"를 대입합니다.
function step5(id) {
  if (id === "") return "a";

  return id
}

// 6단계 new_id의 길이가 16자 이상이면, new_id의 첫 15개의 문자를 제외한 나머지 문자들을 모두 제거합니다.
// 만약 제거 후 마침표(.)가 new_id의 끝에 위치한다면 끝에 위치한 마침표(.) 문자를 제거합니다.
function step6(id) {
  if (id.length > 15) {
    const arr = id.split('');
    arr.splice(15, );
    while (arr[arr.length -1] === ".") {
      arr.pop();
    }

    return arr.join('');
  }

  return id;
}

// console.log(step6("abcdefghijklmn.p"));

// 7단계 new_id의 길이가 2자 이하라면, new_id의 마지막 문자를 new_id의 길이가 3이 될 때까지 반복해서 끝에 붙입니다.
function step7(id) {
  while (id.length < 3) {
    id += id[id.length-1]
  }
  
  return id
}

const input1 = "...!@BaT#*..y.abcdefghijklm";
const input2 = "abcdefghijklmn.p";

console.log(solution(input1));
console.log(solution(input2));