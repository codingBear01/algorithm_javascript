/*
# 문제35 : Factory 함수 사용하기

2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

<pass>에 코드를 작성하여 two함수를 완성하세요.
*/

function one(n) {
  function two(value) {
    const sq = Math.pow(value, n);
    return sq;
  }
  return two;
}
//function two()에 one(n)이라는 값을 할당해주는 변수들.
const a = one(2);
const b = one(3);
const c = one(4);

//function two(value)값에 10넣어줌.
console.log(a(10));
console.log(b(10));
console.log(c(10));

/*답안
 */