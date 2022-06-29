const input = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
// const input = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
// const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

console.log(solution(input, 'right'));

function solution(numbers, hand) {
  const keyPad = {
    1: [0, 0],
    2: [1, 0],
    3: [2, 0],
    4: [0, 1],
    5: [1, 1],
    6: [2, 1],
    7: [0, 2],
    8: [1, 2],
    9: [2, 2],
    '*': [0, 3],
    0: [1, 3],
    '#': [2, 3],
  };

  let leftPosition = '*';
  let rightPosition = '#';
  let answer = '';

  for (const num of numbers) {
    if (num === 1 || num === 4 || num === 7) {
      answer += 'L';
      leftPosition = num;
    } else if (num === 3 || num === 6 || num === 9) {
      answer += 'R';
      rightPosition = num;
    } else {
      const rightDiff =
        Math.abs(keyPad[num][0] - keyPad[rightPosition][0]) +
        Math.abs(keyPad[num][1] - keyPad[rightPosition][1]);
      const leftDiff =
        Math.abs(keyPad[num][0] - keyPad[leftPosition][0]) +
        Math.abs(keyPad[num][1] - keyPad[leftPosition][1]);

      if (rightDiff < leftDiff) {
        answer += 'R';
        rightPosition = num;
      } else if (rightDiff > leftDiff) {
        answer += 'L';
        leftPosition = num;
      } else {
        if (hand === 'right') {
          answer += 'R';
          rightPosition = num;
        } else {
          answer += 'L';
          leftPosition = num;
        }
      }
    }
  }

  return answer;
}
