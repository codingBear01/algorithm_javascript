const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];

console.log(solution(N, stages));

function solution(N, stages) {
  const answer = []; // 실패율이 큰 스테이지부터 내림차순
  // const failureLate = [];
  const stageFailures = {};
  let stageCnts = N;

  for (let i = 1; i <= N; i++) {
    if (!stageFailures[i]) stageFailures[i] = [];
  }

  // 이중 for문
  // include, indexOf, findIndex 등등
  for (let i = 0; i < stages.length; i++) {
    console.log(stages[i]);
    if (i === stages[i]) {
      console.log(i + '와' + stages[i] + '는 일치');
    }
  }

  return answer;
}
