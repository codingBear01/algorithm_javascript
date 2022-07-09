const arr = [5, 9, 7, 10];
const divisor = 5;
// const arr = [2, 36, 1, 3]
// const divisor = 1
// const arr = [3,2,6]
// const divisor = 10

console.log(solution(arr, divisor));

function solution(arr, divisor) {
  /* filter() Ver. */
  const answer = arr.filter((v) => v % divisor === 0).sort((a, b) => a - b);
  // const answer = arr.filter((v) => !(v % divisor));
  return answer.length > 0 ? answer : [-1];
  /* for...of & forEach() Ver. */
  // let answer = [];
  // arr.forEach(v => v % divisor === 0 ? answer.push(v) : '')
  // for (const num of arr) if (num % divisor === 0) answer.push(num);
  // answer.sort((a, b) => a - b);
  // return answer.length > 0 ? answer : [-1];
}
