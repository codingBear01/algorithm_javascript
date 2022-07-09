const n = 10;
// const n = 5

console.log(solution(n));

function solution(n) {
  // if (n === 2) return 1
  // let answer = 1;
  // for (let i = 3; i <= n; i++) {
  //     const isPrime = primeChecker(i)
  //     if (isPrime) answer++
  // }
  // return answer;

  /* Eratosthenes' Sieve*/
  let answer = Array(n + 1)
    .fill(true)
    .fill(false, 0, 2);
  // Array()에서 괄호 안의 숫자는 인덱스이므로 주어진 수까지 채우려면 n + 1 해줘야 함.
  // 0과 1은 소수가 아니므로 false 처리

  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (answer[i]) for (let j = i * i; j <= n; j += i) answer[j] = false;
  }

  return answer.filter((val) => val === true).length;
}

function primeChecker(i) {
  if (i % 2 === 0) return false;
  for (let j = 3; j <= Math.floor(Math.sqrt(i)); j++)
    if (i % j === 0) return false;
  return true;
}
