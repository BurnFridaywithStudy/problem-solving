let firstCase = 0;
let secondCase = 0;
const recurse = function(number, map) {
  ++firstCase;
  if (!map.has(number)) {
    map.set(number, number + 1);
    return number;
  }
  const nextRoom = map.get(number);
  const emptyRoom = recurse(nextRoom, map);
  map.set(number, emptyRoom);
  return emptyRoom;
}

function solution(k, room_number) {
  const arr = Array(room_number.length).fill(0);
  const map = new Map();
  room_number.forEach((number, idx) => {
    arr[idx] = recurse(number, map);
  });
  return arr;
}

// ----------------------------------------------------------------
//                              FAIL
// ----------------------------------------------------------------

/**
 *  union연산이 없으므로
 *  필요한 room_number[depth]를 찾기 위한 연산을 재사용 없이 반복연산 한 것에 문제가 있다. 
 */
function failedSolution(k, room_number) {
  const safe_copy_room_number = [...room_number];
  const check = Array(safe_copy_room_number.length + 1).fill(false);
  const arr = Array(safe_copy_room_number.length).fill(0);
  failedRecurse(0, arr, check, safe_copy_room_number);
  return arr;
}

function failedRecurse(depth, arr, check, room_number) {
  ++secondCase;
  if (depth === room_number.length) {
    return;
  }
  if (!check[room_number[depth]]) {
    check[room_number[depth]] = true;
    arr[depth] = room_number[depth];
    failedRecurse(depth + 1, arr, check, room_number);
  }
  else {
    room_number[depth] = room_number[depth] + 1;
    failedRecurse(depth, arr, check, room_number);
  }
}

let input1 = 5;
let input2 = [1, 3, 4, 1, 3, 1];
/*
let input3 = [ // 122 - stack overflow
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
  1, 1
];
*/
console.log(solution(input1, input2));
console.log(failedSolution(input1, input2))
