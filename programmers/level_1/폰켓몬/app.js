// const nums = [3, 1, 2, 3];
// const nums = [3,3,3,2,2,4]
const nums = [3, 3, 3, 2, 2, 2];

console.log(solution(nums));

function solution(nums) {
  /* Solution 1. - My Solution */
  let answer = [];
  const n = nums.length / 2;

  for (let i = 0; i < nums.length; i++) {
    while (answer.length < n) {
      if (!answer.includes(nums[i])) {
        answer.push(nums[i]);
      } else if (answer.includes(nums[i])) {
        i++;
      }
    }
  }

  return answer.filter((ans) => ans !== undefined).length;

  /* Solution 2. */
  // const answer = [];
  // const n = nums.length / 2;

  // for (const num of nums) {
  //   if (answer.length < n) {
  //     if (!answer.includes(num)) answer.push(num);
  //   }
  // }

  // return answer.length;

  /* Solution 3. - using map() */
  // const answer = [];
  // const n = nums.length / 2;

  // nums.map((num) =>
  //   answer.length < n && !answer.includes(num) ? answer.push(num) : num
  // );

  // return answer.length;

  /* Solution 4. - using Set */
  // const answer = new Set(nums),
  //   n = nums.length / 2;

  // return answer.size > n ? n : answer.size;

  /* Solution 5. - indexOf() */
  // const n = nums.length / 2;
  // const phonekemons = nums.filter((v, i, t) => t.indexOf(v) === i);

  // return phonekemons.length < n ? phonekemons.length : n;

  /* Solution 6. - Object */
  // const phonekemons = {};
  // const n = nums.length / 2;

  // for (const num of nums) {
  //   if (!phonekemons[num]) {
  //     phonekemons[num] = 1;
  //   } else {
  //     phonekemons[num]++;
  //   }
  // }

  // return Object.keys(phonekemons).length > n
  //   ? n
  //   : Object.keys(phonekemons).length;
}
