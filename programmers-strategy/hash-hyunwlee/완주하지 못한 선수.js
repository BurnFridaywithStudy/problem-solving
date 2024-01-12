function solution(participant, completion) {
  const map = new Map();
  participant.forEach(person => {
    if (map.has(person))
      map.set(person, map.get(person) + 1);
    else
      map.set(person, 1);
  });
  completion.forEach(person => {
    if (map.has(person))
      map.set(person, map.get(person) - 1);
  });
  return Array.from(map)
    .filter(([key, value]) => value > 0)
    .map(([key]) => key)
    .join(', ');
}

console.log(solution(
  ["leo", "kiki", "eden"],
  ["eden", "kiki"]
));
console.log(solution(
  ["marina", "josipa", "nikola", "vinko", "filipa"],
  ["josipa", "filipa", "marina", "nikola"]
));
console.log(solution(
  ["mislav", "stanko", "mislav", "ana"],
  ["stanko", "ana", "mislav"]
));
