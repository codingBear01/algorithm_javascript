const input = [1, 2, 3, 4, 5]; // [1]
// const input = [1,3,2,4,2] // [1, 2, 3]

console.log(solution(input));

function solution(answers) {
  const supojas = [
    { supoja: 1, cnt: 0, arr: [1, 2, 3, 4, 5] },
    { supoja: 2, cnt: 0, arr: [2, 1, 2, 3, 2, 4, 2, 5] },
    { supoja: 3, cnt: 0, arr: [3, 3, 1, 1, 2, 2, 4, 4, 5, 5] },
  ];

  /* My Solution */
  for (let i = 0; i < answers.length; i++) {
    for (const supoja of supojas) {
      if (answers[i] === supoja.arr[i % supoja.arr.length]) supoja.cnt++;
    }
  }

  /* Filter Ver. */
  // for (const supoja of supojas) {
  //   supoja.cnt = answers.filter(
  //     (val, i) => val === supoja.arr[i % supoja.arr.length]
  //   ).length;
  // }

  const maxAns = Math.max(supojas[0].cnt, supojas[1].cnt, supojas[2].cnt);

  return supojas.filter((obj) => obj.cnt === maxAns).map((val) => val.supoja);
}
