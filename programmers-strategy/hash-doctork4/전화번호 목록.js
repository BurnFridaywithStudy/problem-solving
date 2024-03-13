function solution(phone_book) {
  const obj = makeHash(phone_book);
  for (let num of phone_book) {
    let str = "";
    for (let i = 0; i < num.length; i++) {
      str += num[i];
      if (obj[str] && num !== str) return false;
    }
  }
  
  return true;
}

function makeHash(arr) {
  const obj = {};
  arr.forEach((num) => {
    if (!obj[num]) obj[num] = Symbol();
  });
  return obj;
}