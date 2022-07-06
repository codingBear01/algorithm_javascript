const left = 13;
const right = 17;
// const left = 24
// const right = 27

console.log(solution(left, right));

function solution(left, right) {
  /* My Solution */
  const obj = {};
  let answer = 0;

  for (let i = left; i <= right; i++) {
    if (!obj[i]) obj[i] = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) {
        obj[i]++;
      }
    }
  }

  for (const key in obj) {
    if (obj[key] % 2 === 0) answer += +key;
    else answer -= +key;
  }

  return answer;

  /* Simpler Ver. */
  // let answer = 0;

  // for (let i = left; i <= right; i++) {
  //   let count = 0;
  //   for (let j = 1; j <= i; j++) {
  //     if (i % j === 0) count++;
  //   }
  //   if (count % 2) answer -= i;
  //   else answer += i;
  // }

  // return answer;
}
