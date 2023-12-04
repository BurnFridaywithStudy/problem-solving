export default function solution(s) {
  return ((s.length === 4 || s.length === 6) && isDigit(s));
}

function isDigit(s) {
  const asciiZero = '0'.charCodeAt(0);
  const asciiNine = '9'.charCodeAt(0);
  let result = true;
  s.split('').forEach(ch => {
    const asciiCh = ch.charCodeAt(0);
    if (asciiCh < asciiZero || asciiCh > asciiNine) {
      result = false;
    }
  })
  return result;
}
