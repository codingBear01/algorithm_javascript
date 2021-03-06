/*# 문제71 : 깊이 우선 탐색

**깊이 우선 탐색**이란 목표한 노드를 찾기 위해 가장 우선순위가 높은 노드의 자식으로 깊이 들어갔다가 목표 노드가 존재하지 않으면 처음 방문한 노드와 연결된 다른 노드부터 그 자식 노드로 파고드는 검색 방법을 말합니다.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22aa2540-0fa0-4fc2-8953-4222bf62f824/Untitled.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22aa2540-0fa0-4fc2-8953-4222bf62f824/Untitled.png)

다음과 같이 리스트 형태로 노드들의 연결 관계가 주어진다고 할 때 깊이 우선 탐색으로 이 노드들을 탐색했을 때의 순서를 공백으로 구분하여 출력하세요.
*/

/*
입력
graph = {'E': ['D', 'A'],
         'F': ['D'],
         'A': ['E', 'C', 'B'],
         'B': ['A'],
         'C': ['A'],
         'D': ['E','F']}


출력
[ 'E', 'A', 'B', 'C', 'D', 'F' ]
*/

/*기능 요구사항
 */

graph = {
  A: ["E", "C", "B"],
  B: ["A"],
  C: ["A"],
  D: ["E", "F"],
  E: ["D", "A"],
  F: ["D"],
};

// function dfs(graph, start) {
//   let visited = [];
//   let stack = [start];

//   while (stack.length !== 0) {
//     let n = stack.pop();
//     //visited에 n이 포함되어 있지 않다면
//     if (!visited.includes(n)) {
//       //visited에 n을 push
//       visited.push(n);
//       //sub는 graph[n]에 visited에 포함되어 있지 않은 x만을 걸러서 배열로 반환
//       let sub = graph[n].filter((x) => !visited.includes(x));
//       for (let i of sub) {
//         stack.push(i);
//       }
//     }
//   }
//   return visited;
// }

// console.log(dfs(graph, "E"));

const dfs = (graph, startNode) => {
  let needVisitStack = []; // 탐색을 해야 할 노드들
  let visitedQueue = []; // 탐색을 마친 노드들
  needVisitStack.push(startNode);

  // 탐색을 해야 할 노드가 남아 있다면
  while (needVisitStack.length !== 0) {
    const node = needVisitStack.pop();
    if (!visitedQueue.includes(node)) {
      visitedQueue.push(node);
      needVisitStack = [...needVisitStack, ...graph[node]];
    }
  }

  return visitedQueue;
};
console.log(dfs(graph, "E"));

/*답안
 */
