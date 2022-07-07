const n = 45;
// const n = 125

console.log(solution(n));

function solution(n) {
  /* My Solution */
  // let answer = '';
  // const sam = n.toString(3);
  // for (let i = sam.length - 1; i >= 0; i--) {
  //   answer += sam[i];
  // }
  // return parseInt(answer, 3);

  /* reverse Ver. */
  return parseInt([...n.toString(3)].reverse().join(''), 3);
}
