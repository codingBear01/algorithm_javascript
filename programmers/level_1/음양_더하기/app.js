const absolutes = [4, 7, 12];
const signs = [true, false, true];
// const absolutes = [1, 2, 3];
// const signs = [false, false, true];

console.log(solution(absolutes, signs));

function solution(absolutes, signs) {
  let answer = 0;

  for (let i = 0; i < signs.length; i++) {
    signs[i] ? (answer += absolutes[i]) : (answer += absolutes[i] * -1);
  }

  return answer;
}
