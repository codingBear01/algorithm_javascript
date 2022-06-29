/*# 문제2 : 배열의 내장함수

배열 내장함수를 이용하여 코드를 입력하고 다음과 같이 출력되게 하세요.*/

var arr = [200, 100, 300];
arr.splice(2, 0, 10000);
//splice(시작idx, 몇 개 지울지, 지운 자리에 넣을 값)
console.log(arr);

/*(method) Array<number>.splice(start: number, deleteCount: number, ...items: number[]): number[] (+1 overload)
Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

@param start — The zero-based location in the array from which to start removing elements.
@param deleteCount — The number of elements to remove.
@param items — Elements to insert into the array in place of the deleted elements.
@returns — An array containing the elements that were deleted.*/

//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
