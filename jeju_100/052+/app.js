/*# 문제52 : quick sort

다음 빈 칸을 채워 퀵 정렬을 완성해주세요.
*/

/*
입력
출력
*/

/* 기능 요구사항
 */

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const pivot = arr[0];
  const left = [];
  const right = [];

  //pivot값과 arr[i]를 for문 돌면서 비교해서 pivot보다 작으면 left, 크면 right에 담음. arr.length <=1이 되면 작업이 끝나고 left, pivot, right 합친 값을 반환.
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat(pivot, quickSort(right));
}

const array = prompt("배열을 입력하세요")
  .split(" ")
  .map((n) => parseInt(n, 10));

console.log(quickSort(array));

/*답안
 */
