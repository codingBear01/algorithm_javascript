const n = 3;
// const n = 4

console.log(solution(n));

function solution(n) {
  /* My Solution */
  let answer = '';
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 1) answer += '수';
    else if (i % 2 === 0) answer += '박';
  }
  return answer;

  /* substring() Ver. */
  // return '수박'.repeat(n).substring(0, n);
}
