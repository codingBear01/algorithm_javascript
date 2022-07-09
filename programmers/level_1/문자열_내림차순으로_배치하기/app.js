const s = 'Zbcdefg';

console.log(solution(s));

function solution(s) {
  /* My Solution */
  s = [...s];

  s.sort((a, b) => {
    if (a < b) return 1;
    else if (a > b) return -1;
    return 0;
  });
  return s.join('');
  /* 삼항 연산자 Ver. */
  // return s.split('').sort((a, b) => a > b ? -1 : 1).join('')

  /* reverse() Ver.*/
  // return s.split('').sort().reverse().join('');
}
