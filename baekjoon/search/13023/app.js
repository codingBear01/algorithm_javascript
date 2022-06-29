const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

solution(input);
function solution(input) {
  const [n, m] = input[0].split(' ').map(Number);
  const arr = [];
  const visited = [];
  let arrive = false;

  for (let i = 0; i < n; i++) {
    arr[i] = [];
  }

  for (let i = 0; i < m; i++) {
    const [a, b] = input[i + 1].split(' ').map(Number);
    arr[a].push(b);
    arr[b].push(a);
  }

  for (let i = 0; i < n; i++) {
    dfs(i, 1);
    if (arrive) return;
  }

  if (arrive) {
    console.log(1);
  } else {
    console.log(0);
  }

  function dfs(now, depth) {
    if (depth === 5 || arrive) {
      arrive = true;
      return;
    }
    visited[now] = true;
    for (let i = 0; i < arr[now].length; i++) {
      const next = arr[now][i];
      if (!visited[next]) {
        dfs(i, depth + 1);
      }
    }
    visited[now] = false;
  }
}
