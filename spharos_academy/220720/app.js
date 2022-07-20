const solution = (n) => {
  for (let i = 1; i <= 9; i++) {
    console.log('for ver.', `${n} * ${i} = ${n * i}`);
  }

  let i = 0;
  while (i < 9) {
    i++;
    console.log('while ver.', `${n} * ${i} = ${n * i}`);
  }
};

const recursion = (n, i) => {
  if (i === 10) return;
  console.log('recursion ver.', `${n} * ${i} = ${n * i}`);
  return recursion(n, i + 1);
};

const dup = () => {
  for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
      console.log(`${i}단: ${i} * ${j} = ${i * j}`);
    }
  }
};

solution(2);
recursion(2, 1);
dup();
