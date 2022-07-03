const input = [1, 2, 3, 4];
// const input = [1,2,7,6,4]

console.log(solution(input));

function solution(nums) {
  /* Recursion Ver.*/
  //   const result = getCombinations(nums, 3);
  //   const combinations = [...result];
  //   const answer = [];
  //   for (let i = 0; i < combinations.length; i++) {
  //     let sum = 0;
  //     for (let j = 0; j < combinations[i].length; j++) {
  //       sum += combinations[i][j];
  //     }
  //     let remain = 0;
  //     for (let j = 1; j <= sum; j++) {
  //       if (sum % j === 0) {
  //         remain++;
  //       }
  //     }
  //     if (remain === 2) answer.push(sum);
  //   }
  //   return answer.length;
  // }
  // function getCombinations(arr, selectNumber) {
  //   const results = [];
  //   if (selectNumber === 1) return arr.map((value) => [value]);
  //   // 1개씩 택할 때, 바로 모든 배열의 원소 return
  //   arr.forEach((fixed, index, origin) => {
  //     const rest = origin.slice(index + 1); // 해당하는 fixed를 제외한 나머지 뒤
  //     const combinations = getCombinations(rest, selectNumber - 1); // 나머지에 대해서 조합을 구한다.
  //     const attached = combinations.map((combination) => [fixed, ...combination]);
  //     //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
  //     results.push(...attached); // 배열 spread syntax 로 모두다 push
  //   });
  //   return results; // 결과 담긴 results return

  /* For Loop Ver. */
  let len = nums.length,
    answer = 0;

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (isPrime(nums[i] + nums[j] + nums[k])) {
          answer++;
        }
      }
    }
  }

  return answer;
}

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}
