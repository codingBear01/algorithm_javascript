const input = 'one4seveneight';
// const input = '23four5six7';
// const input = '2three45sixseven';
// const input = '123';

console.log(solution(input));

function solution(s) {
  const answer = s
    .replace(/zero/g, '0')
    .replace(/one/g, '1')
    .replace(/two/g, '2')
    .replace(/three/g, '3')
    .replace(/four/g, '4')
    .replace(/five/g, '5')
    .replace(/six/g, '6')
    .replace(/seven/g, '7')
    .replace(/eight/g, '8')
    .replace(/nine/g, '9');

  return +answer;
}
