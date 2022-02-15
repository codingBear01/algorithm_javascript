/*# 문제39 : 오타 수정하기

혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

**문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**
*/

/*
입력 : querty
출력 : euerty

입력 : hqllo my namq is hyqwon
출력 : hello my name is hyewon
*/

/* 기능 요구사항
input값 for문 돌면서 q찾기
input값 내 q 있으면 e로 변경
*/

const word = prompt("입력하세요.");

function replaceAll(str, searchStr, replaceStr) {
  //searchStr 기준으로 str를 split하고 replaceStr를 split된 각 str 앞에다 붙여주기
  return str.split(searchStr).join(replaceStr);
}

console.log(replaceAll(word, "q", "e"));

/*정규식 사용
const word = prompt('입력하세요.');

console.log(word.replace(/q/gi, 'e'));

(method) String.replace(searchValue: {
    [Symbol.replace](string: string, replaceValue: string): string;
}, replaceValue: string): string (+3 overloads)
Replaces first match with string or all matches with RegExp.

@param searchValue — A string or RegExp search value.
@param replaceValue — A string containing the text to replace for match.
*/
