const strings = ['sun', 'bed', 'car'];
const n = 1;
// const strings = ["abce", "abcd", "cdx"]
// const n = 2

console.log(solution(strings, n));

function solution(strings, n) {
  /* sort() Ver. */
  strings.sort((a, b) => {
    if (a[n] > b[n]) return 1;
    if (a[n] < b[n]) return -1;
    if (a[n] === b[n])
      if (a > b) return 1;
      else return -1;
    return 0;

    /* Using Boolean */
    // if (first === second) return (a > b) - (a < b)
    // else return (first > second) - (first < second)
  });
  return strings;

  /* localeCompare() Ver. */
  // return strings.sort((a, b) => a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]))
}
