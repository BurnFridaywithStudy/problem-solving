function solution(id_list, report, k) {
  const count = Array(id_list.length).fill(0);
  const map = new Map();
  
  // 신고한 사람들을 key로, 신고당한 사람들을 value로 하는 map을 만든다. 
  // 여러명을 신고할 수 있고, 같은 사람을 여러번 신고할 수 있으므로 set으로 저장한다.
  report.forEach(el => {
      const [user, reported] = el.split(' ');
      
      if (!map.get(user)) { 
          map.set(user, new Set());
      }
      map.get(user).add(reported);
  });
  // console.log(map);
  
  // 신고당한 횟수를 count 배열에 저장한다.
  for ([key, value] of map) {
      for (el of value) {
          // console.log(el, id_list.indexOf(el))
          count[id_list.indexOf(el)] += 1;
      }
  }
  // console.log(count);
  // count 배열을 토대로 k번 이상 신고당한 사람들을 찾아내 banned 배열에 저장한다.
  const banned = [];
  count.forEach((v, i) => {
      if (v >= k) {
          banned.push(id_list[i]);
      }
  });
  // console.log(banned);
  
  // mail로 받을 횟수를 저장하는 배열을 만든다.
  const mail = Array(id_list.length).fill(0);
  // 신고한 set에 banned 리스트에 이름이 있는지 확인하고, 있다면 mail 배열에 1을 더해준다. 
  for ([key, value] of map) {
      for (el of value) {
          if (banned.includes(el)) {
              mail[id_list.indexOf(key)] += 1;
          }
      }
  }
  
  return mail;
}