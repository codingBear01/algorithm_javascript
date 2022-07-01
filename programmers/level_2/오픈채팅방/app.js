const input = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

console.log(solution(input));

function solution(record) {
  /* Map Ver. */
  const answer = [];
  const map = new Map();
  for (const info of record) {
    const [action, id, nickname] = info.split(' ');
    if (action === 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
      continue;
    }
    if (action === 'Enter') {
      answer.push([id, '님이 들어왔습니다.']);
    }
    map.set(id, nickname);
  }
  return answer.map((el) => map.get(el[0]) + el[1]);
  /* Obj Ver. */
  // const answer = [];
  // const obj = {};
  // for (const info of record) {
  //   const [action, id, nickname] = info.split(' ');
  //   if (action === 'Leave') {
  //     answer.push([id, '님이 나갔습니다.']);
  //     continue;
  //   }
  //   if (action === 'Enter') {
  //     answer.push([id, '님이 들어왔습니다.']);
  //   }
  //   obj[id] = nickname;
  // }
  // return answer.map((el) => obj[el[0]] + el[1]);
  /* Simple Ver.*/
  // const users = {};
  // const info = [];
  // const actObj = {
  //   Enter: '님이 들어왔습니다.',
  //   Leave: '님이 나갔습니다.',
  // };
  // for (const rec of record) {
  //   const [act, id, nick] = rec.split(' ');
  //   if (nick) users[id] = nick;
  //   if (act !== 'Change') info.push([act, id]);
  // }
  // return info.map(([act, id]) => `${users[id]}${actObj[act]}`);
  /* filter method Ver. */
  // const userName = {};
  // const message = {
  //   Leave: '나갔습니다.',
  //   Enter: '들어왔습니다.',
  // };
  // return record
  //   .map((v) => v.split(' '))
  //   .filter((v) => {
  //     const [state, userId, name] = v;
  //     if (name) {
  //       userName[userId] = name;
  //     }
  //     return state !== 'Change';
  //   })
  //   .map((v) => `${userName[v[1]]}님이 ${message[v[0]]}`);
}
