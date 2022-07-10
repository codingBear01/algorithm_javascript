const s = 'AB';
const n = 1;
// const s = "z"
// const n = 1
// const s = "a B z"
// const n = 4

console.log(solution(s, n));

function solution(s, n) {
  /* My Solution */
  let answer = '';
  for (const c of s) {
    const index = c.charCodeAt(0);
    if (c === ' ') {
      answer += ' ';
    } else if ((index + n > 90 && index <= 90) || index + n > 122) {
      answer += String.fromCharCode(index + n - 26);
    } else {
      answer += String.fromCharCode(index + n);
    }
  }
  return answer;

  /* map() Ver. */
  // return s
  //   .split('')
  //   .map((val) => {
  //     if (val === ' ') return val;
  //     const index = val.charCodeAt();
  //     return val.toUpperCase().charCodeAt() + n > 90
  //       ? String.fromCharCode(index + n - 26)
  //       : String.fromCharCode(index + n);
  //   })
  //   .join('');

  /* without ASCII CODE */
  // const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  // const lower = 'abcdefghijklmnopqrstuvwxyz';
  // let answer = '';

  // for (let i = 0; i < s.length; i++) {
  //   const c = s[i];
  //   if (c === ' ') {
  //     answer += ' ';
  //     continue;
  //   }
  //   const chars = upper.includes(c) ? upper : lower;
  //   let index = chars.indexOf(c) + n;
  //   if (index >= chars.length) index -= chars.length;
  //   answer += chars[index];
  // }

  // return answer;
}
