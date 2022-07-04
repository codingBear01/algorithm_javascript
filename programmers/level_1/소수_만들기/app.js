const input = [1, 2, 3, 4];
// const input = [1,2,7,6,4]

console.log(solution(input));

function solution(nums) {
  /* Recursion Ver.*/
  let primeNumCnts = 0;

  const combinationArr = combinations(nums, 3);

  combinationArr.forEach((el) => {
    let tmp = el.reduce((acc, curr) => acc + curr);

    if (isPrime(tmp)) primeNumCnts++;
  });

  return primeNumCnts;

  /* For Loop Ver. */
  // const len = nums.length;
  // let answer = 0;

  // for (let i = 0; i < len; i++) {
  //   for (let j = i + 1; j < len; j++) {
  //     for (let k = j + 1; k < len; k++) {
  //       if (isPrime(nums[i] + nums[j] + nums[k])) answer++;
  //     }
  //   }
  // }

  // return answer;
}

function isPrime(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  // for (let i = 2; i < Math.sqrt(num); i++) {
  //   if (num % i === 0) return false;
  // }
  return true;
}

function combinations(arr, selectNum) {
  const result = [];

  if (selectNum === 1) return arr.map((val) => [val]);
  // console.log('arr', arr);
  arr.forEach((fixed, idx, origin) => {
    const rest = origin.slice(idx + 1);
    const reCombinations = combinations(rest, selectNum - 1);
    const attached = reCombinations.map((combination) => {
      return [fixed, ...combination];
    });
    result.push(...attached);
  });
  return result;
}
