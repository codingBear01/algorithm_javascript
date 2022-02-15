/*# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.
*/

/*
입력 : AAABBBcccddd
출력 : aaabbbCCCDDD
*/

/* 기능 요구사항
ASCII 코드 활용하여 배열 만든 다음 for문 돌면서 바꿔주기?
*/

let input = prompt("대소문자를 섞어 문자열을 입력하세요.");

//빈 배열을 만들어서 문자열 내 대문자값을 소문자로 push(소문자도 마찬가지)
let arr = [];

for (let i = 0; i < input.length; ++i) {
  if (input[i] === input[i].toUpperCase()) {
    arr.push(input[i].toLowerCase());
  } else {
    arr.push(input[i].toUpperCase());
  }
}
console.log(arr.join(""));

/*답안
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);
 */
