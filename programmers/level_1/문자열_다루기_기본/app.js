// const s = 'a234';
const s = '1234';

console.log(solution(s));

function solution(s) {
  /* My Solution */
  let answer = true;
  const len = s.length;

  if (len === 4 || len === 6) answer = true;
  else {
    answer = false;
    return answer;
  }

  for (const c of s) {
    if (isNaN(c)) {
      answer = false;
      return answer;
    }
  }

  return answer;
  /* Regular Expressions 1. */
  // let regex = /^\d{6}$|^\d{4}$/;
  // return regex.test(s);
  /* Regular Expressions 2. */
  // let result = false;
  // if ((s.length === 4 || s.length === 6) && /^[0-9]+$/.test(s)) result = true;

  // return result;
}
