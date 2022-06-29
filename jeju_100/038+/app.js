/*
# 문제38 : 호준이의 아르바이트

호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**
*/

/*
입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6
*/

/* 기능 요구사항
입력값 중 1~3위 값 찾아내기
1~3위 해당 값 개수 세기
*/

/*const gradeArray = prompt("성적을 입력하세요").split(" ");
let result = {};

for (let index in gradeArray) {
  //array의 값 하나하나를 탐색하면서 result 객체에 이름을 key, 등장횟수를 value로 입력
  let val = gradeArray[index];
  //result[val]가 아직 undefined이라면 1을 주고 이미 등장한 적 있다면 +1을 해줌
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

const candyArray = Object.values(result);

console.log(
  candyArray[candyArray.length - 1] +
    candyArray[candyArray.length - 2] +
    candyArray[candyArray.length - 3]
);
*/
const scores = prompt("점수입력")
  .split(" ")
  .map(function (n) {
    return parseInt(n, 10);
  });

arr.sort((a, b) => {
  return a - b;
});

let count = 0;
let array = [];
//array.length가 3보다 작을 동안 while 돌기
while (array.length < 3) {
  //array 맨끝값 잘라내기
  let n = arr.pop();
  //array.includes(n)이 true가 아니라면(n이 array에 포함된 값이 아니라면) array에다 n을 push
  if (!array.includes(n)) {
    array.push(n);
  }
  //while 도는 동안 count +1
  count += 1;
}
console.log(count);

/*
(method) Array<number>.includes(searchElement: number, fromIndex?: number): boolean
Determines whether an array includes a certain element, returning true or false as appropriate.

@param searchElement — The element to search for.

@param fromIndex — The position in this array at which to begin searching for searchElement.
*/
