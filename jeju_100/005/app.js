/*# 문제5 : for문 계산

다음 코드의 출력 값으로 알맞은 것은?*/

var a = 10;
var b = 2;

for (var i = 1; i < 5; i += 2) {
  //i 2씩 증가, 총 2번 순환
  a += i;
}

console.log(a + b); //14 + 2
//output: 16
