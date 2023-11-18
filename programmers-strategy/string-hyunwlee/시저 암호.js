export default function solution(s, n) {
  const smallA = 'a'.charCodeAt(0);
  const smallZ = 'z'.charCodeAt(0);
  const largeA = 'A'.charCodeAt(0);
  const largeZ = 'Z'.charCodeAt(0);
  const resultArr = s.split('').map(ch => {
    const asciiCh = ch.charCodeAt(0);
    if (asciiCh >= smallA && asciiCh <= smallZ) {
      let temp = asciiCh;
      let i = -1;
      while (++i < n) {
        if (temp === smallZ) {
          temp = smallA;
          continue;
        }
        temp++;
      }
      return String.fromCharCode(temp);
    }
    if (asciiCh >= largeA && asciiCh <= largeZ) {
      let temp = asciiCh;
      let i = -1;
      while (++i < n) {
        if (temp === largeZ) {
          temp = largeA;
          continue;
        }
        temp += 1;
      }
      return String.fromCharCode(temp);
    }
    return ch;
  })
  return resultArr.join('');
}
