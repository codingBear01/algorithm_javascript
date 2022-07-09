const n = 10
// const n = 5

console.log(solution(n))

function solution(n) {
  if (n === 2) return 1
  let answer = 1;
  for (let i = 3; i <= n; i++) {
      const isPrime = primeChecker(i)
      if (isPrime) answer++
  }
  return answer;
}

function primeChecker(i) {
  if (i % 2 === 0) return false
  for (let j = 3; j <= Math.floor(Math.sqrt(i)); j++) if (i % j === 0) return false
  return true
}
