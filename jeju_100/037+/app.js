/*
# 문제37 : 반장 선거

새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.
*/

/*
입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.
*/

const array = prompt("이름을 입력해주세요.").split(" ");
let result = {};
let winner = "";

for (let index in array) {
  //array의 값 하나하나를 탐색하면서 result 객체에 이름을 key, 등장횟수를 value로 입력
  let val = array[index];
  //result[val]가 아직 undefined이라면 1을 주고 이미 등장한 적 있다면 +1을 해줌
  result[val] = result[val] === undefined ? 1 : (result[val] = result[val] + 1);
}

winner = Object.keys(result).reduce(function (a, b) {
  return result[a] > result[b] ? a : b;
});
/*
(method) Array<string>.reduce(callbackfn: (previousValue: string, currentIndex: number, array: string[]) => string): string (+2 overloads)
Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

@param callbackfn — A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array.

@param initialValue — If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value.
  */

console.log(`${winner}(이)가 총 ${result[winner]}표로 반장이 되었습니다.`);
