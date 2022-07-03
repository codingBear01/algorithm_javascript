const input = [1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3]; // 6
// const input = [1, 2, 3]; // 3
// const input = [2, 2, 1, 1, 2, 2, 1, 1, 2, 2, 2, 1, 2]; // 5
// const input = [2]; // 1

// [1, 1, 3, 3, 2, 2, 4, 5, 1, 1, 1, 3, 3, 3] -> [2, 2, 2, 1, 1, 3, 3] -> [3, 2, 2] -> [1, 2] -> [1, 1] -> [2] -> [1] 줄이기 작업 6회 수행

console.log(solution(input));

function solution(nums) {
  let answer = 0;

  function getNumArr(nums) {
    let matchedCnts = 0;
    let checkingNum = 0;
    const arr = [];
    answer++;

    for (let i = 0; i <= nums.length; i++) {
      if (checkingNum !== nums[i]) {
        if (matchedCnts > 0) {
          arr.push(matchedCnts);
        }
        checkingNum = nums[i];
        matchedCnts = 1;
      } else {
        matchedCnts++;
      }
    }
    // arr의 값이 최초로 1이 되는 순간 반환
    if (arr.length === 1 && arr[0] === 1) return answer;
    else return getNumArr(arr);
  }

  return getNumArr(nums);
}
