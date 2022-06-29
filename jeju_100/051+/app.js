/*# 문제51 : merge sort를 만들어보자

병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

> 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
> 

출처 : 위키피디아

다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.
*/

/* 기능 요구사항
 */

//arr.length가 1이하가 될 때까지 둘로 쪼개는 함수
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  //가운뎃점을 구함
  const mid = Math.floor(arr.length / 2);
  //0~가운뎃점 left, 나머지 right
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  //아래 merge함수의 parameter인 left와 right로 mergeSort함수의 left와 right를 각각 넣어줌
  return merge(mergeSort(left), mergeSort(right));
}
//parameter에서 mergeSort를 호출했기 때문에 나누는 작업 다시 반복하여 arr.length가 1이하가 될 때까지 arr 쪼개기
function merge(left, right) {
  let result = [];
  //left와 right 모두 값이 있다면 첫 번째 while문 사용해서 right[0]이 left[0]보다 크다면 left 첫째값 잘라내서 result 배열에 담기, right 값만 남았기에 세 번째 while문 돌면서 right 첫째값 result 배열에 담기
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  while (left.length) {
    result.push(left.shift());
  }
  while (right.length) {
    result.push(right.shift());
  }

  return result;
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(mergeSort(array));

/*답안
 */
