const numbers = [2, 1, 3, 4, 1];
// const numbers = [5,0,2,7]

console.log(solution(numbers));

function solution(numbers) {
  /* My Solution */
  // const answer = [];
  // numbers.sort((a, b) => a - b);

  // for (let i = 0; i < numbers.length; i++) {
  //   for (let j = i + 1; j < numbers.length; j++) {
  //     const sum = numbers[i] + numbers[j];
  //     if (!answer.includes(sum)) answer.push(sum);
  //   }
  // }
  // return answer.sort((a, b) => a - b);

  /* Set Ver. */
  let answer = [];
  numbers.sort((a, b) => a - b);

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const sum = numbers[i] + numbers[j];
      answer.push(sum);
    }
  }

  return (answer = [...new Set(answer)].sort((a, b) => a - b));
}
