function solution(skill, skill_trees) {
  const skillArr = skill.split('');
  const map = new Map();
  skillArr.forEach((sk, idx) => {
    map.set(sk, idx);
  });
  let answer = 0;
  skill_trees.forEach(s => {
    const filteredArr = s.split('').filter(item => (skillArr.includes(item)));
    let isFit = true;
    for (let i = 0; i < filteredArr.length; ++i) {
      if (skillArr[i] !== filteredArr[i])
        isFit = false;
    }
    if (isFit) ++answer;
  });
  return answer;
}

console.log(solution("CBD", ["BACDE", "CBADF", "AECB", "BDA"]));
