function solution(id_list, report, k) {
  const reportSet = new Set();
  report.forEach(re => {
    reportSet.add(re);
  });
  const info = {};
  const report_cnt_list = {};
  id_list.forEach(id => {
    info[id] = [];
    report_cnt_list[id] = 0;
  });
  reportSet.forEach(r => {
    const [from, to] = r.split(' ');
    ++report_cnt_list[to];
    info[from].push(to);
  });
  const answer = [];
  for (person in info) {
    answer.push((info[person].reduce((cal, cur) => {
      if (report_cnt_list[cur] >= k)
        return cal + 1;
      return cal;
    }, 0)));
  }
  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
console.log(solution(["con", "ryan"], ["ryan con", "ryan con", "ryan con", "ryan con"], 3));
