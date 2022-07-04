const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

console.log(solution(array, commands));

function solution(array, commands) {
  const answer = [];

  for (let idx = 0; idx < commands.length; idx++) {
    const i = commands[idx][0]; // 자르기 시작 idx
    const j = commands[idx][1]; // 자르기 끝 idx
    const k = commands[idx][2]; // 반환값 idx

    const result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];
    answer.push(result);
  }

  return answer;
}
