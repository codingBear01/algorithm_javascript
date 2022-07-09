const price = 3;
const money = 20;
const count = 4;

console.log(solution(price, money, count));

function solution(price, money, count) {
  /* My Solution */
  let sum = 0;
  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }
  return sum > money ? sum - money : 0;

  /* Gauss Ver. */
  // const result = (price * count * (count + 1)) / 2 - money;
  // return result > 0 ? result : 0;
}
