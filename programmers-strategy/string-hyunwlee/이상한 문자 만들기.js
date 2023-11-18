export default function solution(s) {
  const smallA = 'a'.charCodeAt(0);
  const smallZ = 'z'.charCodeAt(0);
  const largeA = 'A'.charCodeAt(0);
  const largeZ = 'Z'.charCodeAt(0);
  const diffCnt = largeA - smallA;
  const arr = s.split(' ').map(str =>
    str.split('').map((ch, idx) => {
      const asciiCh = ch.charCodeAt(0);
      if (idx % 2 === 0) {
        if (asciiCh >= smallA && asciiCh <= smallZ)
          return String.fromCharCode(asciiCh + diffCnt);
        if (asciiCh >= largeA && asciiCh <= largeZ)
          return ch;
      } else {
        if (asciiCh >= smallA && asciiCh <= smallZ)
          return ch;
        if (asciiCh >= largeA && asciiCh <= largeZ)
          return String.fromCharCode(asciiCh - diffCnt);
      }
      return ch;
    }).join('')
  );
  return arr.join(' ');
}
