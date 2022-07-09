const s = '1234';
// const s = '-1234'

console.log(solution(s));

function solution(s) {
  /* My Solution */
  if (s[0] === '-') return s.slice(1) * -1;
  else return +s;

  /* Simple Ver. */
  // return +s;
  // return s / 1;
}
