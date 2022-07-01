const N = 5;
const stages = [2, 1, 2, 6, 2, 4, 3, 3];
// const N = 4;
// const stages = [4, 4, 4, 4, 4];

console.log(solution(N, stages));

function solution(N, stages) {
  let remainedUsers = stages.length;
  const stageInfo = [];

  for (let i = 0; i < N; i++) {
    stageInfo[i] = {
      stage: i + 1,
      challenger: 0,
      rate: 0,
    };
  }

  for (let i = 0; i < remainedUsers; i++) {
    for (let j = 1; j <= N; j++) {
      if (j === stages[i]) {
        stageInfo[j - 1].challenger++;
      }
    }
  }

  for (let i = 0; i < stageInfo.length; i++) {
    let temp = remainedUsers;
    stageInfo[i].rate = stageInfo[i].challenger / temp;
    remainedUsers = temp - stageInfo[i].challenger;
  }

  const sortedInfo = stageInfo.sort((a, b) => {
    if (a.rate === b.rate) {
      return a.stage - b.stage;
    } else {
      return b.rate - a.rate;
    }
  });

  return sortedInfo.map((val) => val.stage);

  // const answer = [];
  // let remainedUsers = stages.length;

  // for (let i = 1; i <= N; i++) {
  //   const challengers = stages.filter((challenger) => challenger === i).length;
  //   const failureRate = challengers / remainedUsers;
  //   remainedUsers -= challengers;
  //   answer.push({ stage: i, rate: failureRate });
  // }

  // answer.sort((a, b) => {
  //   if (a.rate === b.rate) return a.stage - b.stage;
  //   else return b.rate - a.rate;
  // });

  // return answer.map((obj) => obj.stage);
}
