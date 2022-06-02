const input = [2, 5];

console.log(solution(input[0], input[1]));

// my solution
function solution(x, n) {
  var answer = [];
  for (let i = 1; i <= n; ++i) answer.push(x * i);
  return answer;
}
