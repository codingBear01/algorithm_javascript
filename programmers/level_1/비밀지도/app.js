const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];
// const n = 6;
// const arr1 = [46, 33, 33, 22, 31, 50];
// const arr2 = [27, 56, 19, 14, 14, 10];

solution(n, arr1, arr2);
function solution(n, arr1, arr2) {
  const answer = [];

  for (let i = 0; i < n; i++) {
    let result = '';
    let binary1 = arr1[i]
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, ' ')
      .replace(/1/g, '#');
    let binary2 = arr2[i]
      .toString(2)
      .padStart(n, 0)
      .replace(/0/g, ' ')
      .replace(/1/g, '#');

    for (let j = 0; j < binary1.length; j++) {
      binary1[j] !== binary2[j] ? (result += '#') : (result += binary1[j]);
    }
    answer.push(result);
  }
  return answer;

  // const answer = [];

  // for (let i = 0; i < n; i++) {
  //   let result = '';
  // const binary1 = arr1[i].toString(2).padStart(n, 0);
  // const binary2 = arr2[i].toString(2).padStart(n, 0);
  //   const binary1 =
  //     '0'.repeat(n - arr1[i].toString(2).length) + arr1[i].toString(2);
  //   const binary2 =
  //     '0'.repeat(n - arr2[i].toString(2).length) + arr2[i].toString(2);
  //   for (let j = 0; j < n; j++) {
  //     binary1[j] === '1' || binary2[j] === '1'
  //       ? (result += '#')
  //       : (result += ' ');
  //   }
  //   answer.push(result);
  // }

  // return answer;

  // return arr1.map((v, i) =>
  //   (v | arr2[i])
  //     .toString(2)
  //     .padStart(n, 0)
  //     .replace(/1|0/g, (a) => (+a ? '#' : ' '))
  // );
}
