const input = [5, 3];

solution(input);

// my solution
function solution(n) {
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let row = 0; row < b; row++) {
    let sum = "";
    for (let col = 0; col < a; col++) sum += "*";
    console.log(sum);
  }
}

/* repeat()
function solution(n) {
  const a = Number(n[0]),
    b = Number(n[1]);
  const row = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(row);
  }
}
*/

/*
function solution(n) {
  const a = Number(n[0]),
    b = Number(n[1]);
  let result = "";

  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      result += "*";
    }
    result += "\n";
  }
  console.log(result);
}
*/
