function solution(numbers, hand) {
  const map = new Map();
  map.set('1', { x: 0, y: 0 });
  map.set('2', { x: 0, y: 1 });
  map.set('3', { x: 0, y: 2 });
  map.set('4', { x: 1, y: 0 });
  map.set('5', { x: 1, y: 1 });
  map.set('6', { x: 1, y: 2 });
  map.set('7', { x: 2, y: 0 });
  map.set('8', { x: 2, y: 1 });
  map.set('9', { x: 2, y: 2 });
  map.set('*', { x: 3, y: 0 });
  map.set('0', { x: 3, y: 1 });
  map.set('#', { x: 3, y: 2 });
  let lPos = '*';
  let rPos = '#';
  const left = [1, 4, 7];
  const right = [3, 6, 9];
  let ans = '';
  numbers.forEach((number) => {
    if (left.includes(number)) {
      ans += 'L';
      lPos = String(number);
    } else if (right.includes(number)) {
      ans += 'R';
      rPos = String(number);
    } else {
      const target = map.get(String(number));
      const left = getDistance(target, map.get(lPos));
      const right = getDistance(target, map.get(rPos));
      if (left === right) {
        if (hand === 'left') {
          ans += 'L';
          lPos = String(number);
        } else {
          ans += 'R';
          rPos = String(number);
        }
      } else if (left < right) {
        ans += 'L';
        lPos = String(number);
      } else {
        ans += 'R';
        rPos = String(number);
      }
    }
  });
  return ans;
}

function getDistance(first, second) {
  return Math.abs(first.x - second.x) + Math.abs(first.y - second.y);
}

console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], 'right'));
console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], 'left'));
console.log(solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0], 'right'));
console.log(solution([0, 0], 'right'));
