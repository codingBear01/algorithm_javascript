const sizes = [
  [60, 50],
  [30, 70],
  [60, 30],
  [80, 40],
];
// const sizes = [[10, 7], [12, 3], [8, 15], [14, 7], [5, 15]]
// const sizes = [[14, 4], [19, 6], [6, 16], [18, 7], [7, 11]]

console.log(solution(sizes));

function solution(sizes) {
  let width = 0;
  let height = 0;

  for (let size of sizes) {
    const sortedSize = size.sort((a, b) => a - b);
    if (width < sortedSize[0]) width = sortedSize[0];
    if (height < sortedSize[1]) height = sortedSize[1];
  }

  return width * height;
}
