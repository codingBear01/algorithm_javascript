/*# 문제16 : 로꾸거

문장이 입력되면 거꾸로 출력하는 프로그램을 만들어 봅시다.*/

const word = prompt("로꾸꺼! 단어를 입력하세요.");
const reveresedWord = word.split("").reverse().join("");

console.log(reveresedWord);

//sort는 문자열 내림차순 정렬할 때 못 씀.(오름차순은 가능) 숫자만 대소 비교 해서 내림차순 정렬 가능.
