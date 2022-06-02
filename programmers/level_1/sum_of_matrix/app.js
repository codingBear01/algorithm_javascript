const inputArr1 = [[1], [2]];
const inputArr2 = [[4], [5]];

console.log(solution(inputArr1, inputArr2));

// my solution
function solution(arr1, arr2) {
  var answer = [];
  for (let i = 0; i < arr1.length; ++i) {
    let temp = [];
    for (let j = 0; j < arr1[i].length; ++j) {
      temp.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(temp);
  }
  return answer;
}

// function solution(arr1, arr2) {
//   var answer = [[]];
//   console.log(answer);
//   for (let i = 0; i < arr1.length; ++i) {
//     answer[i] = [];
//     for (let j = 0; j < arr1.length; ++j) {
//       answer[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
//   return answer;
// }
