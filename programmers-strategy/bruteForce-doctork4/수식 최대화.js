function solution(expression) {
  const results = [];
  const checkMark = makeAMarkArr(expression);

  if (checkMark.length === 2) {
    const combination = [
      [checkMark[0], checkMark[1]],
      [checkMark[1], checkMark[0]],
    ];
    for (let k = 0; k < combination.length; k++) {
      let mark = combination[k];
      const div1 = expression.split(mark[0]);
      // console.log(div1);
      const div2 = [];
      div1.forEach(piece => div2.push(piece.split(mark[1])));
      // console.log(div2, 1);
      div2.forEach((piece, idx) => {
        if (piece.length === 1) div2[idx] = piece[0];
        if (piece.length !== 1) {
          div2[idx] = makeAResult(mark[1], Number(piece[0]), Number(piece[1]));
        }
      });
  
      let target = div2.shift();
      // 2인 이상인 경우
      while (div2.length > 0) {
        const untarget = div2.shift();
        target = makeAResult(mark[0], Number(target), Number(untarget));
      }
      results.push(Math.abs(target));
    }

    return Math.max(...results);
  }

  if (checkMark.length === 3) {
    const combination = [
      ["*", "+", "-"],
      ["*", "-", "+"],
      ["+", "*", "-"],
      ["+", "-", "*"],
      ["-", "+", "*"],
      ["-", "*", "+"],
    ];
    
    for (let k = 0; k < combination.length; k++) {
      let mark = combination[k];
      const div1 = expression.split(mark[0]);
      const div2 = [];
      div1.forEach(piece => div2.push(piece.split(mark[1])));

      div2.forEach(piece => {
        for (let i = 0; i < piece.length; i++) {
          if (piece[i].includes(mark[2])) {
            piece[i] = piece[i].split(mark[2]);
            piece[i] = makeAResult(mark[2], Number(piece[i][0]), Number(piece[i][1]));
          }  
        }
      })
      
      div2.forEach((piece, idx) => {
        if (piece.length === 1) div2[idx] = piece[0];
        
        if (piece.length !== 1) {
          div2[idx] = makeAResult(mark[1], Number(piece[0]), Number(piece[1]));
        }
      });

      // 1인 경우
      let target = div2.shift();
      // 2인 이상인 경우
      while (div2.length > 0) {
        const untarget = div2.shift()
        target = makeAResult(mark[0], Number(target), Number(untarget));
      }
      results.push(Math.abs(target));
    }
    
    return Math.max(...results);
  }
}

function makeAResult(mark, x, y) {
  if (mark === "*") return x * y
  if (mark === "+") return x + y
  if (mark === "-") return x - y
}

function makeAMarkArr (expression) {
  const mark = [];
  if (expression.includes("*")) mark.push("*");
  if (expression.includes("-")) mark.push("-");
  if (expression.includes("+")) mark.push("+");

  return mark;
}

const input1 = "100-200*300-500+20";
const input2 = "50*6-3*2";

console.log(solution(input1));
console.log(solution(input2));

/**
 * 1.합계: 20.0 / 100.0
 */

