const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// const N = 4;
// const stages = [4, 4, 4, 4, 4];

console.log(solution(N, stages));

function solution(N, stages) {
  // const answer = []; // 실패율이 큰 스테이지부터 내림차순
  // const stageFailures = [];
  // let userCnts = stages.length;

  // for (let i = 0; i < N; i++) {
  //   if (!stageFailures[i]) {
  //     stageFailures[i] = { stage: i + 1, challenger: 0 };
  //   }
  // }

  // for (let i = 0; i < stages.length; i++) {
  //   for (let j = 1; j <= N; j++) {
  //     if (j === stages[i]) {
  //       stageFailures[j - 1].challenger++;
  //     }
  //   }
  // }

  // for (let i = 0; i < stageFailures.length; i++) {
  //   stageFailures[i].remain = userCnts;
  //   let temp = userCnts - stageFailures[i].challenger;
  //   userCnts = temp;

  //   const failureRate = stageFailures[i].challenger / stageFailures[i].remain;
  //   stageFailures[i].rate = failureRate;
  // }

  // const sortedFailures = stageFailures.sort((a, b) => b.rate - a.rate);

  // for (const sortedFailure of sortedFailures) {
  //   answer.push(sortedFailure.stage);
  // }

  // return answer;

  const answer = [];
  let remainedUsers = stages.length;

  for (let i = 1; i <= N; i++) {
    const challengers = stages.filter((challenger) => challenger === i).length;
    const failureRate = challengers / remainedUsers;
    remainedUsers -= challengers;
    answer.push({ stage: i, rate: failureRate });
  }
  console.log(answer);
  answer.sort((a, b) => {
    if (a.rate === b.rate) return a.stage - b.stage;
    else return b.rate - a.rate;
  });
  console.log(answer);
  return answer.map((obj) => obj.stage);

  // let stageRatio = [];
  // let users = stages.length;

  // for (let i = 1; i <= N; i++) {
  //   let noClear = stages.filter((user) => i === user).length;
  //   let ratio = noClear / users;
  //   users -= noClear;
  //   stageRatio.push({ stage: i, ratio: ratio });
  // }

  // stageRatio.sort((a, b) => {
  //   if (a.ratio === b.ratio) return a.stage - b.stage;
  //   else return b.ratio - a.ratio;
  // });

  // return stageRatio.map((obj) => obj.stage);
}
