export default function solution(new_id) {
  let s = '';
  new_id.split('').forEach((ch, idx) => {
    // step 1.
    if (isLowerCase(ch) || isUpperCase(ch))
      ch = ch.toLowerCase();
    // step 2.
    if (
      isLowerCase(ch) ||
      isDigit(ch) ||
      ch === '-' ||
      ch === '_' ||
      ch === '.') {
      // step 3.
      if (idx !== 0 && s[s.length - 1] === '.' && ch === '.') {
        s = s.substring(0, s.length - 1);
      }
      s += ch;
    }
  })
  // step 4.
  if (s.length > 0 && s[0] === '.')
    s = s.substring(1, s.length);
  if (s.length > 0 && s[s.length - 1] === '.')
    s = s.substring(0, s.length - 1);
  // step 5.
  if (s === '')
    s = 'a';
  // step 6.
  if (s.length >= 16) {
    s = s.substring(0, 15);
    if (s[s.length - 1] === '.')
      s = s.substring(0, s.length - 1);
  }
  // step 7.
  if (s.length <= 2) {
    while (s.length < 3)
      s += s[s.length - 1];
  }
  return s;
}

function isUpperCase(ch) {
  const asciiUpperA = 'A'.charCodeAt(0);
  const asciiUpperZ = 'Z'.charCodeAt(0);
  const asciiCh = ch.charCodeAt(0);
  if (asciiCh >= asciiUpperA && asciiCh <= asciiUpperZ)
    return true;
  return false;
}

function isLowerCase(ch) {
  const asciiLowerA = 'a'.charCodeAt(0);
  const asciiLowerZ = 'z'.charCodeAt(0);
  const asciiCh = ch.charCodeAt(0);
  if (asciiCh >= asciiLowerA && asciiCh <= asciiLowerZ)
    return true;
  return false;
}

function isDigit(ch) {
  const asciiZero = '0'.charCodeAt(0);
  const asciiNine = '9'.charCodeAt(0);
  const asciiCh = ch.charCodeAt(0);
  if (asciiCh >= asciiZero && asciiCh <= asciiNine)
    return true;
  return false;
}
