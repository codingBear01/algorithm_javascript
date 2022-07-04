const participant = ['leo', 'kiki', 'eden'];
const completion = ['eden', 'kiki'];
// const participant = ["marina", "josipa", "nikola", "vinko", "filipa"]
// const completion = 		["josipa", "filipa", "marina", "nikola"]
// const participant =["mislav", "stanko", "mislav", "ana"]
// const completion = 		["stanko", "ana", "mislav"]

console.log(solution(participant, completion));

function solution(participant, completion) {
  /* My Solution*/
  // let answer = '';
  // for (let i = 0; i < participant.length; i++) {
  //   for (let j = 0; j < completion.length; j++) {
  //     if (participant[i] === completion[j]) {
  //       participant[i] = '';
  //       completion[j] = '';
  //     }
  //   }
  // }
  // for (const val of participant) {
  //   if (val !== '') answer = val;
  // }
  // return answer;
  /* Sort Ver.*/
  // participant.sort();
  // completion.sort();
  // for (let i = 0; i < participant.length; i++) {
  //   if (participant[i] !== completion[i]) return participant[i];
  // }
  // return participant.find((el, i) => el !== completion[i])
  /* Reduce Ver. */
  // const dic = completion.reduce((obj, key) => {
  //   obj[key] = obj[key] ? obj[key] + 1 : 1;
  //   return obj;
  // }, {});
  // // const dic = completion.reduce(
  // //   (obj, key) => ((obj[key] = obj[key] ? obj[key] + 1 : 1), obj),
  // //   {}
  // // );
  // return participant.find((key) => {
  //   if (dic[key]) dic[key] -= 1;
  //   else return true;
  // });
  /* Obj Ver. */
  // const obj = {};
  // for (const p of participant) {
  //   obj[p] = obj[p] ? obj[p] + 1 : 1;
  // }
  // for (const c of completion) {
  //   obj[c] -= 1;
  // }
  // for (const key in obj) {
  //   if (obj[key] !== 0) return key;
  // }
  /* Map Ver. */
  // const map = new Map();
  // for (const p of participant) {
  //   if (!map.get(p)) map.set(p, 1);
  //   else map.set(p, map.get(p) + 1);
  // }
  // for (const c of completion) {
  //   if (map.get(c)) map.set(c, map.get(c) - 1);
  // }
  // for (const p of participant) {
  //   if (map.get(p) !== 0) return p;
  // }
  const map = new Map();

  for (let i = 0; i < participant.length; i++) {
    let a = participant[i],
      b = completion[i];

    map.set(a, (map.get(a) || 0) + 1);
    map.set(b, (map.get(b) || 0) - 1);
  }
  for (let [k, v] of map) {
    if (v !== 0) return k;
  }

  return 'nothing';
}
