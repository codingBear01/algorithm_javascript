const seoul = ['Jane', 'Kim'];

console.log(solution(seoul));

function solution(seoul) {
  /* findIndex() & indexOf() Ver. */
  const x = seoul.findIndex((v) => v === 'Kim');
  // const x = seoul.indexOf('Kim');

  /* for loop Ver. */
  // let x = 0
  // seoul.forEach((v, i) => {
  //     if (v === 'Kim') x = i
  // })
  return `김서방은 ${x}에 있다`;
}
