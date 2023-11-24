function solution(s, n) {
  const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerCase = "abcdefghijklmnopqrstuvwxyz";
  let result = "";

  for (let i = 0; i < s.length; i++) {
    let alphabet = s[i];

    if (alphabet === " ") {
      result += " ";

      continue;
    }

    // 대소문자 구분
    const caseDivision = upperCase.includes(alphabet) ? upperCase : lowerCase;

    // 알파벳의 인덱스값 저장
    let index = caseDivision.indexOf(alphabet) + n;

    // 인덱스값이 대소문자 구분 문자열 보다 길 때의 조건
    if (index >= caseDivision.length) {
      index -= caseDivision.length;
    }

    result += caseDivision[index];
  }

  return result;
}

/** 풀이
 * 1. 아스키코드를 사용하지 않고 푸는 방법이 궁금했다. 매번 찾아볼 수 없기 때문에 먼저 대소문자 구분을 위해 upperCase, lowerCase를 나눠준다.
 * 2. 반복문을 돌면서 주어진 문자에 대한 인덱스 값을 알파벳 변수에 담아주고, 공백을 만나면 결과값에 공백을 추가해주되, 밑의 코드들을 진행시키지 않기 위해 continue를 사용해준다.
 *    - 여기서 continue를 사용하지 않을시 공백문자는 -1의 값을 띠며 n이 4일 때 index 변수에서 3이 되어 불필요한 값이 붙게 된다.
 * 3. 반복문을 빠져나온 후 case를 구분해주기 위해 해당하는 알파벳에 대한 대소문자를 구분해주고 indexOf를 사용해 알파벳의 인덱스 위치를 알아내고 주어진 n을 더한 값을 변수에 저장한다.
 * 4. 만약, 가장 끝의 문자인 z일 때 맨 앞으로 이동해야 하므로 인덱스 값에서 문자열의 총 길이를 빼준다.
 * 5. 마지막으로, 해당 문자열의 인덱스 값을 결과값에 저장해주면 된다.
 */

// 아스키코드로 풀었을 때
//     let result = "";

//     for(let i = 0; i < s.length; i++){
//         let sCode = s.charCodeAt(i);

//         if(sCode >= 65 && sCode <= 90){
//             sCode += n;

//             if(sCode > 90) sCode -= 26;
//         }
//         else if(sCode >= 97 && sCode <= 122){
//             sCode += n;

//             if(sCode > 122) sCode -= 26;
//         }
//         const sString = String.fromCharCode(sCode);
//         result += sString;
//     }
//     return result;
