/*# 문제46 : 각 자리수의 합 2

1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)
*/

/* 기능 요구사항
input값 split후 for문으로 더하기.
*/

let input = [];
let sum = 0;

for (let i = 0; i < 20; ++i) {
  input[i] = i + 1;
}
input = input.join("").split("");

// for (let i = 0; i < input.length; ++i) {
//   sum += +input[i];
// }
// console.log(sum);

let i = 0;

while (i < input.length) {
  sum += +input[i];
  i++;
}
console.log(sum);

/*답안
let arr = [];
let sum = 0;

for (let i=0; i<20; i++){
  arr[i] = i+1;
}

arr.forEach((n) => {
  while(n !== 0){
    sum += (n % 10);
    n = Math.floor(n/10);
  }
})

console.log(sum);
 */
