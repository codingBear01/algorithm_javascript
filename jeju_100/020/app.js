/*# 문제20 : 몫과 나머지

공백으로 구분하여 두 숫자가 주어집니다.
두번째 숫자로 첫번째 숫자를 나누었을 때 **그 몫과 나머지를 공백으로 구분하여 출력하세요.***/

/*
입력 : 10 2
출력 : 5 0
 */
const input = prompt("숫자 2개를 공백으로 구분하여 입력하시오.").split(" ");
const a = input[0];
const b = input[1];

document.write(`두 값의 몫은 ${a / b} 나머지는 ${a % b}!`);

/*답안
const n = prompt('수를 입력하세요.').split(' ');

const result = Math.floor(parseInt(n[0], 10) / parseInt(n[1], 10));
const left = parseInt(n[0], 10) % parseInt(n[1], 10);

console.log(result, left);
 */
