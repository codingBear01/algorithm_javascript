const d = [1, 3, 2, 5, 4];
const budget = 9;
// const d = [2,2,3,3]
// const budget = 10

console.log(solution(d, budget));

function solution(d, budget) {
  /* Normal Ver. */
  // let answer = 0
  // let sum = 0;
  // d.sort((a, b) => a - b);

  // for (const num of d) {
  //   sum += num;
  //   if (sum > budget) break;
  //   answer++;
  // }

  // return answer;

  // let answer = 0;
  // d.sort((a, b) => a - b);

  // for (const num of d) {
  //   if (num > budget) break;
  //   budget -= num;
  //   answer++;
  // }
  // return answer;

  /* forEach Ver. */
  // let answer = 0;
  // let sum = 0;
  // d.sort((a, b) => a - b).forEach((val) => {
  //   sum += val;
  //   if (sum <= budget) {
  //     answer++;
  //   }
  // });
  // return answer;

  /* reduce Ver. */
  d.sort((a, b) => a - b);
  while (d.reduce((acc, curr) => acc + curr, 0) > budget) d.pop();
  return d.length;
}
