/*# 문제62 : 20220215출력하기

`20220215`을 출력합니다.  아래 기준만 만족하면 됩니다.

1. 코드 내에 숫자가 없어야 합니다.
    - 예) console.log(20220215)이라고 하시면 안됩니다.
2. 파일 이름이나 경로를 사용해서는 안됩니다.
3. 시간, 날짜 함수를 사용해서는 안됩니다.
4. 에러 번호 출력을 이용해서는 안됩니다.
5. input을 이용해서는 안됩니다.
*/

/*
입력

출력
*/

/*기능 요구사항
 */

/*답안
//abcdefgh
//20190923
//정규표현식 활용해서 일치하는 문자 개수만큼 숫자 출력
const user_s = 'aacdddddddddfffffffffgghhh';
let result_s = '';

console.log(`${user_s.match(/a/g).length}${Number(user_s.match(/b/g))}${user_s.match(/c/g).length}${user_s.match(/d/g).length}${Number(user_s.match(/e/g))}${user_s.match(/f/g).length}${user_s.match(/g/g).length}${user_s.match(/h/g).length}`);
 */
