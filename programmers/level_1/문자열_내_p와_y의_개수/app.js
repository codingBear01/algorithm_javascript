const s = 'pPoooyY';
// const s = "Pyy"

console.log(solution(s));

function solution(s) {
  /* Obj Ver. */
  const pyCnts = { p: 0, y: 0 };
  s = s.toLowerCase();

  for (const c of s) {
    if (c === 'p') pyCnts['p']++;
    else if (c === 'y') pyCnts['y']++;
  }

  return (pyCnts['p'] === 0 && pyCnts['y'] === 0) || pyCnts['p'] === pyCnts['y']
    ? true
    : false;

  /* reduce() Ver. */
  // return [...s.toLowerCase()].reduce((acc, cur) => {
  //   if (cur === 'p') return acc + 1;
  //   else if (cur === 'y') return acc - 1;
  //   return acc;
  // }, 0)
  //   ? false
  //   : true;
}
