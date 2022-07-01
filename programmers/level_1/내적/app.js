const a = [1, 2, 3, 4];
const b = [-3, -1, 0, 2];
// const a = [-1,0,1]
// const b = [1,0,-1]

console.log(solution(a, b));

function solution(a, b) {
  let answer = 0;

  for (const i in a) {
    answer += a[i] * b[i];
  }

  return answer;
  // return a.reduce((x, y, i) => x + y * b[i], 0);
}
