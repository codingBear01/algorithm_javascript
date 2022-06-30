const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
// const n = 6;
// const arr1 = [46, 33, 33, 22, 31, 50];
// const arr2 = [27, 56, 19, 14, 14, 10];

console.log(solution(n, arr1, arr2));

function solution(n, arr1, arr2) {
  // const answer = [];
  // for (let i = 0; i < n; i++) {
  //   answer.push([]);
  // }
  // let numArr1 = arr1;
  // let numArr2 = arr2;

  // for (let i = 0; i < n; i++) {
  //   let binary1 = arr1[i]
  //     .toString(2)
  //     .padStart(n, 0)
  //     .replace(/0/g, ' ')
  //     .replace(/1/g, '#');
  //   let binary2 = arr2[i]
  //     .toString(2)
  //     .padStart(n, 0)
  //     .replace(/0/g, ' ')
  //     .replace(/1/g, '#');

  //   numArr1[i] = binary1;
  //   numArr2[i] = binary2;

  //   for (let j = 0; j < n; j++) {
  //     numArr1[i][j] !== numArr2[i][j]
  //       ? answer[i].push('#')
  //       : answer[i].push(numArr1[i][j]);
  //   }

  //   answer[i] = answer[i].join('');
  // }

  // return answer;

  const answer = [];

  for (let i = 0; i < n; i++) {
    let result = '';
    // const binary1 = arr1[i].toString(2).padStart(n, 0);
    // const binary2 = arr2[i].toString(2).padStart(n, 0);
    const binary1 =
      '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
    const binary2 =
      '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);

    for (let j = 0; j < n; j++) {
      binary1[j] === '1' || binary2[j] === '1'
        ? (result += '#')
        : (result += ' ');
    }

    answer.push(result);
  }

  return answer;
}
