const board = [
  [0, 0, 0, 0, 0],
  [0, 0, 1, 0, 3],
  [0, 2, 5, 0, 1],
  [4, 2, 4, 4, 2],
  [3, 5, 1, 3, 1],
];
const moves = [1, 5, 3, 5, 1, 2, 1, 4];

console.log(solution(board, moves));

function solution(board, moves) {
  const basket = [];
  let answer = 0;

  for (const move of moves) {
    for (const i in board) {
      if (board[i][move - 1] !== 0) {
        if (basket[basket.length - 1] === board[i][move - 1]) {
          answer += 2;
          basket.pop();
        } else {
          basket.push(board[i][move - 1]);
        }
        board[i][move - 1] = 0;
        break;
      }
    }
  }

  return answer;
}
