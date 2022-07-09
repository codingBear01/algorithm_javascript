const a = 3;
const b = 5;
// const a = 3
// const b = 3
// const a = 5
// const b = 3

console.log(solution(a, b));

function solution(a, b) {
  let answer = 0;
  let num1;
  let num2;

  if (a > b) {
    num1 = b;
    num2 = a;
  } else {
    num1 = a;
    num2 = b;
  }

  /* for loop Ver. */
  // for (let i = num1; i <= num2; i++) answer += i
  // return answer;

  /* Gauss Ver. */
  return ((num1 + num2) * (num2 - num1 + 1)) / 2;
}
