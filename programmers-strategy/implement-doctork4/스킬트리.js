function solution(skill, skill_trees) {
  let answer = 0;
  
  for (let i = 0; i < skill_trees.length; i++) {
      const arr = [];
      for (let j = 0; j < skill_trees[i].length; j++) {
          if (skill.includes(skill_trees[i][j])) arr.push(skill_trees[i][j]);
      }
      let isPossible = true;
      for (let k = 0; k < arr.length; k++) {
          if (arr[k] !== skill[k]) isPossible = false; 
      }
      if (isPossible) answer += 1;
  }

  return answer;
}
