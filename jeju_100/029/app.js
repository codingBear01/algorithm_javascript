/*
# 문제29 : 대문자만 지나가세요

진구는 영어 학원 아르바이트를 하고 있습니다. 반 아이들은 알파벳을 공부하는 학생들인데 오늘은 대문자 쓰기 시험을 봤습니다.

**알파벳 하나만을 입력하고 그 알파벳이 대문자이면 YES를 아니면 NO를 출력하는 프로그램**을 만들어 주세요.
*/

const input = prompt("알파벳을 입력하세요!");

const arr = [];
for (let i = 65; i <= 90; ++i) {
  const alphabet = String.fromCharCode(i);

  arr.push(alphabet);
}

for (let i = 0; i < arr.length; ++i) {
  if (input === arr[i]) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
//배열에다 대문자를 넣고 for문으로 일치 여부 돌리니까 output이 26개 나옴

/*답안
const data = prompt('알파벳을 입력하세요.');

if (data === data.toUpperCase()){
  console.log('YES');
} else {
  console.log('NO');
}
*/
