const arr = [1, 1, 3, 3, 0, 1, 1];
// const arr = [4,4,4,3,3]

console.log(solution(arr));

function solution(arr) {
  const answer = [];
  // for (const v of arr) if(answer[answer.length - 1] !== v) answer.push(v)
  // return answer
  // return arr.filter((v, i, a) => v !== a[i + 1])
  arr.forEach((v, i, a) => (v !== a[i + 1] ? answer.push(v) : ''));
  return answer;
}
