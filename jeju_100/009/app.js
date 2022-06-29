/*# 문제9 : concat을 활용한 출력 방법

다음 소스 코드를 완성하여 날짜와 시간을 출력하시오.*/

var year = "2019";
var month = "04";
var day = "26";
var hour = "11";
var minute = "34";
var second = "27";

var result = year.concat(`/${month}/${day} ${hour}:${minute}:${second}`);
/*
(method) String.concat(...strings: string[]): string
Returns a string that contains the concatenation of two or more strings.
@param strings — The strings to append to the end of the string.
*/

console.log(result);

//expected output: 2019/04/26 11:34:27
