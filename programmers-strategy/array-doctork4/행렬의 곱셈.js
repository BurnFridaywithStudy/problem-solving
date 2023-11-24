function solution(arr1, arr2) {
  const arr1Col = arr1[0].length;
  const arr2Col = arr2[0].length;
  const arr1Row = arr1.length;
  const answerArr = makeEmptyArray(arr1Row, arr2Col);
  
  for (let i = 0; i < arr1Row; i++) {
    console.log('i', i);
    for (let j = 0; j < arr2Col; j++) {
    	console.log('j', j);
			let oneBlock = 0;
      for (let k = 0; k < arr1Col; k++) {
        console.log('k', k);
        const result = arr1[i][k] * arr2[k][j];
				oneBlock += result
        console.log('result', result);
      }
			console.log('oneBlock', oneBlock);
			answerArr[i][j] = oneBlock;
    }
    console.log('---')
  }
  
	console.log(answerArr);
  return answerArr;
}

function makeEmptyArray(arr1Row, arr2Col) {
    return Array.from(Array(arr1Row), () => Array(arr2Col).fill(0))
}

const arr1 = [[1, 4], [3, 2], [4, 1]];
const arr2 = [[3, 3], [3, 3]];
solution(arr1, arr2);


/**
 * 소감
 * 
 * 사실 개념은 쉬웠다. 
 * 그러나 3중 for문을 돌려야하는데 그 순서가 굉장히 햇갈렸다. 
 * 
 * 왕도는 없는 듯하다. 
 * console.log 잘 찍어보면서 계속해서 검증하는 것의 중요성을 느꼈다. 
 * 
 * 빈 2차원 배열 만드는 것은 기계적으로 나오도록 연습해야겠다.
 * 
 */