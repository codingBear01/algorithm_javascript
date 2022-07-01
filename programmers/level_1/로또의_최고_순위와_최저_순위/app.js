const lottos = [44, 1, 0, 0, 31, 25];
const winNums = [31, 10, 45, 1, 6, 19];
// const lottos = [0, 0, 0, 0, 0, 0];
// const winNums = [38, 19, 20, 40, 15, 25];
// const lottos = [45, 4, 35, 20, 3, 9];
// const winNums = [20, 9, 3, 45, 4, 35];

console.log(solution(lottos, winNums));

function solution(lottos, win_nums) {
  const answer = [];
  const rank = {
    6: 1,
    5: 2,
    4: 3,
    3: 4,
    2: 5,
    1: 6,
    0: 6,
  };
  let cnt = 0;
  let zeroCnt = 0;

  for (const lotto of lottos) {
    if (lotto === 0) zeroCnt++;
    if (win_nums.includes(lotto)) cnt++;
    // for (const num of win_nums) {
    //   if (lotto === num) cnt++
    // }
  }

  answer.push(rank[cnt + zeroCnt]);
  answer.push(rank[cnt]);

  return answer;
}
