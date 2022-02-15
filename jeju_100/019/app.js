/*# 문제19 : 제곱을 구하자

공백으로 구분하여 두 숫자 a와 b가 주어지면, **a의 b승**을 구하는 프로그램을 작성하세요.*/

/*
입력 : 2 3
출력 : 8
 */
const input = prompt("숫자 2개를 공백으로 구분하여 입력하시오.").split(" ");
const a = input[0];
const b = input[1];

document.write(`${a}의 ${b}승은 ${a ** b}!`);

/*답안
const n = prompt('수를 입력하세요.').split(' ');
console.log(Math.pow(parseInt(n[0], 10), parseInt(n[1], 10)));
*/
