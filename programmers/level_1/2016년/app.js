const a = 5;
const b = 24;

console.log(solution(a, b));

function solution(a, b) {
  /* My Solution */
  // const date = new Date(2016, a - 1, b);
  // const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // return dates[date.getDay()];
  /* toString() Ver. */
  //   return new Date(2016, a - 1, b).toString().slice(0, 3).toUpperCase();
  /* Cal Ver. */
  // const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // let daySum = b + 4;
  // for (let i = 0; i < a - 1; i++) {
  //   daySum += months[i];
  // }
  // return dates[daySum % 7];
  /* reduece() Ver. */
  // const months = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  // const dates = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  // let daySum;
  // if (a < 2) {
  //   daySum = b + 4;
  // } else {
  //   daySum = months.slice(0, a - 1).reduce((acc, curr) => acc + curr) + b + 4;
  // }
  // return dates[daySum % 7];
}
