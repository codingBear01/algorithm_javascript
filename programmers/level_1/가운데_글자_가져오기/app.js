const s = 'abcde';
// const s = 'qwer'

console.log(solution(s));

function solution(s) {
  const center = Math.ceil(s.length / 2);
  // return s.length % 2 === 0 ? s[center - 1] + s[center] : s[center - 1];
  return s.substring(center - 1, s.length % 2 === 0 ? center + 1 : center);
}
