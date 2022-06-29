const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : 'input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [n, m] = input[0].split(' ').map(Number);
let graph = [];
let visited = new Array(n + 1).fill(false);

for (let i = 1; i <= n; i++) {
  graph[i] = [];
}

for (let i = 0; i < m; i++) {
  const [from, to] = input[i + 1].split(' ').map((val) => +val);
  graph[from].push(to);
  graph[to].push(from);
}

let cnt = 0;
for (let i = 1; i <= n; i++) {
  if (!visited[i]) {
    dfs(i);
    cnt++;
  }
}
console.log(cnt);

function dfs(start) {
  if (visited[start]) return;
  visited[start] = true;
  for (let i = 0; i < graph[start].length; i++) {
    let next = graph[start][i];
    if (visited[next] === false) {
      dfs(next);
    }
  }
}
