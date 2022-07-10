const n = 3;
const m = 12;
// const n = 2
// const m = 5

console.log(solution(n, m));

function solution(n, m) {
  /* Loop Ver. */
  const gcd = getGcd(n, m);
  const lcm = getLcm(n, m);
  return [gcd, lcm];

  /* Euclidean Algorithm */
  // const gcd = (n, m) => (n % m === 0 ? m : gcd(m, n % m));
  // const lcm = (n, m) => (n * m) / gcd(n, m);
  // return [gcd(n, m), lcm(n, m)];
}

function getGcd(n, m) {
  // 최대공약수
  let gcd = 1;
  for (let i = 2; i <= Math.min(n, m); i++) {
    if (n % i === 0 && m % i === 0) gcd = i;
  }
  return gcd;
}

function getLcm(n, m) {
  // 최소공배수
  let lcm = 1;
  while (true) {
    if (lcm % n === 0 && lcm % m === 0) break;
    lcm++;
  }
  return lcm;
}
