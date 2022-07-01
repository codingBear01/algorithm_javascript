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

  stageInfo.sort((a, b) => b.rate - a.rate);

  return stageInfo.map((val) => val.stage);

  // const answer = []
  // let remainedUsers = stages.length

  // for (let i = 1; i <= N; i++) {
  //     const challengers = stages.filter(user => user === i).length
  //     const failureRates = challengers / remainedUsers
  //     remainedUsers -= challengers
  //     answer.push({stage: i, rate: failureRates})
  // }

  // answer.sort((a, b) => b.rate - a.rate)

  // return answer.map(obj => obj.stage)
}
