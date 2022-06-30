const idList = ['muzi', 'frodo', 'apeach', 'neo'];
const report = [
  'muzi frodo',
  'apeach frodo',
  'frodo neo',
  'muzi neo',
  'apeach muzi',
];
// const idList = ['ryan', 'con'];
// const report = ['ryan con', 'ryan con', 'ryan con', 'ryan con'];
const k = 2;

console.log(solution(idList, report, k));

function solution(id_list, report, k) {
  // const reportLogs = [...new Set(report)];
  // const userReportedInfo = {};
  // const answer = new Array(id_list.length).fill(0);

  // for (const i of id_list) {
  //   if (!userReportedInfo[i]) {
  //     userReportedInfo[i] = [];
  //   }
  // }

  // reportLogs.forEach((el) => {
  //   const [user, reportedUser] = el.split(' ');

  //   if (!userReportedInfo[reportedUser].includes(user)) {
  //     userReportedInfo[reportedUser].push(user);
  //   }
  // });

  // for (const key in userReportedInfo) {
  //   if (userReportedInfo[key].length >= k) {
  //     userReportedInfo[key].forEach((user) => {
  //       answer[id_list.indexOf(user)]++;
  //     });
  //   }
  // }

  // return answer;

  const userList = id_list.reduce((result, currentId) => {
    result[currentId] = [0, []];
    return result;
  }, {});

  for (const id of new Set(report)) {
    const [user, reportedUser] = id.split(' ');

    userList[user][1].push(reportedUser);
    userList[reportedUser][0]++;
  }

  const bannedUsers = id_list.filter((id) => userList[id][0] >= k);
  const emailCnts = id_list.map(
    (id) => userList[id][1].filter((id) => bannedUsers.includes(id)).length
  );

  return emailCnts;
}
